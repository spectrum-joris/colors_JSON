const colorContainer = document.getElementById("color-container");

// functie om de kleuren op te halen en in de DOM te tonen
async function loadColors() {
    try {
      const response = await fetch('/colors');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const colors = await response.json();
      console.log(colors);  // Controleer de data in de console
  
      colors.forEach(color => {
        const colorBlock = document.createElement('div');
        colorBlock.className = 'color-block';
        colorBlock.style.backgroundColor = color.hex;
        colorBlock.title = color.name;
  
        // Voeg een klik event toe om hex-waarde te kopiëren
        colorBlock.addEventListener('click', () => {
          navigator.clipboard.writeText(color.hex);
          alert(`${color.name} gekopieerd: ${color.hex}`);
        });
  
        colorContainer.appendChild(colorBlock);
      });
    } catch (error) {
      console.error('Fout bij het laden van kleuren:', error);
    }
  }
  
  loadColors();
  