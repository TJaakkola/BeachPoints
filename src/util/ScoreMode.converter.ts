import {ScoreMode} from "../types/ScoreMode.enum";

export const scoreModeToNumberConverter = (scoreMode: ScoreMode): number => {
    switch (scoreMode) {
        case ScoreMode.TWO:
            return 2;
        case ScoreMode.THREE:
            return 3;
        case ScoreMode.FOUR:
            return 4;
    }
};