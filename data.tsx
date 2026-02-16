import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
  /*  {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },*/
  {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/mauricio-vargas-osses/",
    },
     /* {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },*/
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon  className="text-white group-hover:text-black transition duration-200" />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
   /* {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },*/
];

export const dataAboutPage = [
  {
    id: 1,
    
    title: "Certificado Desarrollo Full Stack Java",
    subtitle: "E-Camp",
    description:
      "Programa intensivo orientado al desarrollo Full Stack con Java y Spring Boot, integrando backend, APIs REST y bases de datos relacionales.",
    date: "2025",
  },
  {
    id: 2,
    title: "Ingeniero en Informática",
    subtitle: "Instituto Profesional de Providencia",
    description:
      "Formación profesional en ingeniería en informática con énfasis en desarrollo web, buenas prácticas de programación y gestión de proyectos tecnológicos.",
    date: "2023",
  },
  {
    id: 3,
     title: "Técnico Superior en Informática",
    subtitle: "Instituto Profesional de Providencia",
    description:
      "Base sólida en programación, sistemas y soporte informático, que complementa el enfoque profesional hacia el desarrollo Frontend y Full Stack.",
    date: "2020",
  },
  {
    id: 4,
    title: "Diplomado Arte en Creación Gráfica",
    subtitle: "Universidad de Chile",
    description:
      "Formación en artes visuales y creación gráfica que potencia la sensibilidad estética aplicada al diseño de interfaces y experiencias digitales.",
    date: "2004",
  },
  {
    id: 5,
    title: "Licenciatura en Educación y Pedagogía en Artes Visuales",
    subtitle: "Universidad Metropolitana",
    description:
      "Desarrollo de competencias pedagógicas y visuales que enriquecen la comunicación, la narrativa visual y la experiencia de usuario en productos digitales.",
    date: "2003",
  },
]

/*export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "TechSolutions",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "PixelCrafters",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "CodeForge Solutions",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Prácticas Grado",
        subtitle: "WebWizards Inc.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "Mar 2018",
    },
]*/

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Player-Music",
        image: "/image.png",
        urlGithub: "https://github.com/mavart2/Player_Music",
        urlDemo: "https://mavart2.github.io/Player_Music/",
    },
    {
        
         id: 2,
        title: "Salud & Bienestar",
        image: "/salud.png",
        urlGithub: "https://github.com/mavart2/Salud_Bienestar",
        urlDemo: "https://mavart2.github.io/Salud_Bienestar/index.html",
    },
    {
        id: 3,
        title: "Api de Harry Potter",
        image: "/potter.png",
        urlGithub: "https://github.com/mavart2/Harry_Potter",
        urlDemo: "https://thriving-cat-24543f.netlify.app/",
    },
    {
        id: 4,
        title: "Bitácora",
        image: "/bitacora.png",
        urlGithub: "https://github.com/mavart2/bitacora_actualizado",
        urlDemo: "https://mavart2.github.io/bitacora_actualizado/",
    },
    {
        id: 5,
        title: "TaskFlow – React",
        image: "/TO.DO.LIST.png",
        urlGithub: "https://github.com/mavart2/full-app-ts",
        urlDemo: "https://full-app-ts.netlify.app/",
    },
    {
        id: 6,
        title: "Willka Tika WP",
        image: "/willka.png",
        urlGithub: "#!",
        urlDemo: "https://jardinwillkatika.org/",
    },
    {
        id: 7,
        title: "Tradiciones WP ",
        image: "/char-1.png",
        urlGithub: "#!",
        urlDemo: "https://tradicionescusco.com/",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/neutral.png",
        urlGithub: "https://github.com/mavart2/neutral",
        urlDemo: "https://mavart2.github.io/neutral/",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Marco Chavarría",
        description:
            
            "Siempre contribuyó con sugerencias que mejoraron significativamente los requerimientos. Profesional proactivo y altamente recomendable. ¡Gracias por toda tu colaboración!",
        imageUrl: "/ava_MARCO.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];