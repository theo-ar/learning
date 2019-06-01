class Game {
  constructor() {
      this.towers =[[3, 2, 1], [], []]
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Enter a starting tower: ", start => {
      const startTowerIdx = parseInt(start);
      reader.question("Enter an ending tower: ", end => {
        const endTowerIdx = parseInt(end);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let disc = this.towers[startTowerIdx].pop()
      this.towers[endTowerIdx].push(disc)
      return true;
    } else {
      return false;
    }
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (0 > startTowerIdx || startTowerIdx > this.towers.length) {
      return false
    } else if(0 > endTowerIdx || endTowerIdx > this.towers.length) {
      return false
    } else if (0 === this.towers[startTowerIdx].length) {
      return false
    } else {
      return true
    }
  }

  isWon() {
    const towerTwo = this.towers[1];
    const towerThree = this.towers[2];
  
    if(towerTwo ===  [[], [3, 2, 1], []] || towerThree === [[], [], [3, 2, 1]] ) {
      return true
    } else {
      return false
    }
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  run(reader, gameCompletionCallback) {
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }

      if (!this.isWon()) {
        // Continue to play!
        this.run(reader, gameCompletionCallback);
      } else {
        this.print();
        console.log("You win!");
        gameCompletionCallback();
      }
    });
  }
}


module.exports = Game;



