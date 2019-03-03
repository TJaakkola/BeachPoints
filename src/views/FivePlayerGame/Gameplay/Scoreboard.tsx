import {Player} from "../../../types/Player.interface";
import React from "react";
import {clone} from 'ramda';
import {Table} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import './Scoreboard.scss';

interface Props {
    players: Array<Player>
}

export const Scoreboard = (props: Props) => <>
    <Typography align="center" variant='h4' gutterBottom id="scoreboard-header">Scoreboard</Typography>
    <Table id="scoreboard" className="table centered striped is-fullwidth">
        <TableBody>
        {clone(props.players).sort((a: Player, b: Player) => b.score - a.score)
            .map((player: Player, playerIndex: number) =>
                <TableRow key={playerIndex}>
                    <TableCell><strong>{player.name}</strong></TableCell>
                    <TableCell><strong>{player.score}</strong></TableCell>
                    <TableCell style={{width: '65%'}}>
                        <div className="progress">
                            <div className="determinate" style={{ width: 100 * player.score / 21 + "%" }}></div>
                        </div>
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
</>;

