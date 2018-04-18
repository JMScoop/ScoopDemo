import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ride } from '../../models/ride';
// import { Person } from '../../models/person';
// import { Car } from '../../models/car';
import { FeathersProvider } from '../feathers/feathers';
@Injectable()
export class RideProvider {

  constructor(private feathers: FeathersProvider) {}
  getRides(query: any): Observable<Ride[]> {
    // let rides: Ride[] = [];
    // let colecar: Car = new Car(2, "Gray Honda Accord" );
    // let cole: Person = new Person("Cole", "Gerhart", colecar);
    // let coleride: Ride = new Ride(new Date(), "ISAT", "The Mill", "", 2, [], cole);
    // rides.push(coleride);
    // return Observable.of(rides);
    return this.feathers.service('rides')
           .watch()
           .find({
              query: query
           });
  }

  postRide(ride: Ride): any {
    return this.feathers.service('rides').create(ride);
  }
}
