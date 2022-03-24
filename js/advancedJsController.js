window.onload = function() {
    document.getElementById('submit-form').addEventListener("submit", clicked);
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
