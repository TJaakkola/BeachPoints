import React from "react";
import {Score} from "../../../types/Score.interface";
import {Player} from "../../../types/Player.interface";
import {reverse} from "ramda";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import './Scorehistory.scss';
import {Typography} from "@material-ui/core";

interface Props {
    scores: Array<Score>,
    players: Array<Player>,
    revertChange: () => void
}

export const Scorehistory = (props: Props) => <section id="scorehistory">
    {props.scores && props.scores.length > 0 &&
    <Grid item
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="result-row">
        <Grid item xs={4} className="result-item">
            <Fab onClick={() => props.revertChange()} className="score-button" size="small"
                 color="primary"><i className="material-icons">replay</i></Fab>
        </Grid>
    </Grid>
    }
    {reverse(props.scores).map((score: Score, index: number) =>
        <Grid item
              key={index}
              container
              direction="row"
              justify="center"
              alignItems="center"
              className="result-row">
            <Grid item xs={4} className="result-item">
                <Typography
                    variant={'h6'}>{props.players[score.lineup.blueOne].name}-{props.players[score.lineup.blueTwo].name}</Typography>
            </Grid>
            <Grid item xs={4} className="result-item">
                <Typography variant={'h6'}>#{score.roundIndex + 1}
                    <br/> {score.roundResult.blue} - {score.roundResult.red}</Typography>
            </Grid>
            <Grid item xs={4} className="result-item">
                <Typography
                    variant={'h6'}>{props.players[score.lineup.redOne].name}-{props.players[score.lineup.redTwo].name}</Typography>
            </Grid>
        </Grid>)}


</section>;