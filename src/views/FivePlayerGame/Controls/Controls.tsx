import React, {ChangeEvent} from "react";
import {ScoreMode} from "../../../types/ScoreMode.enum";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import "./Controls.scss";

interface Props {
    resetScore: () => void,
    shufflePlayers: () => void,
    changeScoremode: (scoreMode: ScoreMode) => void,
    scoreMode: ScoreMode
}

export const Controls = (props: Props) => <>
    <div id="controls">
        <Button variant='contained' color='primary' onClick={() => props.resetScore()} className="controls-button">Reset scores</Button>
        <Button variant='contained' color='primary' onClick={() => props.shufflePlayers()} className="controls-button">Shuffle players</Button>
        <br/>

        <FormControl>
            <FormLabel>Score mode</FormLabel>
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

    </div>
</>;