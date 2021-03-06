import React, {Component, ReactNode} from 'react';
import {Player} from "../../types/Player.interface";
import {findIndex, propEq, dropLast, clone} from 'ramda';
import './FivePlayerGame.scss';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {shuffle} from "../../util/shuffleArray";
import {Gameplay} from "./Gameplay/Gameplay";
import {Scoreboard} from "./Gameplay/Scoreboard";
import {Lineup} from "../../types/Lineup.interface";
import {ScoreMode} from "../../types/ScoreMode.enum";
import {Score} from "../../types/Score.interface";
import {RoundResult} from "../../types/RoundResult.interface";
import {addRoundResult, revertRoundResult} from "../../util/players.util";
import {Typography} from "@material-ui/core";
import {Scorehistory} from "./Scorehistory/Scorehistory";
import SwipeableViews from 'react-swipeable-views';
import {Controls} from "./Controls/Controls";
import {lineupByRoundIndex} from "../../util/lineup.util";
import {lineups} from "./lineups";
import {GameInfo} from "./Gameplay/GameInfo";

interface State {
    players: Array<Player>,
    roundIndex: number,
    scores: Array<Score>,
    scoreMode: ScoreMode,
    tab: number,
    roundCount: number
}

interface Props {
    players: Array<Player>
}

interface TabContainerProps {
    children: ReactNode,
}

const TabContainer = (props: TabContainerProps) => {
    return (
        <Typography component="div" style={{padding: 0}}>
            {props.children}
        </Typography>
    );
};

class FivePlayerGame extends Component<Props, State> {

    state: State = {
        players: this.props.players,
        roundIndex: 0,
        scores: [],
        scoreMode: ScoreMode.TWO,
        tab: 0,
        roundCount: lineups.length
    };

    changeTab = (event: React.ChangeEvent<{}>, value: number): void => {
        this.setState({tab: value});
    };

    changeTabIndex = (index: number) => {
        this.setState({tab: index});
    };

    render() {
        const {tab}: { tab: number } = this.state;

        return <div>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={tab} onChange={this.changeTab}>
                    <Tab label="Gameplay"/>
                    <Tab label="Scorehistory"/>
                    <Tab label="Controls"/>
                </Tabs>
            </AppBar>

            <SwipeableViews
                axis={'x'}
                index={this.state.tab}
                onChangeIndex={this.changeTabIndex}>

                <TabContainer>
                    {this.state.roundCount <= this.state.roundIndex && <Typography align="center" variant="h4" id="gameplay-header">Game over</Typography> }
                    <Scoreboard players={this.state.players}
                                scoreMode={this.state.scoreMode}
                                roundCount={this.state.roundCount}/>
                    {this.state.roundCount > this.state.roundIndex &&
                        <Gameplay players={this.state.players}
                                  roundIndex={this.state.roundIndex}
                                  addLineupScore={this.addScore(lineupByRoundIndex(this.state.roundIndex))}
                                  scoreMode={this.state.scoreMode}
                                  scores={this.state.scores}
                                  roundCount={this.state.roundCount}
                        />
                    }
                    <GameInfo roundIndex={this.state.roundIndex}
                                 roundCount={this.state.roundCount}
                                 scoreMode={this.state.scoreMode}>
                    </GameInfo>

                </TabContainer>

                <TabContainer>
                    <Scorehistory players={this.state.players}
                                  scores={this.state.scores}
                                  revertChange={this.revertChange}/>
                </TabContainer>

                <TabContainer>
                    <Controls resetScore={this.resetScore}
                              changeScoremode={this.changeScoreMode}
                              shufflePlayers={this.shufflePlayers}
                              scoreMode={this.state.scoreMode}
                              changeRoundCount={this.changeRoundCount}/>
                </TabContainer>
            </SwipeableViews>
        </div>;
    }

    addScore = (lineup: Lineup) => (roundResult: RoundResult): void => {
        const {scores, roundIndex, players}: { scores: Array<Score>, roundIndex: number, players: Array<Player> } = clone(this.state);

        // Push change to history
        scores.push({roundIndex: this.state.roundIndex, lineup, roundResult});

        // Add change to player scores
        addRoundResult(players, lineup, roundResult);
        const nextRoundIndex = roundIndex + 1;

        this.setState({players, roundIndex: nextRoundIndex, scores});
    };

    resetScore = (): void => {
        const players = this.state.players.map((player: Player) => ({name: player.name, score: 0}));
        this.setState({players, scores: [], roundIndex: 0});
    };

    revertChange = (): void => {
        if (this.state.scores.length >= 1) {
            const {scores, players}: { scores: Array<Score>, players: Array<Player> } = this.state;
            const lastScore: Score = clone(scores[scores.length - 1]);
            const updatedScores: Array<Score> = dropLast(1, scores);
            const updatedPlayers = revertRoundResult(players, lastScore.lineup, lastScore.roundResult);

            this.setState({
                players: updatedPlayers,
                scores: updatedScores,
                roundIndex: lastScore.roundIndex
            });
        }
    };

    changeScoreMode = (scoreMode: ScoreMode): void => {
        this.setState({scoreMode});
    };

    shufflePlayers = (): void => {
        const players = shuffle(this.state.players);
        this.setState({players});
    };

    changeRoundCount = (value: number): void => {
        this.setState({roundCount: value});
    }
}

export default FivePlayerGame;

