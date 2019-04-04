import {lineups} from "../views/FivePlayerGame/lineups";
import {Lineup} from "../types/Lineup.interface";

export const lineupByRoundIndex = (roundIndex: number): Lineup => {
    return lineups[roundIndex % 25];
};