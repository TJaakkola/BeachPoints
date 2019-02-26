import React, {Component} from "react";
import {Player} from "../types/Player.interface";
import FivePlayerGame from "./FivePlayerGame/FivePlayerGame";
import './GameSetup.scss';
import {PlayerSelection} from "./PlayerSelection";

interface State {
    players: Array<Player>
}

export class GameSetup extends Component<{}, State> {

    state: State = {
        players: []
    };

    render() {
        return this.state.players.length < 5 ?
            <PlayerSelection selectedPlayers={this.state.players}
                             togglePlayer={this.togglePlayer}/> :
            <FivePlayerGame players={this.state.players} />
    }

    togglePlayer = (player: Player): void => {
        const isAdd: boolean = this.state.players.includes(player);
        const updatedPlayers = isAdd ?
            [...this.state.players.filter( (ext: Player) => ext.name !== player.name)] :
            [...this.state.players, player];
        this.setState({players: updatedPlayers})
    };

}