import {Player} from "../types/Player.interface";
import React from "react";
import {clone} from 'ramda';

interface Props {
    players: Array<Player>,
    changePlayerName: (player: Player, name: string) => void
}

export const Scoreboard = (props: Props) => <>
    <h3 className="header-block">Scoreboard:</h3>
    <div className="divider"></div>
    <table className="table centered striped is-fullwidth">
        <thead>
        <tr>
            <th>Name</th>
            <th>Score</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {clone(props.players).sort((a: Player, b: Player) => b.score - a.score)
            .map((player: Player, playerIndex: number) =>
                <tr key={playerIndex}>
                    <td><strong><input onChange={(event: any) => props.changePlayerName(player, event.currentTarget.value)} value={player.name} type="text"/></strong></td>
                    <td><strong>{player.score}</strong></td>
                    <td style={{width: '70%'}}>
                        <div className="progress">
                            <div className="determinate" style={{ width: 100 * player.score / 21 + "%" }}></div>
                        </div>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
</>;

