import * as controls from './controls';
import {setGame} from './gamespace';
import * as levels from './levels';
import * as planet from './planet';
import * as spaceship from './spaceship';
import * as utils from './util';

document.dispatchEvent(setGame, {level: 1});
