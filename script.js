// Define spaceship and alien ship properties
const USS_Assembly = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
  };
  
  class AlienShip {
    constructor() {
      this.hull = Math.floor(Math.random() * 4) + 3;
      this.firepower = Math.floor(Math.random() * 3) + 2;
      this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
  
    attack(ship) {
      if (Math.random() < this.accuracy) {
        console.log(`Alien ship hits USS Assembly for ${this.firepower} damage.`);
        ship.hull -= this.firepower;
      } else {
        console.log("Alien ship misses.");
      }
    }
  }
  // Initialize game variables
  let currentShipIndex = 0;
  const alienShips = [];
  
  for (let i = 0; i < 6; i++) {
    alienShips.push(new AlienShip());
  }
  
  // Define game functions
  function showMessage(message) {
    window.alert(message);
  }
  
  function attack() {
    const currentShip = alienShips[currentShipIndex];
    const attackSuccess = Math.random() < USS_Assembly.accuracy;
    if (attackSuccess) {
        console.log(`USS Assembly hits alien ship for ${USS_Assembly.firepower} damage.`)
      showMessage(`USS Assembly hits alien ship for ${USS_Assembly.firepower} damage.`);
      currentShip.hull -= USS_Assembly.firepower;
    } else {
        console.log("USS Assembly misses.")
      showMessage("USS Assembly misses.");
    }
  
    if (currentShip.hull <= 0) {
        console.log(`Alien ship ${currentShipIndex + 1} destroyed.`)
      showMessage(`Alien ship ${currentShipIndex + 1} destroyed.`);
      currentShipIndex++;
  
      if (currentShipIndex === alienShips.length) {
        console.log("All alien ships destroyed. You win!")
        showMessage("All alien ships destroyed. You win!");
      } else {
        const nextAction = window.prompt(`You have destroyed the current ship. Do you want to attack the next ship or retreat? Enter 'Yes' or 'No'.`);
        if (nextAction === "Yes") {
            console.log(`You chose to attack the next alien ship.`)
          showMessage(`You chose to attack the next alien ship.`);
        } else if (nextAction === "No") {
            console.log("You chose to retreat. Game over.")
          showMessage("You chose to retreat. Game over.");
        } else {
            console.log("Invalid input. Game over.")
          showMessage("Invalid input. Game over.");
        }
      }
    } else {
      currentShip.attack(USS_Assembly);
      if (USS_Assembly.hull <= 0) {
        console.log("USS Assembly destroyed. Game over.")
        showMessage("USS Assembly destroyed. Game over.");
      } else {
        attack();
      }
    }
  }
  function retreat() {
    showMessage("Game over. You retreated.");
  }
  // Start game
  showMessage("Welcome to the Space Battle game! Click OK to begin.");
  attack();