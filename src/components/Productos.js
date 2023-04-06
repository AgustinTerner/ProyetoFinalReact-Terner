import Clasica from "./Components-Imgs/imgs-productos/quilmes-clasica.jpg"
import Bajocero from "./Components-Imgs/imgs-productos/quilmes-bajocero.jpg"
import Doblemalta from "./Components-Imgs/imgs-productos/quilmes-doblemalta.jpg"
import Redlager from "./Components-Imgs/imgs-productos/quilmes-redlager.jpg"
import Stout from "./Components-Imgs/imgs-productos/quilmes-stout.jpg"

export const Productos = [
    {
        id: 1,
        nombre: "Quilmes Clasica",
        marca: "QUILMES",
        categoria: "Rubias",
        img: {
            src: Clasica,
            alt: "quilmes clasica"
        },
        precio: 234,
        descripcion: "Cerveza lager argentina, elaborada con ingredientes nacionales. Con equilibrio entre el suave amargor del lúpulo y el sabor del cereal. Color amarillo dorado brillante. Es una cerveza equilibrada, de gran refrescancia y cuerpo balanceado, que marida con platos más bien grasosos o pesados.",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Quilmes Bajo Cero",
        marca: "QUILMES",
        categoria: "Rubias",
        img: {
            src: Bajocero,
            alt: "quilmes bajo cero"
        },
        precio: 300,
        descripcion: "Quilmes Bajo Cero se elabora mediante un novedoso proceso de filtrado a dos grados bajo cero, obteniendo así una cerveza más suave y refrescante. Además, para vivir una verdadera experiencia Quilmes Bajo Cero, se recomienda su consumo a 2°C, temperatura que resalta su suavidad y refrescancia.",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Quilmes Doble Malta",
        marca: "QUILMES",
        categoria: "Rubias",
        img: {
            src: Doblemalta,
            alt: "quilmes doblemalta"
        },
        precio: 260,
        descripcion: "Quilmes Doble Malta es una cerveza con mayor cuerpo, amargor, alcohol y color que la Quilmes Clásica. Esta elaborada con dos tipos de malta, que juntas hacen que esta cerveza tenga un nivel de color más alto, una espuma más persistente y un cuerpo más intenso.",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Quilmes Red Lager",
        marca: "QUILMES",
        categoria: "Rojas",
        img: {
            src: Redlager,
            alt: 'quilmes red lager'
        },
        precio: 370,
        descripcion: "Red Lager es una cerveza de sabor acaramelado y de color rojo brillante. Está elaborada con maltas tostadas e ingredientes 100% argentinos y es ideal para combinar con todo tipo de carnes, milanesas y picada de quesos.",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Quilmes Clasica",
        marca: "QUILMES",
        categoria: "Negras",
        img: {
            src: Stout,
            alt: 'quilmes stout'
        },
        precio: 350,
        descripcion: "Cerveza negra, de cuerpo y espuma cremosa, su intenso amargor se compensa con notas de chocolate y café provenientes del golpe de fuego que recibe la malta al momento de ser tostada. Es una opción ideal para maridar con postres dulces, platos fuertes, ahumados, tostados o picantes.",
        cantidad: 1
    },
]

