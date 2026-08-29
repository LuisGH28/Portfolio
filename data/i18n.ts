export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const messages = {
  en: {
    meta: {
      title: "Luis González | Software Engineer",
      description: "Software engineer focused on backend development, Android and artificial intelligence."
    },
    nav: {
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      research: "Research",
      about: "About",
      contact: "Contact",
      github: "GitHub",
      menu: "Open navigation"
    },
    hero: {
      name: "Luis González",
      role: "Software Engineer",
      description: "Backend, Android and applied artificial intelligence.",
      projects: "Projects",
      cv: "Download CV",
      contact: "Contact",
      codeFocus: ["Backend", "Android", "AI"],
      codeNote: "software, systems, learning"
    },
    focus: [
      ["Android & Wear OS", "Mobile development"],
      ["Backend & Fintech", "APIs and systems"],
      ["AI & Research", "Machine learning experiments"],
      ["Open Source", "Tools and small projects"]
    ],
    about: {
      title: "About",
      paragraphs: [
        "I'm a software engineer based in Mexico, focused mainly on backend development, Android and artificial intelligence.",
        "I enjoy building software, understanding how systems work and experimenting with machine learning and evolutionary computation."
      ],
      facts: ["Mexico", "Spanish / English (B2)", "M.Sc. Computer Science"],
      interestsTitle: "Interests",
      interests: [
        "Artificial Intelligence",
        "Android",
        "Distributed Systems",
        "Linux",
        "Open Source",
        "Fintech",
        "Games",
        "Continual learning"
      ]
    },
    projects: {
      title: "Projects",
      featured: "Featured projects",
      other: "Other projects",
      viewAll: "View all projects",
      viewProject: "View project",
      viewResearch: "View research",
      items: {
        michixo: "Android and Wear OS game built with MVVM and AI based on Minimax alpha-beta.",
        "ai-git-assistant": "CLI tool that analyzes Git changes and suggests clearer commit messages.",
        mirage: "Research work on incremental learning with neural architectures and evolutionary optimization.",
        "finanzas-con-michis": "Personal finance app built in Flutter.",
        "michi-qr-generator": "Custom QR code generator.",
        "linux-automation": "Small scripts for backups, deployments and repetitive tasks.",
        "encuentros-magicos": "Small interactive web project built with HTML, CSS and JavaScript."
      }
    },
    experience: {
      title: "Experience",
      items: [
        {
          date: "2024 — 2026",
          role: "Software Developer",
          organization: "YoloPago",
          area: "Backend / Android / Fintech",
          description:
            "Built REST APIs with Java and Spring Boot, integrated financial services and worked on Android features with Jetpack Compose.",
          tech: "Java, Spring Boot, Android, SQL"
        },
        {
          date: "2024",
          role: "Network Engineer",
          organization: "SAT",
          area: "Linux / Networking / Automation",
          description: "Worked with Linux infrastructure, service monitoring and automation for network operations.",
          tech: "Linux, Bash, Networking"
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          date: "2019 — 2024",
          degree: "Systems and Communications Engineering",
          institution: "Universidad Autónoma del Estado de México"
        },
        {
          date: "2025 — Present",
          degree: "M.Sc. Computer Science",
          institution: "Universidad Autónoma del Estado de México",
          description: "Research in incremental learning and evolutionary computation."
        }
      ]
    },
    research: {
      title: "Research",
      topic: "MIRAGE",
      area: "Continual learning, neural networks and evolutionary computation.",
      description:
        "Academic work around multi-weight neural architectures and evolutionary algorithms for incremental learning.",
      readMore: "Read more",
      notes: ["Continual Learning", "Incremental Learning", "Neural Networks", "PyTorch"]
    },
    technologies: {
      title: "Technologies",
      groups: [
        ["Backend", "Java, Spring Boot, REST APIs, SQL"],
        ["Mobile", "Kotlin, Jetpack Compose, Android, Wear OS"],
        ["AI / Research", "Python, PyTorch, Neural Networks, Evolutionary Algorithms"],
        ["Tools", "Linux, Docker, Git"]
      ]
    },
    contact: {
      title: "Contact",
      text: "Feel free to reach out for work, collaboration or just to talk about software.",
      cta: "Send me an email"
    },
    footer: {
      copyright: "© 2026 Luis González"
    },
    projectPage: {
      back: "Back to portfolio",
      caseStudy: "Project notes",
      open: "Open link",
      overview: "Overview",
      problem: "Problem",
      architecture: "Architecture",
      decisions: "Technical decisions",
      challenges: "Challenges",
      stack: "Stack",
      related: "Related projects",
      pendingProblem: "Not documented yet.",
      pendingArchitecture: "Architecture notes can be added here later.",
      pendingDecision: "Pending real technical notes.",
      pendingChallenge: "Pending real project notes."
    }
  },
  es: {
    meta: {
      title: "Luis González | Ingeniero de Software",
      description: "Ingeniero de software enfocado en backend, Android e inteligencia artificial."
    },
    nav: {
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      research: "Investigación",
      about: "Sobre mí",
      contact: "Contacto",
      github: "GitHub",
      menu: "Abrir navegación"
    },
    hero: {
      name: "Luis González",
      role: "Software Engineer",
      description: "Backend, Android e inteligencia artificial aplicada.",
      projects: "Proyectos",
      cv: "Descargar CV",
      contact: "Contacto",
      codeFocus: ["Backend", "Android", "IA"],
      codeNote: "software, sistemas, aprendizaje"
    },
    focus: [
      ["Android & Wear OS", "Desarrollo móvil"],
      ["Backend & Fintech", "APIs y sistemas"],
      ["AI & Research", "Experimentos con ML"],
      ["Open Source", "Herramientas y proyectos"]
    ],
    about: {
      title: "About",
      paragraphs: [
        "Soy software engineer en México, enfocado principalmente en backend, Android e inteligencia artificial.",
        "Me gusta construir software, entender cómo funcionan los sistemas y experimentar con machine learning y computación evolutiva."
      ],
      facts: ["México", "Español / English (B2)", "M.Sc. Computer Science"],
      interestsTitle: "Intereses",
      interests: [
        "Inteligencia Artificial",
        "Android",
        "Sistemas Distribuidos",
        "Linux",
        "Open Source",
        "Fintech",
        "Juegos",
        "Estudio continuo"
      ]
    },
    projects: {
      title: "Projects",
      featured: "Proyectos principales",
      other: "Otros proyectos",
      viewAll: "Ver todos los proyectos",
      viewProject: "Ver proyecto",
      viewResearch: "Ver investigación",
      items: {
        michixo: "Juego para Android y Wear OS con arquitectura MVVM e IA basada en Minimax alfa-beta.",
        "ai-git-assistant": "Herramienta CLI que analiza cambios en Git y sugiere mensajes de commit más claros.",
        mirage: "Investigación sobre aprendizaje incremental con arquitecturas neuronales y optimización evolutiva.",
        "finanzas-con-michis": "Aplicación de finanzas personales desarrollada en Flutter.",
        "michi-qr-generator": "Generador de códigos QR personalizados.",
        "linux-automation": "Scripts pequeños para backups, despliegues y tareas repetitivas.",
        "encuentros-magicos": "Pequeña web interactiva construida con HTML, CSS y JavaScript."
      }
    },
    experience: {
      title: "Experience",
      items: [
        {
          date: "2024 — 2026",
          role: "Software Developer",
          organization: "YoloPago",
          area: "Backend / Android / Fintech",
          description:
            "Desarrollé APIs REST con Java y Spring Boot, integré servicios financieros y trabajé en funcionalidades Android con Jetpack Compose.",
          tech: "Java, Spring Boot, Android, SQL"
        },
        {
          date: "2024",
          role: "Network Engineer",
          organization: "SAT",
          area: "Linux / Networking / Automation",
          description: "Trabajé con infraestructura Linux, monitoreo de servicios y automatización para operaciones de red.",
          tech: "Linux, Bash, Networking"
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          date: "2019 — 2024",
          degree: "Ingeniería en Sistemas y Comunicaciones",
          institution: "Universidad Autónoma del Estado de México"
        },
        {
          date: "2025 — Actualidad",
          degree: "Maestría en Ciencias de la Computación",
          institution: "Universidad Autónoma del Estado de México",
          description: "Investigación en aprendizaje incremental y computación evolutiva."
        }
      ]
    },
    research: {
      title: "Research",
      topic: "MIRAGE",
      area: "Aprendizaje continuo, redes neuronales y computación evolutiva.",
      description:
        "Trabajo académico sobre arquitecturas neuronales con múltiples líneas de pesos y algoritmos evolutivos para aprendizaje incremental.",
      readMore: "Leer más",
      notes: ["Continual Learning", "Incremental Learning", "Neural Networks", "PyTorch"]
    },
    technologies: {
      title: "Technologies",
      groups: [
        ["Backend", "Java, Spring Boot, REST APIs, SQL"],
        ["Mobile", "Kotlin, Jetpack Compose, Android, Wear OS"],
        ["AI / Research", "Python, PyTorch, Neural Networks, Evolutionary Algorithms"],
        ["Tools", "Linux, Docker, Git"]
      ]
    },
    contact: {
      title: "Contact",
      text: "Puedes escribirme para trabajo, colaboración o simplemente para hablar de software.",
      cta: "Envíame un correo"
    },
    footer: {
      copyright: "© 2026 Luis González"
    },
    projectPage: {
      back: "Volver al portafolio",
      caseStudy: "Notas del proyecto",
      open: "Abrir enlace",
      overview: "Overview",
      problem: "Problema",
      architecture: "Arquitectura",
      decisions: "Decisiones técnicas",
      challenges: "Retos",
      stack: "Stack",
      related: "Proyectos relacionados",
      pendingProblem: "Aún no está documentado.",
      pendingArchitecture: "Aquí se pueden agregar notas de arquitectura más adelante.",
      pendingDecision: "Pendiente de completar con notas técnicas reales.",
      pendingChallenge: "Pendiente de completar con notas reales del proyecto."
    }
  }
} as const;

export type Messages = (typeof messages)[Locale];
