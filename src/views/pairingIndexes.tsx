import {PairingIndexes} from "../types/PairingIndexes.interface";

export const pairingIndexes: Array<PairingIndexes> = [
    {blueOne: 0, blueTwo: 1, redOne: 2, redTwo: 3, out: 4},
    {blueOne: 0, blueTwo: 4, redOne: 2, redTwo: 1, out: 3},
    {blueOne: 0, blueTwo: 3, redOne: 4, redTwo: 1, out: 2},
    {blueOne: 0, blueTwo: 2, redOne: 3, redTwo: 4, out: 1},
    {blueOne: 2, blueTwo: 4, redOne: 3, redTwo: 1, out: 0}
];

