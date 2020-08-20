import { Coach } from "./Coach";

export class CricletCoach implements Coach{
    
    getDailyWorkout(): string {
        return "Practice your spin bowling technique";
    }
}