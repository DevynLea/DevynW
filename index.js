document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchButton').addEventListener('click', async () => {
      const characterInput = document.getElementById('characterInput').value.trim();
      const characterImage = document.getElementById('characterImage');
      const characterDisplay = document.getElementById('characterDisplay');
      const characterName = document.getElementById('characterName');
      const characterType = document.getElementById('characterType');
      const characterDescription = document.getElementById('characterDescription');
  
      // Reset character display
      characterDisplay.style.display = 'none';
      characterImage.src = '';
      characterName.textContent = '';
      characterType.textContent = '';
      characterDescription.textContent = '';
  
      try {
        // Fetch character data from the server
        const response = await fetch(`https://devynw.onrender.com/api/character/${characterInput.toLowerCase().replace(' ', '_')}`);
        if (!response.ok) throw new Error('Character not found');
        const data = await response.json();
  
        // Update display with fetched data
        characterDisplay.style.display = 'block';
        characterImage.src = data.image;
        characterImage.alt = data.name;
        characterName.textContent = `Name: ${data.name}`;
        characterType.textContent = `Type: ${data.type}`;
        characterDescription.textContent = `Description: ${data.description}`;
      } catch (error) {
        console.error('Error fetching character:', error);
        alert('Character not found');
      }
    });
  });
  
