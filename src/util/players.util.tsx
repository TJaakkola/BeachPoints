import {Player} from "../types/Player.interface";
import {RoundResult} from "../types/RoundResult.interface";
import {Lineup} from "../types/Lineup.interface";

export const addRoundResult = (players: Array<Player>, lineup: Lineup, roundResult: RoundResult): Array<Player> => {
    return players.map( (player: Player, index: number) => {
        if(lineup.blueOne === index || lineup.blueTwo === index) {
            player.score += roundResult.blue;
        } else if(lineup.redOne === index || lineup.redTwo === index) {
            player.score += roundResult.red;
        }

        return player;
    });
};

export const revertRoundResult = (players: Array<Player>, lineup: Lineup, roundResult: RoundResult): Array<Player> => {
    return players.map( (player: Player, index: number) => {
        if(lineup.blueOne === index || lineup.blueTwo === index) {
            player.score -= roundResult.blue;
        } else if(lineup.redOne === index || lineup.redTwo === index) {
            player.score -= roundResult.red;
        }

        return player;
    });
};