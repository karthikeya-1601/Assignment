document.getElementById('studios').addEventListener('mouseover', function() {
    this.innerText = 'play harder';
});

document.getElementById('studios').addEventListener('mouseout', function() {
    this.innerText = 'Studios';
});

document.getElementById('work').addEventListener('mouseover', function() {
    this.innerText = 'Hard';
});

document.getElementById('work').addEventListener('mouseout', function() {
    this.innerText = 'Work';
});

document.getElementById('studios').addEventListener('mouseout', function() {
    this.innerText = 'Studios';
});

document.getElementById('recognition').addEventListener('mouseover', function() {
    this.innerText = 'yeah!';
});

document.getElementById('recognition').addEventListener('mouseout', function() {
    this.innerText = 'Recognition';
});

document.querySelectorAll('.project-item').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.querySelector('p').style.display = 'block';
    });

    item.addEventListener('mouseout', function() {
        this.querySelector('p').style.display = 'none';
    });
});