export default function newLevel(currentLevel, maxBtns) {
    let maxSequence = 3 + currentLevel;
    let colors = ["red", "yellow", "green", "blue", "purple", "pink", "orange", "white"];
    let levelSequence = [];

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