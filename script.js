async function rollDice() {
  try {
    // Call the backend API to get a random number
    const response = await fetch('https://dicerollerbackend.azurewebsites.net/roll'); // Corrected URL
    const data = await response.json();
    const diceRoll = data.result; // Get the random number from the backend

    // Update the result text
    document.getElementById('result').textContent = `You rolled a ${diceRoll}`;

    // Hide all dots first
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach(dot => dot.style.display = 'none');

    // Show the dots corresponding to the rolled number
    switch (diceRoll) {
      case 1:
        document.getElementById('dot3').style.display = 'block';  // Center dot
        break;
      case 2:
        document.getElementById('dot1').style.display = 'block';  // Top-left
        document.getElementById('dot5').style.display = 'block';  // Bottom-right
        break;
      case 3:
        document.getElementById('dot1').style.display = 'block';  // Top-left
        document.getElementById('dot3').style.display = 'block';  // Center
        document.getElementById('dot5').style.display = 'block';  // Bottom-right
        break;
      case 4:
        document.getElementById('dot1').style.display = 'block';  // Top-left
        document.getElementById('dot2').style.display = 'block';  // Top-right
        document.getElementById('dot4').style.display = 'block';  // Bottom-left
        document.getElementById('dot5').style.display = 'block';  // Bottom-right
        break;
      case 5:
        document.getElementById('dot1').style.display = 'block';  // Top-left
        document.getElementById('dot2').style.display = 'block';  // Top-right
        document.getElementById('dot3').style.display = 'block';  // Center
        document.getElementById('dot4').style.display = 'block';  // Bottom-left
        document.getElementById('dot5').style.display = 'block';  // Bottom-right
        break;
      case 6:
        document.getElementById('dot1').style.display = 'block';  // Top-left
        document.getElementById('dot2').style.display = 'block';  // Top-right
        document.getElementById('dot3').style.display = 'block';  // Center-left
        document.getElementById('dot4').style.display = 'block';  // Center-right
        document.getElementById('dot5').style.display = 'block';  // Bottom-left
        document.getElementById('dot6').style.display = 'block';  // Bottom-right
        break;
    }
  } catch (error) {
    console.error('Error fetching dice roll:', error);
    document.getElementById('result').textContent = 'Failed to roll the dice. Please try again.';
  }
}

// Add event listener to the roll button
document.getElementById('roll-button').addEventListener('click', rollDice);
