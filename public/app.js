function searchCharacter() {
    const characterInput = document.getElementById("character-input").value.trim();
    console.log("Buscando:", characterInput); // Verifica que se recibe el input

    if (characterInput === "") {
        alert("Por favor, ingresa un nombre de personaje.");
        return;
    }

    fetch(`https://api.jikan.moe/v4/characters?q=${characterInput}&limit=1`)
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta de la API:", data); // Muestra la respuesta de la API

            if (data.data && data.data.length > 0) {
                const character = data.data[0];
                document.getElementById("character-image").src = character.images.jpg.image_url;
                document.getElementById("character-name").textContent = character.name;
                document.getElementById("character-about").textContent = character.about || "No hay información disponible.";
                document.getElementById("character-link").href = character.url;
                document.getElementById("character-link").textContent = "Más info";
                document.getElementById("character-info").classList.remove("hidden");
            } else {
                alert("No se encontró el personaje.");
            }
        })
        .catch(error => console.error("Error al obtener los datos:", error));
}
