export type Project = {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  summary?: string;
  cta?: string;
  href?: string;
  github?: string;
  demo?: string;
  documentation?: string;
  image?: string;
  variant?: "image" | "terminal" | "network";
  featured: boolean;
  detail: {
    overview: string;
    problem?: string;
    architecture?: string;
    decisions?: string[];
    challenges?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "michixo",
    name: "MichiXO",
    description:
      "Juego para Android y Wear OS con arquitectura MVVM e inteligencia artificial basada en Minimax α-β.",
    technologies: ["Android", "Kotlin", "Jetpack Compose", "Wear OS", "AI"],
    cta: "Ver proyecto",
    href: "https://play.google.com/store/apps/details?id=com.luigidev.michixo.mobile",
    github: "https://github.com/LuisGH28/michi-xo",
    image: "/projects/michixo.webp",
    variant: "image",
    featured: true,
    detail: {
      overview:
        "MichiXO es un juego móvil publicado para Android y Wear OS. El proyecto combina interfaz nativa, arquitectura MVVM e inteligencia artificial para la toma de decisiones del juego.",
      problem:
        "Crear una experiencia móvil y de reloj con lógica de juego consistente, interfaz cuidada y comportamiento inteligente en un formato compacto.",
      architecture:
        "Aplicación Android construida con Kotlin y Jetpack Compose, organizada alrededor de MVVM y lógica de juego desacoplada.",
      decisions: [
        "Jetpack Compose para UI declarativa",
        "MVVM para separar estado, lógica e interfaz",
        "Minimax con poda alfa-beta para decisiones de IA"
      ],
      challenges: ["Adaptar la experiencia a Wear OS", "Mantener una UI clara en pantallas pequeñas"]
    }
  },
  {
    slug: "ai-git-assistant",
    name: "AI Git Assistant",
    description:
      "Herramienta que analiza cambios en repositorios Git y genera sugerencias inteligentes para mensajes de commit.",
    technologies: ["Python", "NLP", "Machine Learning", "PyPI"],
    cta: "Ver proyecto",
    href: "https://pypi.org/project/ai-git-assistant/",
    github: "https://github.com/LuisGH28/git_assitant",
    image: "/projects/git-assistant.webp",
    variant: "terminal",
    featured: true,
    detail: {
      overview:
        "AI Git Assistant es una herramienta de línea de comandos enfocada en analizar cambios de Git y proponer mensajes de commit más claros.",
      problem:
        "Reducir la fricción de escribir commits semánticos al trabajar con cambios frecuentes o repositorios activos.",
      architecture:
        "CLI en Python con análisis de cambios del repositorio y generación de sugerencias listas para revisar.",
      decisions: [
        "Interfaz CLI para integrarse con flujos Git existentes",
        "Publicación en PyPI",
        "Plantillas de commit orientadas a claridad"
      ],
      challenges: ["Resumir cambios sin perder contexto", "Evitar sugerencias demasiado genéricas"]
    }
  },
  {
    slug: "mirage",
    name: "MIRAGE",
    description:
      "Investigación sobre aprendizaje incremental utilizando arquitecturas neuronales con múltiples líneas de pesos y optimización evolutiva.",
    technologies: ["Python", "PyTorch", "Evolutionary Computation"],
    cta: "Ver investigación",
    href: "https://github.com/LuisGH28",
    variant: "network",
    featured: true,
    detail: {
      overview:
        "MIRAGE explora arquitecturas neuronales con múltiples líneas de pesos y algoritmos evolutivos para aprendizaje incremental.",
      problem:
        "Estudiar alternativas para que modelos neuronales incorporen nueva información sin perder de vista conocimiento previo.",
      architecture:
        "Prototipos de investigación en Python y PyTorch orientados a aprendizaje incremental, redes neuronales y computación evolutiva.",
      decisions: [
        "Separar MIRAGE como investigación, no solo como proyecto de software",
        "Mantener la sección preparada para futuras publicaciones",
        "No declarar papers, DOI ni resultados no documentados"
      ],
      challenges: ["Diseñar experimentos reproducibles", "Evaluar la interacción entre múltiples pesos y aprendizaje incremental"]
    }
  },
  {
    slug: "michi-qr-generator",
    name: "QR Generator",
    description: "Generador de códigos QR personalizados.",
    technologies: ["Python"],
    github: "https://github.com/LuisGH28/michi_qr_generator",
    image: "/projects/michi-qr-generator.webp",
    variant: "image",
    featured: false,
    detail: {
      overview:
        "Generador de códigos QR personalizados con Python, Pillow y QRcode, recuperado del portafolio anterior.",
      architecture: "Utilidad Python centrada en generación de imágenes QR."
    }
  },
  {
    slug: "linux-automation",
    name: "Linux Automation",
    description: "Scripts para backups, despliegues y tareas repetitivas.",
    technologies: ["Bash", "Python", "CI/CD"],
    github: "https://github.com/LuisGH28/Automatization",
    image: "/projects/linux-automation.webp",
    variant: "image",
    featured: false,
    detail: {
      overview:
        "Colección de automatizaciones Linux/Python para tareas repetitivas, backups y despliegues.",
      architecture: "Scripts utilitarios orientados a terminal y flujos de mantenimiento."
    }
  },
  {
    slug: "encuentros-magicos",
    name: "Encuentros Mágicos",
    description: "Pequeña web interactiva con HTML, CSS y JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LuisGH28/newAdventure",
    demo: "https://encuentrosmagicos.netlify.app",
    image: "/projects/encuentros-magicos.webp",
    variant: "image",
    featured: false,
    detail: {
      overview:
        "Experiencia web interactiva recuperada del portafolio anterior, construida con HTML, CSS y JavaScript.",
      architecture: "Sitio estático con interacción ligera en navegador."
    }
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const secondaryProjects = projects.filter((project) => !project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
