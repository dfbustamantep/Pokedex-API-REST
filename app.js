const listaPokemon = document.getElementById("listaPokemon")
let URL = "https://pokeapi.co/api/v2/pokemon/"

//Funcion asincrona,esta siempre devuelve una promesa automaticamente
async function cargarSecuencialmente(){
    for (let i = 1; i <=300; i++) {
        try{
            //el await pausa la funcion asincrona hasta que se resuelva o rechace la promesa
            const response = await fetch(URL+i);
            const pokemon = await response.json();
            mostrarPokemon(pokemon);
        }
        catch(error){
            console.error(`Error al cargar el Pokémon con ID ${i}:`, error);
        }
        
    }

}


 function mostrarPokemon(pokemon) {

    let tipos = pokemon.types.map(type=>`
        <p class="${type.type.name} tipo">${type.type.name}</p>
        `);
    tipos = tipos.join(``);

    
    
    const section = document.createElement("section");
    section.classList.add("pokemon");
    section.innerHTML=`
                    <p class="pokemon-id-back">${pokemon.id}</p>
                    <article class="pokemon-imagen">
                        <img src="${pokemon.sprites.other["official-artwork"].front_default}"
                            alt=${pokemon.name}>
                    </article>
                    <section class="pokemon-info">
                        <article class="nombre-contenedor">
                            
                            <h2 class="pokemon-nombre">${pokemon.name}</h2>
                        </article>
                        <article class="pokemon-tipos">
                            ${tipos}
                        </article>
                        <article class="pokemon-stats">
                            <p class="stat">${pokemon.height}M</p>
                            <p class="stat">${pokemon.weight}KG</p>
                        </article>
                    </section>
        `
        listaPokemon.append(section)
}
cargarSecuencialmente();
/*
<div class="pokemon">
                    <p class="pokemon-id-back">1</p>
                    <div class="pokemon-imagen">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                            alt="img">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre-contenedor">
                            <!--<p class="pokemon-id">1</p>-->
                            <h2 class="pokemon-nombre">ejemplo</h2>
                        </div>
                        <div class="pokemon-tipos">
                            <p class="tipo">tipo</p>
                            <p class="tipo">tipo2</p>
                        </div>
                        <div class="pokemon-stats">
                            <p class="stat">agua</p>
                            <p class="stat">fuego</p>
                        </div>
                    </div>
                </div>*/ 

/* async function fetchPokemons() {
    while (true) {
        try {
            const response = await fetch(URL + i);
            if (!response.ok) {
                console.log(`No hay más Pokémon en el ID ${i}. Fin del ciclo.`);
                break; // Salimos del ciclo si no hay más datos
            }
            const data = await response.json();

            // Crear un elemento para mostrar el Pokémon
            const pokemonDiv = document.createElement("div");
            pokemonDiv.classList.add("pokemon");
            pokemonDiv.innerHTML = `
                <p class="pokemon-id-back">${data.id}</p>
                <div class="pokemon-imagen">
                    <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
                </div>
                <div class="pokemon-info">
                    <h2 class="pokemon-nombre">${data.name}</h2>
                    <div class="pokemon-tipos">
                        ${data.types.map(type => `<p class="tipo">${type.type.name}</p>`).join("")}
                    </div>
                </div>
            `;
            listaPokemon.appendChild(pokemonDiv); // Agrega al DOM
        } catch (error) {
            console.error("Error al obtener datos:", error);
            break; // Salimos del ciclo si ocurre un error
        }
        i++; // Incrementar el ID para el siguiente Pokémon
    }
}

fetchPokemons(); */