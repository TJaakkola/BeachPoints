import React, {ChangeEvent} from "react";
import {ScoreMode} from "../../../types/ScoreMode.enum";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import "./Controls.scss";
import Input from "@material-ui/core/Input";
import {Typography} from "@material-ui/core";

interface Props {
    resetScore: () => void,
    shufflePlayers: () => void,
    changeScoremode: (scoreMode: ScoreMode) => void,
    scoreMode: ScoreMode,
    changeRoundCount: (value: number) => void
}

export const Controls = (props: Props) => <>
    <div id="controls">
        <Typography variant="h6">Basic controls</Typography>
        <Button variant='contained' color='primary' onClick={() => props.resetScore()} className="controls-button">Reset scores</Button>
        <Button variant='contained' color='primary' onClick={() => props.shufflePlayers()} className="controls-button">Shuffle players</Button>
        <br/>
        <Typography variant="h6">Score mode</Typography>
        <FormControl>
            <RadioGroup
                row
                name="Scoremode"
                aria-label="scoremode"
                value={props.scoreMode}
                onChange={(event: ChangeEvent<{}>,  value: string) => props.changeScoremode(value as ScoreMode)}
            >
                <FormControlLabel value={ScoreMode.TWO} control={<Radio />} label="Two" />
                <FormControlLabel value={ScoreMode.THREE} control={<Radio />} label="Three" />
                <FormControlLabel value={ScoreMode.FOUR} control={<Radio />} label="Four" />
            </RadioGroup>
        </FormControl>
        <br/>
        <Typography variant="h6">Round count</Typography>
            <Input
                defaultValue={5}
                inputProps={{
                    'aria-label': 'How many full rounds.',
                }}
                type={'number'}
                onChange={(event) => {
                    const value: number = parseInt(event.target.value);
                    if(value !== NaN) {
                        props.changeRoundCount(value * 5);
                    }
                }}
            />
        <Typography variant="h6">Vocabulary</Typography>
        <ul>
            <li><Typography variant="button" inline={true}>Score mode</Typography>: How many balls are played before changing teams (how many balls in a stage)</li>
            <li><Typography variant="button" inline={true}>Stage</Typography>: One stage means all the balls played without changing teams. Score mode determines how many points are played during a stage</li>
            <li><Typography variant="button" inline={true}>Round</Typography>: 5 Stages. Each player has played against each other once and had one break</li>
            <li><Typography variant="button" inline={true}>Cycle</Typography>: 5 Rounds. After 5 rounds teams are same as in the beginning and a new cycle begins.</li>
        </ul>
    </div>
</>;