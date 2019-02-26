import React from "react";
import {Score} from "../../../types/Score.interface";
import {Player} from "../../../types/Player.interface";
import {Table} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import {reverse} from "ramda";
import Fab from "@material-ui/core/Fab";

interface Props {
    scores: Array<Score>,
    players: Array<Player>,
    revertChange: () => void
}

export const Scorehistory = (props: Props) => <section id="scorehistory">
    <Table className="table centered striped is-fullwidth">
        <TableHead>
            <TableRow>
                <TableCell>Blue</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Red</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell></TableCell>
                <TableCell><Fab onClick={() => props.revertChange()} className="score-button" size="small" color="primary"><i className="material-icons">replay</i></Fab></TableCell>
                <TableCell></TableCell>
            </TableRow>
            {reverse(props.scores).map( (score: Score, index: number) =>
                <TableRow key={index}>
                    <TableCell>{props.players[score.lineup.blueOne].name} {props.players[score.lineup.blueTwo].name}</TableCell>
                    <TableCell>#{score.roundIndex + 1} <br/> {score.roundResult.blue} - {score.roundResult.red}</TableCell>
                    <TableCell>{props.players[score.lineup.redOne].name} {props.players[score.lineup.redTwo].name}</TableCell>
                </TableRow>)}
        </TableBody>
    </Table>;
</section>;