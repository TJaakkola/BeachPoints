import React, {ChangeEvent} from "react";
import {ScoreMode} from "../../../types/ScoreMode.enum";
import {MenuItem} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

interface Props {
    resetScore: () => void,
    shufflePlayers: () => void,
    revertChange: () => void,
    changeScoremode: (scoreMode: ScoreMode) => void,
    scoreMode: ScoreMode
}

export const Controls = (props: Props) => <>
    <div className="control">
        <Button variant='contained' color='primary' onClick={() => props.resetScore()}>Reset scores</Button>
        <Button variant='contained' color='primary' onClick={() => props.shufflePlayers()}>Shuffle players</Button>
        <Button variant='contained' color='primary' onClick={() => props.revertChange()}>Revert</Button>
        <br/>
        <Button variant='contained' color='primary' onClick={() => props.changeScoremode(ScoreMode.TWO)}>Scoremode 2</Button>
        <Button variant='contained' color='primary' onClick={() => props.changeScoremode(ScoreMode.THREE)}>Scoremode 3</Button>
        <Button variant='contained' color='primary' onClick={() => props.changeScoremode(ScoreMode.FOUR)}>Scoremode 4</Button>
    </div>
</>;