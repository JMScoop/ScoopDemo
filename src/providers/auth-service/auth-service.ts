import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import * as auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthServiceProvider {

  private lock: any;

  constructor(
    public events: Events,
    public storage: Storage
  ) {
    let options = {
      auth: {
        params: {
          scope: 'openid profile email user_metadata'
        }
      }
    };
    this.lock = new Auth0Lock('TOHt37bTNqIXTo7SdgwPG0pPhkvnyKOq', 'jmscoop.auth0.com', options);
    this.lock.on('authenticated', (authResult) => {
      this.setSession(authResult);
      this.events.publish('user:logged_in');
      this.lock.getUserInfo(authResult.accessToken, (err, profile) => {
        if (err) {
          // doh!
          console.log(err);
        }
        console.log(profile);
      });
    });
    this.lock.on('authorization_error', err => {
      // handle authentication errors here
    });
  }

  public login(): void {
    this.lock.show();
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = new Date().getTime() + 10 * 60 * 60 * 1000;
    this.storage.set('access_token', authResult.accessToken);
    this.storage.set('id_token', authResult.idToken);
    this.storage.set('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    this.storage.remove('access_token');
    this.storage.remove('id_token');
    this.storage.remove('expires_at');
    this.events.publish('user:logged_out');
  }

  public isAuthenticated(): Promise<boolean> {
    // Check whether the current time is past the
    // access token's expiry time
    return this.storage.get('expires_at').then(
      (expiry: number) => {
        return new Date().getTime() < expiry;
      }
    )
  }
}
