import { PNJ } from './pnj.model';
import { Carte } from './carte.model';


export class Event {

    constructor(private nom:String, private description:String, private carte:Carte, private recompenses:String[], private pnjs:PNJ[], private done:boolean) {

    }
}

export class Scenario {

    constructor(private nom:String, private description:String) {

    }
}