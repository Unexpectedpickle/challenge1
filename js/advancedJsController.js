window.onload = function() {
    document.getElementById('submit-btn').addEventListener("click", clicked);
    document.querySelector('#fetch-api-btn').addEventListener("click", api_call)
}

const waitText = "Waiting";
const progressText = "Working, Please Wait"

function clicked(e) {
    e.preventDefault();
    let btnSelector = document.querySelector('#submit-btn');
    btnSelector.disabled = true;
    change_wait_text(progressText);
    setTimeout(() => {
        btnSelector.disabled = false;
        change_wait_text(waitText);
    }, 5000);
}

function change_wait_text(text) {
    document.getElementById('waiting-text').innerText = text;
}

function api_call() {
    getPokemon(document.getElementById('pokemon-name').value)
        .then(response => {
            document.querySelector('#pokemon-name-header').innerText = response.species.name;
            document.querySelector('#health-stat').innerText = response.stats[0].base_stat + response.stats[0].stat.name;
        })
        .catch(error => {
            alert(error);
        })
}

async function getPokemon(name) {
    const request = new Request('https://pokeapi.co/api/v2/pokemon/' + name);
    const response = await fetch(request);
    if (response.ok) {
        return response.json();
    } else {
        return "Something went wrong";
    }
}
