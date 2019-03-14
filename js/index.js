var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('UX Designer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Web Developer')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('Interactive Designer')
    .pauseFor(1000)
    .start();