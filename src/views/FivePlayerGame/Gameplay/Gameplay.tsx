import React from 'react';
import {Player} from "../../../types/Player.interface";
import './Gameplay.scss';
import {RoundResult} from "../../../types/RoundResult.interface";
import {ScoreMode} from "../../../types/ScoreMode.enum";
import {Lineup} from "../../../types/Lineup.interface";
import Fab from "@material-ui/core/Fab";
import {lineupByRoundIndex} from "../../../util/lineup.util";
import {Score} from "../../../types/Score.interface";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";

interface GameplayProps {
    players: Array<Player>,
    roundIndex: number,
    addLineupScore: (roundResult: RoundResult) => void,
    scoreMode: ScoreMode,
    scores: Array<Score>,
    roundCount: number
}

interface SetScoreProps {
    players: Array<Player>,
    roundIndex: number,
    addLineupScore: (roundResult: RoundResult) => void,
    scoreMode: ScoreMode
}

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
    <Fab onClick={() => addLineupScore({blue: 2, red: 0})} className="score-button primary" size="small"
         color="primary">2-0</Fab>
    <Fab onClick={() => addLineupScore({blue: 1, red: 1})} className="score-button default" size="small"
         color="default">1-1</Fab>
    <Fab onClick={() => addLineupScore({blue: 0, red: 2})} className="score-button secondary" size="small"
         color="secondary">0-2</Fab>
</div>;

const roundScoreModeThree = (addLineupScore: (roundResult: RoundResult) => void) => <div>
    <Fab onClick={() => addLineupScore({blue: 3, red: 0})} className="score-button primary" size="small"
         color="primary">3-0</Fab>
    <Fab onClick={() => addLineupScore({blue: 2, red: 1})} className="score-button primary" size="small"
         color="primary">2-1</Fab>
    <Fab onClick={() => addLineupScore({blue: 1, red: 2})} className="score-button secondary" size="small"
         color="secondary">1-2</Fab>
    <Fab onClick={() => addLineupScore({blue: 0, red: 3})} className="score-button secondary" size="small"
         color="secondary">0-3</Fab>
</div>;

const roundScoreModeFour = (addLineupScore: (roundResult: RoundResult) => void) => <div>
    <Fab onClick={() => addLineupScore({blue: 4, red: 0})} className="score-button primary" size="small"
         color="primary">4-0</Fab>
    <Fab onClick={() => addLineupScore({blue: 3, red: 1})} className="score-button primary" size="small"
         color="primary">3-1</Fab>
    <Fab onClick={() => addLineupScore({blue: 2, red: 2})} className="score-button default" size="small"
         color="default">2-2</Fab>
    <Fab onClick={() => addLineupScore({blue: 1, red: 3})} className="score-button secondary" size="small"
         color="secondary">1-3</Fab>
    <Fab onClick={() => addLineupScore({blue: 0, red: 4})} className="score-button secondary" size="small"
         color="secondary">0-4</Fab>
</div>;

const blueLineup = (players: Array<Player>, lineup: Lineup) => <>{players[lineup.blueOne].name}<br/>{players[lineup.blueTwo].name}</>;
const redLineup = (players: Array<Player>, lineup: Lineup) => <>{players[lineup.redOne].name}<br/>{players[lineup.redTwo].name}</>;

const SetScore = (props: SetScoreProps) => <>
    <Grid item
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="gameplay-row">
        <Grid item xs={2} className="gameplay-item">
            <Typography variant="h6">{blueLineup(props.players, lineupByRoundIndex(props.roundIndex))}</Typography>
        </Grid>
        <Grid item xs={8} className="gameplay-item">
            {currentRoundScores(props.addLineupScore, props.scoreMode)}
        </Grid>
        <Grid item xs={2} className="gameplay-item">
            <Typography variant="h6">{redLineup(props.players, lineupByRoundIndex(props.roundIndex))}</Typography>
        </Grid>
    </Grid>
</>;

export const Gameplay = (props: GameplayProps) => <>
    <Typography align="center" variant="h5" id="gameplay-header">Current teams</Typography>
    <SetScore players={props.players}
              addLineupScore={props.addLineupScore}
              roundIndex={props.roundIndex}
              scoreMode={props.scoreMode}></SetScore>
</>;
