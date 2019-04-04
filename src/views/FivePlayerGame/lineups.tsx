import {range} from 'ramda';
import {Lineup} from "../../types/Lineup.interface";

/*
 * Initial mixing of players so that each player will play
 * with everyone and get one round out of field
 */
const lineupBase: Array<Lineup> = [
    {blueOne: 0, blueTwo: 1, redOne: 2, redTwo: 3, out: 4},
    {blueOne: 0, blueTwo: 4, redOne: 2, redTwo: 1, out: 3},
    {blueOne: 0, blueTwo: 3, redOne: 4, redTwo: 1, out: 2},
    {blueOne: 0, blueTwo: 2, redOne: 3, redTwo: 4, out: 1},
    {blueOne: 2, blueTwo: 4, redOne: 3, redTwo: 1, out: 0},
];

const shifting = (shift: number) => (playerIndex: number) => {
    // shift index by 2 so that nobody has to stay out twice in a row
    return (playerIndex + (shift * 2)) % 5;
};

// Create a 'full round' lineups where each player will get to be on the same side 4 rounds
const lineupsByRound: Array<Array<Lineup>> =
    range(0,5)
        .map( (shift: number) => lineupBase.map( (lineup: Lineup) => {
            const shiftByRound: any = shifting(shift);
            return {
                blueOne: shiftByRound(lineup.blueOne),
                blueTwo: shiftByRound(lineup.blueTwo),
                redOne: shiftByRound(lineup.redOne),
                redTwo: shiftByRound(lineup.redTwo),
                out: shiftByRound(lineup.out)
            }
        }));


// https://schneidenbach.gitbooks.io/typescript-cookbook/functional-programming/flattening-array-of-arrays.html
export const lineups: Array<Lineup> = ([] as Lineup[]).concat(...lineupsByRound);