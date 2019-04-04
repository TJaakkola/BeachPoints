import {Player} from "../../../types/Player.interface";
import React from "react";
import {clone} from 'ramda';
import {Table} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import './Scoreboard.scss';
import {ScoreMode} from "../../../types/ScoreMode.enum";
import {scoreModeToNumberConverter} from "../../../util/ScoreMode.converter";

interface Props {
    players: Array<Player>,
    scoreMode: ScoreMode,
    roundCount: number
}

export const Scoreboard = (props: Props) => <>
    <Typography align="center" variant='h4' gutterBottom id="scoreboard-header">Scoreboard</Typography>
    <Table id="scoreboard" className="table centered striped is-fullwidth">
        <TableBody>
        {clone(props.players).sort((a: Player, b: Player) => b.score - a.score)
            .map((player: Player, playerIndex: number) =>
                <TableRow key={playerIndex}>
                    <TableCell><Typography variant={'h6'}>{player.name}</Typography></TableCell>
                    <TableCell><Typography variant={'h6'}>{player.score}</Typography></TableCell>
                    <TableCell style={{width: '65%'}}>
                        <div className="progress">
                            <div className="determinate" style={{ width: 100 * (player.score / (props.roundCount * scoreModeToNumberConverter(props.scoreMode) * 0.8 )) + "%" }}></div>
                        </div>
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
</>;

