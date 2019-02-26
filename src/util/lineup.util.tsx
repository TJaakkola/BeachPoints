import {lineups} from "../views/FivePlayerGame/lineups";

export const lineupByRoundIndex = (roundIndex: number) => {
    return lineups[roundIndex % 25];
};