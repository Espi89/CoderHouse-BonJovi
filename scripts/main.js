var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('bryan')
    .pauseFor(700)
    .deleteAll()
    .typeString('jon')
    .pauseFor(700)
    .deleteAll()
    .typeString('richie')
    .pauseFor(700)
    .deleteAll()
    .typeString('tico')
    .pauseFor(700)
    .deleteAll()
    .typeString('<strong>bon jovi</strong>')
    .pauseFor(5000)
    .deleteAll()
    //.deleteChars(7)
    //.typeString('<strong>altered!</strong>')
    //.pauseFor(2500)
    .start();