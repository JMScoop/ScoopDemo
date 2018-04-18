import {Person} from './person';

export class Ride {
	constructor (
		public driver: Person,
		public departs: Date,
		public origin: string = "",
		public destination: string = "",
		public seats_open: number = 3,
		public notes: string = "",
		public passengers: Person[] = [],
	){}

}

export const locations = [
	"Sunchase Apartments",
	"Charleston Townes",
	"Copper Beech",
	"The Hills: Stonegate",
	"The Harrison",
	"Forest Hills Manor LLC",
	"Forest Hills LLC",
	"Urban Exchange",
	"Downtown",
	"Pheasant Run",
	"Aspen Heights",
	"Foxhill Townes",
	"865",
	"North 38",
	"Hunters Ridge",
	"The Mill",
	"Campus View Apartments",
	"The Retreat",
	"Squire Hill",
	"Campus: The Quad",
	"Campus: Lakeside",
	"Campus: East Campus",
	"Campus: Memorial Hall"
];
