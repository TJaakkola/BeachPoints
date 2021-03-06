import React from 'react';
import {Player} from "../types/Player.interface";
import './PlayerSelection.scss';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import PersonIcon from "@material-ui/icons/Person";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface Props {
    togglePlayer: (player: Player) => void,
    selectedPlayers: Array<Player>
}

const createPlayer = (name: string): Player =>  {
    return { name, score: 0 };
};

const initialPlayerNames: Array<string> = ["Tapio", "Matti", "Viljo", "Niko", "Heikki", "Mika", "Markus", "Taneli"];
const players: Array<Player> = initialPlayerNames.map( (name: string) => createPlayer(name));

export const PlayerSelection = (props: Props) => <div id="player-selection">
    <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                Select players
            </Typography>
        </Toolbar>
    </AppBar>

    <List component="section">
        { players.map( (player: Player) =>
            <ListItem button
                      selected={props.selectedPlayers.includes(player)}
                      key={player.name}
                      onClick={() => props.togglePlayer(player)}>
                {props.selectedPlayers.includes(player) && <ListItemIcon><PersonIcon /></ListItemIcon>}
                <ListItemText primary={player.name}/>
            </ListItem>
        )}
    </List>
</div>;

