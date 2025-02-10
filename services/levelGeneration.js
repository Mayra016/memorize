export default function newLevel(currentLevel, maxBtns, currentSequence) {
    let maxSequence = 3 + currentLevel;
    let colors = ["red", "yellow", "green", "blue", "purple", "pink", "orange", "white"];
    let levelSequence = [];

    if (currentSequence.length > 1) {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * maxBtns);
        } while (
            currentSequence.length >= 2 &&
            currentSequence[currentSequence.length - 2] === colors[randomIndex] &&
            currentSequence[currentSequence.length - 1] === colors[randomIndex]
        );

        currentSequence.push(colors[randomIndex]);

        return currentSequence;
    }

    for (let i = 0; i < maxSequence; i++) {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * maxBtns);
        } while (
            i >= 2 &&
            levelSequence[i - 2] === colors[randomIndex] &&
            levelSequence[i - 1] === colors[randomIndex]
        );

        levelSequence[i] = colors[randomIndex];
    }

    return levelSequence;
}