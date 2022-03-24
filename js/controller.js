
$(document).ready(function() {
    document.getElementById('input-item-form').addEventListener("submit", add_to_list);
})

function add_to_list(e) {
    e.preventDefault();
    let item = document.getElementById('item-to-add').value;
    let listElement = document.createElement('li');
    listElement.appendChild(document.createTextNode(item));

    let itemList = document.getElementById('da-list-display');
    itemList.appendChild(listElement);
}