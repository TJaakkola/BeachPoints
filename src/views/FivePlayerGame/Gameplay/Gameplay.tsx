import React from 'react';
import {Player} from "../../../types/Player.interface";
import './Gameplay.scss';
import {RoundResult} from "../../../types/RoundResult.interface";
import {ScoreMode} from "../../../types/ScoreMode.enum";
import {Lineup} from "../../../types/Lineup.interface";
import {Table} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Fab from "@material-ui/core/Fab";
import {lineupByRoundIndex} from "../../../util/lineup.util";
import {Score} from "../../../types/Score.interface";
import Typography from "@material-ui/core/Typography";

interface Props {
    players: Array<Player>,
    roundIndex: number,
    addLineupScore: (roundResult: RoundResult) => void,
    scoreMode: ScoreMode,
    scores: Array<Score>
}

const previousRound = (players: Array<Player>, lineup: Lineup, score: Score) => {
    return <TableRow>
        <TableCell>{blueLineup(players, lineup)}</TableCell>
        <TableCell>{score.roundResult.blue} - {score.roundResult.red}</TableCell>
        <TableCell>{redLineup(players, lineup)}</TableCell>
    </TableRow>
};

const currentRoundScores = (addLineupScore: (roundResult: RoundResult) => void, scoreMode: ScoreMode) => {
    switch (scoreMode) {
        case ScoreMode.TWO:
            return roundScoreModeTwo(addLineupScore);
        case ScoreMode.THREE:
            return roundScoreModeThree(addLineupScore);
        case ScoreMode.FOUR:
            return roundScoreModeFour(addLineupScore);
    }
};

const roundScoreModeTwo = (addLineupScore: (roundResult: RoundResult) => void) => <div>
    <Fab onClick={() => addLineupScore({blue: 2, red: 0})} className="score-button" size="small" color="primary">2-0</Fab>
    <Fab onClick={() => addLineupScore({blue: 1, red: 1})} className="score-button" size="small" color="default">1-1</Fab>
    <Fab onClick={() => addLineupScore({blue: 0, red: 2})} className="score-button" size="small" color="secondary">0-2</Fab>
</div>;

const roundScoreModeThree = (addLineupScore: (roundResult: RoundResult) => void) => <div>
    <Fab onClick={() => addLineupScore({blue: 3, red: 0})} className="score-button" size="small" color="primary">3-0</Fab>
    <Fab onClick={() => addLineupScore({blue: 2, red: 1})} className="score-button" size="small" color="primary">2-1</Fab>
    <Fab onClick={() => addLineupScore({blue: 1, red: 2})} className="score-button" size="small" color="secondary">1-2</Fab>
    <Fab onClick={() => addLineupScore({blue: 0, red: 3})} className="score-button" size="small" color="secondary">0-3</Fab>
</div>;

const roundScoreModeFour = (addLineupScore: (roundResult: RoundResult) => void) => <div>
    <Fab onClick={() => addLineupScore({blue: 4, red: 0})} className="score-button" size="small" color="primary">4-0</Fab>
    <Fab onClick={() => addLineupScore({blue: 3, red: 1})} className="score-button" size="small" color="primary">3-1</Fab>
    <Fab onClick={() => addLineupScore({blue: 2, red: 2})} className="score-button" size="small" color="default">2-2</Fab>
    <Fab onClick={() => addLineupScore({blue: 1, red: 3})} className="score-button" size="small" color="secondary">1-3</Fab>
    <Fab onClick={() => addLineupScore({blue: 0, red: 4})} className="score-button" size="small" color="secondary">0-4</Fab>
</div>;

const blueLineup = (players: Array<Player>, lineup: Lineup) => <>{players[lineup.blueOne].name}<br />{players[lineup.blueTwo].name}</>;
const redLineup = (players: Array<Player>, lineup: Lineup) => <>{players[lineup.redOne].name}<br />{players[lineup.redTwo].name}</>;

const currentRound = (players: Array<Player>, lineup: Lineup, addLineupScore: (roundResult: RoundResult) => void, scoreMode: ScoreMode) => {
    return <TableRow>
        <TableCell>{blueLineup(players, lineup)}</TableCell>
        <TableCell>{currentRoundScores(addLineupScore, scoreMode)}</TableCell>
        <TableCell>{redLineup(players, lineup)}</TableCell>
    </TableRow>
};

const nextRound = (players: Array<Player>, lineup: Lineup) => {
    return <TableRow>
        <TableCell>{blueLineup(players, lineup)}</TableCell>
        <TableCell>Next round</TableCell>
        <TableCell>{redLineup(players, lineup)}</TableCell>
    </TableRow>;
};

export const Gameplay = (props: Props) => <>
    <Typography align="center" variant="h4" id="gameplay-header">Gameplay</Typography>
    <Table id="gameplay" className="table centered striped is-fullwidth">
        <TableHead>
            <TableRow>
                <TableCell>Blue</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Red</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.roundIndex > 0 && previousRound(props.players, lineupByRoundIndex(props.roundIndex - 1), props.scores[props.roundIndex - 1])}
            {currentRound(props.players, lineupByRoundIndex(props.roundIndex), props.addLineupScore, props.scoreMode)}
            {nextRound(props.players, lineupByRoundIndex(props.roundIndex + 1))}
        </TableBody>
    </Table>
</>;
