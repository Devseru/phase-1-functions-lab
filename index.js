function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; 
    let distance = someValue - hqLocation;
    return Math.abs(distance);
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    let distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare of $25 for distances over 2000 feet but less than or equal to 2500 feet
    } else {
        return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
}

