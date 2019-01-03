import React, { Component } from 'react';
import {Player} from "../types/Player.interface";
import './GameTable.scss';
import {pairingIndexes} from "./pairingIndexes";
import {PairingIndexes} from "../types/PairingIndexes.interface";

interface Props {
    players: Array<Player>,
    roundIndex: number,
    addScore: (resultCode: string) => void
}

class GameTable extends Component<Props> {

    render() {
        return <table className="table centered striped is-fullwidth">
            <thead>
                <tr>
                    <th>Side A</th>
                    <th>Score</th>
                    <th>Side B</th>
                </tr>
            </thead>
            <tbody>
                {this.createFullRoundMarkup()}
            </tbody>
        </table>;
    }

    createFullRoundMarkup(): any {
        return pairingIndexes.map( (pairingIndexes: PairingIndexes, index: number) =>
            <tr key={index}>{this.createRoundMarkup(pairingIndexes, index)}</tr>);
    }

    createRoundMarkup(pairings: PairingIndexes, rowIndex: number): any {
        return <>
            <td><strong>{this.props.players[pairings.blueOne].name} {this.props.players[pairings.blueTwo].name}</strong></td>
                <td>
                    { rowIndex === this.props.roundIndex &&
                    <div>
                        <span><a onClick={ () => this.props.addScore('BLUE')} className="btn waves-effect">&#8592;</a></span>
                        <span><a onClick={ () => this.props.addScore('TIE')} className="btn waves-effect">TIE</a></span>
                        <span><a onClick={ () => this.props.addScore('RED')} className="btn waves-effect">&#8594;</a></span>
                    </div>
                    }
                </td>
            <td><strong>{this.props.players[pairings.redOne].name} {this.props.players[pairings.redTwo].name}</strong></td>
        </>;
    }

}

export default GameTable;