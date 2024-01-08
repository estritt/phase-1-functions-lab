function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return (264* distanceFromHqInBlocks(someValue));
}

function distanceTravelledInFeet(start, stop) {
    return (264 * Math.abs(stop - start));
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        return 0.02 * (distance - 400);
    } else if (distance > 0) {
        return 0;
    } else {
        return 'care to try again?'
    }
}