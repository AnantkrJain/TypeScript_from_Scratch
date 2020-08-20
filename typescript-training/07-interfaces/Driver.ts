import { CricletCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricletCoach();
let myGolfCoach = new GolfCoach();

let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}