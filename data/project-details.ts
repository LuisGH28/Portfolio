import type { Locale } from "@/data/i18n";

export type ProjectDetailCopy = {
  overview: string;
  problem?: string;
  architecture?: string;
  decisions?: string[];
  challenges?: string[];
};

export const projectDetails: Record<Locale, Record<string, ProjectDetailCopy>> = {
  en: {
    "red-por-la-justicia": {
      overview:
        "Official website for Red por la Justicia, A.C., a nonprofit organization that provides legal guidance and support.",
      problem:
        "Create a clear and trustworthy institutional presence that explains the organization's services and makes its legal support channels easy to find.",
      architecture:
        "Responsive web application built with Next.js, TypeScript and Tailwind CSS using reusable components.",
      decisions: [
        "Technical SEO with sitemap and structured data",
        "Google Search Console configuration",
        "Security hardening through CSP and HTTP headers"
      ],
      challenges: [
        "Presenting legal information clearly with accessible navigation",
        "Keeping the experience consistent across mobile and desktop devices"
      ]
    },
    michixo: {
      overview:
        "MichiXO is an Android and Wear OS game. It combines native UI, MVVM structure and game AI for move decisions.",
      problem:
        "Build a small game that works well on both phone and watch screens without making the logic hard to maintain.",
      architecture:
        "Android app built with Kotlin and Jetpack Compose, with game state and UI separated through MVVM.",
      decisions: [
        "Jetpack Compose for declarative UI",
        "MVVM to keep state and interface separate",
        "Minimax with alpha-beta pruning for game decisions"
      ],
      challenges: ["Adapting the experience to Wear OS", "Keeping the UI clear on small screens"]
    },
    "ai-git-assistant": {
      overview:
        "AI Git Assistant is a command-line tool that reads Git changes and suggests commit messages.",
      problem: "Make commit writing a little easier when working through frequent repository changes.",
      architecture: "Python CLI built around repository diff analysis and reviewable suggestions.",
      decisions: [
        "CLI interface to fit existing Git workflows",
        "PyPI distribution",
        "Commit templates focused on clarity"
      ],
      challenges: ["Summarizing changes without losing context", "Avoiding overly generic suggestions"]
    },
    mirage: {
      overview:
        "MIRAGE explores multi-weight neural architectures and evolutionary algorithms for incremental learning.",
      problem:
        "Study ways for neural models to incorporate new information while reducing loss of previous knowledge.",
      architecture:
        "Research prototypes in Python and PyTorch around incremental learning, neural networks and evolutionary computation.",
      decisions: [
        "Treat MIRAGE as research rather than a regular software product",
        "Leave space for future publications without inventing them",
        "Avoid undocumented claims about results or DOI"
      ],
      challenges: ["Designing reproducible experiments", "Evaluating how multiple weights interact with incremental learning"]
    }
  },
  es: {
    "red-por-la-justicia": {
      overview:
        "Sitio web oficial de Red por la Justicia, A.C., una asociación civil dedicada a brindar orientación y acompañamiento jurídico.",
      problem:
        "Crear una presencia institucional clara y confiable que explique los servicios de la asociación y facilite el acceso a sus canales de apoyo jurídico.",
      architecture:
        "Aplicación web responsive construida con Next.js, TypeScript y Tailwind CSS mediante componentes reutilizables.",
      decisions: [
        "SEO técnico con sitemap y datos estructurados",
        "Configuración de Google Search Console",
        "Hardening de seguridad mediante CSP y headers HTTP"
      ],
      challenges: [
        "Presentar información jurídica con claridad y una navegación accesible",
        "Mantener una experiencia consistente en dispositivos móviles y de escritorio"
      ]
    },
    michixo: {
      overview:
        "MichiXO es un juego para Android y Wear OS. Combina interfaz nativa, estructura MVVM e IA para decidir movimientos.",
      problem:
        "Construir un juego pequeño que funcione bien en teléfono y reloj sin volver difícil de mantener la lógica.",
      architecture:
        "Aplicación Android construida con Kotlin y Jetpack Compose, separando estado e interfaz con MVVM.",
      decisions: [
        "Jetpack Compose para UI declarativa",
        "MVVM para separar estado e interfaz",
        "Minimax con poda alfa-beta para decisiones de juego"
      ],
      challenges: ["Adaptar la experiencia a Wear OS", "Mantener una UI clara en pantallas pequeñas"]
    },
    "ai-git-assistant": {
      overview:
        "AI Git Assistant es una herramienta de línea de comandos que lee cambios en Git y sugiere mensajes de commit.",
      problem: "Hacer un poco más fácil escribir commits cuando se trabaja con cambios frecuentes.",
      architecture: "CLI en Python alrededor del análisis de diffs y sugerencias revisables.",
      decisions: [
        "Interfaz CLI para encajar con flujos Git existentes",
        "Distribución en PyPI",
        "Plantillas de commit enfocadas en claridad"
      ],
      challenges: ["Resumir cambios sin perder contexto", "Evitar sugerencias demasiado genéricas"]
    },
    mirage: {
      overview:
        "MIRAGE explora arquitecturas neuronales con múltiples líneas de pesos y algoritmos evolutivos para aprendizaje incremental.",
      problem:
        "Estudiar formas para que modelos neuronales incorporen nueva información reduciendo la pérdida de conocimiento previo.",
      architecture:
        "Prototipos de investigación en Python y PyTorch sobre aprendizaje incremental, redes neuronales y computación evolutiva.",
      decisions: [
        "Tratar MIRAGE como investigación y no como producto de software",
        "Dejar espacio para futuras publicaciones sin inventarlas",
        "Evitar claims no documentados sobre resultados o DOI"
      ],
      challenges: ["Diseñar experimentos reproducibles", "Evaluar cómo interactúan múltiples pesos con aprendizaje incremental"]
    }
  }
};
