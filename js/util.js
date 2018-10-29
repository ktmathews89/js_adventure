import {gameSpaceHeight, gameSpaceWidth} from './gamespace';

/* Percentage String to Num of Pixels */
const yPerToNum = (percentString) => {
    let num = parseInt(percentString.split('%').shift());
    let percent = num !== 0 ? (num / 100) : 0;
    return (gameSpaceHeight() * percent);
}

const xPerToNum = (percentString) => {
    let num = parseInt(percentString.split('%').shift());
    let percent = num !== 0 ? (num / 100) : 0;
    return (gameSpaceWidth() * percent);
}

/* Percentage String to Pixels String */
const yPerToPx = (percentString) => {
    let num = parseInt(percentString.split('%').shift());
    let percent = num !== 0 ? (num / 100) : 0;
    let px = gameSpaceHeight() * percent;
    return (px + 'px');
}

const xPerToPx = (percentString) => {
    let num = parseInt(percentString.split('%').shift());
    let percent = num !== 0 ? (num / 100) : 0;
    let px = gameSpaceWidth() * percent;
    return (px + 'px');
}

const getXNum = (element) => {
    let left = element.style.left;
    return (left ? parseInt(left.split('px').shift()) : 0);
}

const getYNum = (element) => {
    let top = element.style.top;
    return (top ? parseInt(top.split('px').shift()) : 0);
}

const isOverlapping = (element1, element2) => {
    let colOverlap = false;
    let rowOverlap = false;
    if ((element1.left < element2.right && element1.left > element2.left) ||
        (element1.right > element2.left && element1.right < element2.right)
    ){
        colOverlap = true;
    }

    if ((element1.bottom > element2.top && element1.bottom < element2.bottom) ||
        (element1.top < element2.bottom && element1.top > element2.top)
    ){
        rowOverlap = true;
    }

    return colOverlap && rowOverlap;
}


export {
    yPerToNum, xPerToNum,
    yPerToPx, xPerToPx,
    getXNum, getYNum,
    isOverlapping
};
