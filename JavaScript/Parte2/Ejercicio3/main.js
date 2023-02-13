var newList = document.getElementById('aprobados')
var alumnos = [

    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];

var aprobados = alumnos.filter(function (al){
    return al.nota >= 7
})

aprobados.forEach(
    function (al){
        var el = document.createElement('li');
        el.appendChild(document.createTextNode(al.nombre + ' || Nota: ' + al.nota))
        newList.appendChild(el)
    }
)




console.log(aprobados)