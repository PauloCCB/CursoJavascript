let container = document.getElementById("container");

const getCharacters= async()=>{
    const response= await fetch("https://rickandmortyapi.com/api/character"); //await lo que hace es espera a que responda
    const data = await response.json();
    console.log(data.results);
    let character=data.results;
    character.forEach(character => {
        const div = document.createElement("div");
        div.innerHTML=`
        <h2>Nombre: ${character.name}</h2>
        <img src="${character.image}"/>
        <p>Genero: ${character.gender}</p>
        <p>Estado: ${character.status}</p>
        <hr />
        `;
        container.append(div);
    });
}
getCharacters();