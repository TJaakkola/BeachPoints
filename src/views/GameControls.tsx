import React from "react";

interface Props {
    resetScore: () => void,
    shufflePlayers: () => void,
    revertChange: () => void
}

export const GameControls = (props: Props) => <>
    <div className="control">
        <button className="btn waves-effect waves-light" onClick={() => props.resetScore()} >Reset scores</button>
        <button className="btn waves-effect waves-light" onClick={() => props.shufflePlayers()}>Shuffle players</button>
        <button className="btn waves-effect waves-light" onClick={() => props.revertChange()}>Revert</button>
    </div>
</>;