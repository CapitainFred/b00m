document.getElementById('content').addEventListener('input', function() {
    var id = document.getElementById('id').value;
    var content = document.getElementById('content').value;

    if (id === '') {
        console.error('ID cannot be empty');
        return;
    }

    if (content === '') {
        console.error('Content cannot be empty');
        return;
    }
    
    var existingElement = document.getElementById(id);
    if (existingElement) {
        existingElement.innerText = content;
    } else {
        var newElement = document.createElement('p');
        newElement.id = id;
        newElement.innerText = content;
        document.getElementById('holder').appendChild(newElement);
    }
});
