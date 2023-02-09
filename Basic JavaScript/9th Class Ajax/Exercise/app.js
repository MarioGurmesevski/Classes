let element = document.getElementById("starWarsData")

function renderPerson(data,element){
    element.innerHTML = `<div id=starWarsData">
    <p>Name: ${data.name}, Height: ${data.height}, Mass: ${data.mass}, Hair Color: ${data.hair_color}, Skins Color: ${data.skin_color}, Eye Color: ${data.eye_color}, Birth year: ${data.birth_year}, Gender: ${data.gender}
    </div>
    `}

    fetch("https://swapi.dev/api/people/1")
    .then(function(result){
        console.log(result)
        return result.json();
    })
    .then(function(data){
        console.log(data);
        renderPerson(data, element)
    })
