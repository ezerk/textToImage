function randomOfArray(array) {
    const randomPos = Math.floor(Math.random() * (array.length - 1));
    return array[randomPos];
}

module.exports = {
    randomOfArray,
};