import React, { Component } from 'react';
import {Player} from "../types/Player.interface";
import {findIndex, propEq, dropLast, last, clone} from 'ramda';
import './FivePlayers.scss';

import {shuffle} from "../util/shuffleArray";
import GameTable from "./GameTable";
import { Scoreboard } from "./Scoreboard";
import {GameControls} from "./GameControls";
import {PairingIndexes} from "../types/PairingIndexes.interface";
import {pairingIndexes} from "./pairingIndexes";

interface State {
    players: Array<Player>,
    roundIndex: number,
    scoreChangeHistory: Array<ScoreChange>
}

export interface ScoreChange {
    roundIndex: number,
    players: Array<Player>
}

class FivePlayers extends Component<{}, State> {

    constructor(props: State) {
        super(props);

        const initialPlayerNames: Array<string> = ["Mika", "Matti", "Tapio", "Niko", "Taneli"];
        const players: Array<Player> = initialPlayerNames.map( (name: string) => this.createPlayer(name));

        this.state = {
            players,
            roundIndex: 0,
            scoreChangeHistory: []
        }
    }

    render() {
        return <section className="container" id="FivePlayers">
            <h3>Game chart</h3>
            <div className="divider"></div>

            <GameTable players={this.state.players}
                        roundIndex={this.state.roundIndex}
                        addScore={this.addScore.bind(this)}></GameTable>

            <Scoreboard players={this.state.players}
                        changePlayerName={this.changePlayerName.bind(this)}>
            </Scoreboard>

            <GameControls resetScore={this.resetScore.bind(this)}
                            shufflePlayers={this.shufflePlayers.bind(this)}
                            revertChange={this.revertChange.bind(this)}></GameControls>

        </section>;
    }
    
    createPlayer = (name: string): Player =>  {
        return { name, score: 0 };
    };

    addScore = (changeCode: string): void => {
        
        const players: Array<Player> = clone(this.state.players);
        const changeHistory: Array<ScoreChange> = this.state.scoreChangeHistory;
        changeHistory.push({roundIndex: this.state.roundIndex, players: clone(this.state.players)});

        const pairings: PairingIndexes = pairingIndexes[this.state.roundIndex];
        const roundIndex: number = this.state.roundIndex;
        const nextRoundIndex = roundIndex === 4 ? 0 : roundIndex + 1;

        switch(changeCode) {
            case 'BLUE':
                players[pairings.blueOne].score += 2;
                players[pairings.blueTwo].score += 2;
                break;
            case 'RED':
                players[pairings.redOne].score += 2;
                players[pairings.redTwo].score += 2;
                break;
            case 'TIE':
                players[pairings.blueOne].score += 1;
                players[pairings.blueTwo].score += 1;
                players[pairings.redOne].score += 1;
                players[pairings.redTwo].score += 1;
                break;
        }


        this.setState({players, roundIndex: nextRoundIndex, scoreChangeHistory: changeHistory});
    };

    resetScore = (): void => {
        const players = this.state.players.map( (player: Player) => ({name: player.name, score: 0}));
        this.setState({players, scoreChangeHistory: []});
    };

    revertChange = (): void => {
        if(this.state.scoreChangeHistory.length >= 1) {
            const changeHistory = this.state.scoreChangeHistory;
            const lastState: ScoreChange = clone(changeHistory[changeHistory.length - 1]);
            const updatedChangeHistory: Array<ScoreChange> = dropLast(1, changeHistory);

            this.setState({
                players: lastState.players,
                scoreChangeHistory: updatedChangeHistory,
                roundIndex: lastState.roundIndex
            });
        }
    };

    changePlayerName = (player: Player, name: string): void => {
        const oldName: string = player.name;
        const players: Array<Player> = this.state.players;
        const playerIndex: number = findIndex(propEq('name', oldName))(players);
        players[playerIndex].name = name;
        this.setState({players});
    };

    shufflePlayers = (): void =>  {
        const players = shuffle(this.state.players);
        this.setState({players});
    };

}

export default FivePlayers;

