class GameState {
  constructor(lowerLimit, upperLimit) {
    this.lowerLimit = lowerLimit;
    this.upperLimit = upperLimit;
    this.targetNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    console.log(this.targetNumber);
  }

  playGame() {
    let guess = window.prompt(`Guess a number between ${this.lowerLimit} and ${this.upperLimit}!`);
    let guessCount = 1;

    while (guess != this.targetNumber) {
      if (guess < targetNumber) {
	guess = window.prompt("Too low! Guess again!");
      } else {
	guess = window.prompt("Too high! Guess again!");
      }
      guessCount++;
    }

    window.alert(`Congratulations! You guessed the number ${targetNumber} in ${guessCount} tries!`);
  }
}


const promptForLowAndHigh = () => {
  while (true) {
    const upperLimit = window.prompt("Enter a high number for the guessing game!");
    const lowerLimit = window.prompt("Enter a low number for the guessing game!");
    if (lowerLimit < upperLimit) {
      return new GameState(lowerLimit, upperLimit);
    } else {
      window.alert("The low number must be less than the high number. Please try again.");
    }
  }
};

// Function to create a grid of n cells
function createGrid(n) {
    // Create the grid container
    const gridContainer = document.createElement('div');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(auto-fill, minmax(50px, 1fr))`;
    gridContainer.style.gap = '5px';

    // Create and append cells to the grid container
    for (let i = 0; i < n; i++) {
        const cell = document.createElement('div');
        cell.style.width = '50px';
        cell.style.height = '50px';
        cell.style.backgroundColor = '#ddd';
        cell.style.border = '1px solid #333';
        cell.style.display = 'flex';
        cell.style.alignItems = 'center';
        cell.style.justifyContent = 'center';
        cell.textContent = i + 1; // Optional: Add cell number
        gridContainer.appendChild(cell);
    }

    // Add the grid container to the body
    document.body.appendChild(gridContainer);
}

// Create a grid with a specific number of cells (e.g., 20 cells)
createGrid(20);
