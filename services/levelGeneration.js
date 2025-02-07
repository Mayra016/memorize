export default function newLevel(currentLevel) {
    let maxSequence = 3 + currentLevel;
    let maxBtns = 4; // max btns number is 8
    let colors = ["red", "yellow", "green", "blue", "purple", "pink", "orange", "white"];
    let levelSequence = [];
    

    if (currentLevel % 5 == 0 && currentLevel / 5 <= 8) {
        maxBtns += currentLevel / 5;
    }

    for (let i = 0; i < maxSequence; i++) {
        levelSequence[i] = colors[randomIndex = Math.floor(Math.random() * (maxBtns - 1))];
    }

    return levelSequence;
}