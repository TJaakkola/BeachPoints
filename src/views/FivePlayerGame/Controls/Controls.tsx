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

interface Props {
    resetScore: () => void,
    shufflePlayers: () => void,
    changeScoremode: (scoreMode: ScoreMode) => void,
    scoreMode: ScoreMode,
    changeRoundCount: (value: number) => void
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

        <br/>
            <p>How many full rounds. A full round is when everyone has played once with everyone. So 5 full rounds means you play 5 times with all the other players. </p>
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


    </div>
</>;