export interface ProyectsInterface{
    title: string
    subtitle: string
    date:string
    description:string
    sections:Array<string>
    link?: string
    repo: string
    front: Array<string>
    img: string,
    index?:number
}

export const PROYECTS: Array<ProyectsInterface> = [
    {
        title:"Proyecto integrador Henry- Videogames",
        subtitle:"Experiencia académica. Henry Bootcamp",
        date:"Dic. 2023 - Ene. 2024",
        description:"Esta aplicación fue el punto culminante de mi experiencia en el bootcamp, permitiéndome aplicar de manera autónoma todos mis conocimientos adquiridos. Representó mi primer proyecto independiente y un hito importante en mi desarrollo profesional. Su objetivo es ofrecer una experiencia visual para explorar una amplia variedad de videojuegos a través de una API. Sus características principales son:",
        sections: ["Visualización de videojuegos: Presentación de los videojuegos para una fácil exploración",
        "Filtros y Ordenamientos: Capacidad para filtrar y ordenar los videojuegos según género, origen, clasificación y/o alfabéticamente.",
        "Búsqueda específica: Función de búsqueda que permite encontrar un videojuego en particular.",
        "Descripciones detalladas: Se pueden ver las descripciones completas de cada juego, proporcionando información detallada de estos",
        "Actualización de la lista: Posibilidad de añadir nuevos videojuegos a la lista, manteniendo la base de datos actualizada constantemente.",
        ],
        repo:"https://github.com/CarlosLagos29/PI-Videogames",
        front:["React","Redux","Axios","Express","Node.js","PostgreSQL","Sequelize"],
        img:"https://usagif.com/wp-content/uploads/2022/fzk5d/30-huge-maze-pacman.gif",
    },
    {
        title:"Proyecto Rick and Morty",
        subtitle:"Experiencia académica. Henry Bootcamp",
        date:"Sept. 2023 - Nov. 2023",
        description:"Durante mi bootcamp, desarrollé una aplicación integral centrada en ofrecer una experiencia interactiva para los aficionados de una serie. La app permite explorar y disfrutar de los personajes favoritos a través de una interfaz intuitiva y amigable. Destaca por su enfoque práctico en el desarrollo Full Stack Web, en esta puedes:",
        sections: [
            "Búsqueda de personajes: Los usuarios pueden buscar personajes por su ID, lo que facilita la localización de sus favoritos.",
            "Selección de personajes favoritos: La aplicación permite a los usuarios designar personajes como favoritos, organizándose de manera conveniente para su acceso rápido.",
            "Filtrado y ordenamiento de favoritos: Se ofrece la posibilidad de filtrar los personajes favoritos por género y ordenarlos alfabéticamente o por ID, brindando flexibilidad en la gestión de la colección.",
            "Descripciones detalladas: Cada personaje cuenta con una descripción completa, que proporciona información detallada y enriquecedora sobre su historia y características.",
        ],
        repo:"https://github.com/CarlosLagos29/Rick-and-morty",
        front:["React","Redux","Axios","Express","Node.js","PostgreSQL","Sequelize"],
        img:"https://i.pinimg.com/originals/6a/7c/e9/6a7ce99608d78073da7f984b8ba1af0f.gif",
    },
    
]