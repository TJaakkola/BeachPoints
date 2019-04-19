import {Typography} from "@material-ui/core";
import {ScoreMode} from "../../../types/ScoreMode.enum";
import {scoreModeToNumberConverter} from "../../../util/ScoreMode.converter";
import React from 'react';
import './GameInfo.scss';

interface Props {
    roundIndex: number,
    roundCount: number,
    scoreMode: ScoreMode
};

export const GameInfo = (props: Props) => <>
    <Typography variant="h5" align="center" id="game-info-header">Game info</Typography>
    <Typography variant="caption" align="center">Turn {props.roundIndex + 1}/{props.roundCount}</Typography>
    <Typography variant="caption" align="center">Total balls {scoreModeToNumberConverter(props.scoreMode) * props.roundCount}</Typography>
    <Typography variant="caption" align="center">Maximum points per player {scoreModeToNumberConverter(props.scoreMode) * props.roundCount * 0.8}</Typography>
</>