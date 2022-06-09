import { personajes } from "../script/personajes.js"

// console.log(personajes[1]);


// const {nombre} = personajes[2];
// console.log(personajes[2].nombre);



// destructuring.......................................

// const [personaje] = personajes;
// console.log([personajes]);


// const [,personaje1] = personajes;
// console.log([personaje1.nombre]);

// for (const {imagen: n} of personajes) {
//     console.log(n);
// }



// destructuring un array de objetos 
// const imagenPersonaje = personajes[0].imagen;
// console.log(imagenPersonaje);

// const contenedor = document.querySelector('#track');






// destructuring con ciclo for
for (const { id: num, imagen: ruta, nombre: z} of personajes) {
    let slick = document.createElement('div'); //slick
    let divSinNombre = document.createElement('div'); //sin nombre
    let etiquetA = document.createElement('a') //etiqueta a
    let etiquetaH4 = document.createElement('button'); //h4
    // let etiquetaH3 = document.createElement('h3'); //h3
    let picture = document.createElement('div'); //picture
    let etiquetaImg = document.createElement('img'); //img
    // let newTexto = document.createElement('p'); // etiqueta parrafo

    slick.classList.add('slick')

    etiquetaImg.setAttribute('src', ruta);
    etiquetaImg.setAttribute('alt', `${z}`);
    divSinNombre.classList.add('ventanaModal');
    etiquetaImg.classList.add('imagenModal');
    // newTexto.classList.add('newTexto'); 
    etiquetaH4.setAttribute('onclick', `recogerDatos(this);`);
    etiquetaH4.setAttribute('id', `${num}`);
    etiquetaH4.setAttribute('type', `button`);
    etiquetaH4.classList.add('btn', 'btn-primary', 'button');
    etiquetaH4.textContent = (`${z}`);
    // etiquetaH3.textContent = (`${z}`);
    // newTexto.setAttribute('id', `${z}`);
    // newTexto.textContent = (`${t}`);

    contenedor.appendChild(slick);
    slick.appendChild(divSinNombre);
    divSinNombre.appendChild(etiquetA);
    
    etiquetA.appendChild(picture);
    picture.appendChild(etiquetaH4);
    picture.appendChild(etiquetaImg);
    // newTexto.appendChild( etiquetaH3);
    // picture.appendChild(newTexto);
    

    // console.log(etiquetaH4)
}


function recogerDatos(comp,){
    const personajes = [
        {
            id:1,
            nombre: "Arquero",
            imagen: "../images/arquero.png",
            texto: "Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5."
        },
    
        {
            id:2,
            nombre: "Montapuercos",
            imagen: "../images/montaPuercos.webp",
            texto: "Es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel oscuro."
        },
        {
            id:3,
            nombre: "Minero",
            imagen: "../images/Miner_info.webp",
            texto: "Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal."
        },
        {
            id:4,
            nombre: "Príncipe",
            imagen: "../images/principe.png",
            texto: "Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo."
        },
        {
            id:5,
            nombre: "Goblings",
            imagen: "../images/goblin.webp",
            texto: "Es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior."
        },
        {
            id:6,
            nombre: "Los pillos",
            imagen: "../images/los-pillos.png",
            texto: "Está formada por dos 'niñas pillas' y un 'niño pillo', el cual tiene la función de defender a sus amigas mientras estas lanzan 'chicles' a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo."
        },
        {
            id:7,
            nombre: "Bruja",
            imagen: "../images/bruja.png",
            texto: "Es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha."
        },
        {
            id:8,
            nombre: "Caballero",
            imagen: "../images/caballero.png",
            texto: "Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria."
        },
        {
            id:9,
            nombre: "Pekka",
            imagen: "../images/Pekka.webp",
            texto: "Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Sólo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe."
        },
        {
            id:10,
            nombre: "Golem",
            imagen: "../images/golem.png",
            texto: "Es lento, pero persistente, y solo ataca las estructuras. Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área. Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3."
        }
    ]
    
    
    let id = Number(comp.id);
    console.log(typeof(id));
    localStorage.setItem('id', JSON.stringify(id));


    let seleccion = personajes.find(personajes => personajes.id === id);
    
    console.log(seleccion );
    if(personajes.id = true){

        const src= seleccion.imagen;
        console.log(src);
        const textoPersonaje = seleccion.texto;
        console.log(textoPersonaje);
        const nombrePersonaje = seleccion.nombre;

        document.querySelector('.Carousel').style.display = "none";
        document.querySelector('.detallePersonaje').style.display = "block";
        document.querySelector('.detallePersonaje');

        let etiquetaImg = document.createElement("img"); //img
        let newTexto = document.createElement('p'); // etiqueta parrafo
        let etiquetaA = document.createElement('a'); //etiqueta a
        let nombre = document.createElement('h3'); //h3


        etiquetaImg.setAttribute('src', src);
        etiquetaImg.classList.add('imagenDetalle');
        newTexto.classList.add('textoDetalle'); 
        etiquetaA.classList.add('reload'); 
        etiquetaA.textContent = ('volver'); 
        etiquetaA.setAttribute('id', 'reload');
        nombre.textContent = (nombrePersonaje);
        nombre.classList.add('nombreDetalle'); 
        newTexto.textContent = (`${textoPersonaje}`);

        detallePersonaje.appendChild(etiquetaA);
        detallePersonaje.appendChild(etiquetaImg);
        detallePersonaje.appendChild(nombre);
        detallePersonaje.appendChild(newTexto);
        

        reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
            location.reload();
        });
    }else{
        alert('Error')
    }
    
}