export default function newLevel(currentLevel, maxBtns) {
    let maxSequence = 3 + currentLevel;
    let colors = ["red", "yellow", "green", "blue", "purple", "pink", "orange", "white"];
    let levelSequence = [];

    for (let i = 0; i < maxSequence; i++) {
        levelSequence[i] = colors[randomIndex = Math.floor(Math.random() * (maxBtns - 1))];
    }

    return levelSequence;
}