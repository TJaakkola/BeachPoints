import {Lineup} from "./Lineup.interface";
import {RoundResult} from "./RoundResult.interface";

export interface Score {
    lineup: Lineup,
    roundIndex: number,
    roundResult: RoundResult
}

