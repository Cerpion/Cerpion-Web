import CrimsonSoul from "../assets/Projects/CrimsonSoul/Icon.png";
import ForesightSports from "../assets/Projects/ForesightSports/Icon.png";
import PanDeBonus from "../assets/Projects/PanDeBonus/Icon.png";

export const projects = [

    //ForesightSports
    {

        id: "foresight-sports",
        image: ForesightSports,
        youtube: "https://youtube.com/embed/rPZowAnp4yk?si=eLnDCAyhmimuci1P",
        tags: [
            "UI/UX",
            "C#",
            "Git",
            "NOESIS"
        ],
        buttons: [
            {
                id: "project",
                text: {
                    en: "View Project",
                    es: "Ver Proyecto"
                },
                type: "internal",
                url: "/ForesightSports"
            },
            {
                id: "play",
                text: {
                    en: "Play",
                    es: "Jugar"
                },
                type: "external",
                url: "https://www.foresightsports.com/pages/fsx-play"
            }
        ],

        translations: {
            en: {
                title: "Foresight Sports",
                description: "Responsible for developing and implementing user interfaces for golf simulation applications. Worked on building responsive UI, integrating new features, and improving the overall user experience using modern UI technologies.",
                highlights: [
                    "Developed user interfaces using NoesisGUI and C#.",
                    "Implemented new UI features and reusable components.",
                    "Optimized UI performance and user experience."
                ]
            },

            es: {
                title: "Foresight Sports",
                description: "Fui responsable del desarrollo e implementación de interfaces de usuario para aplicaciones enfocadas en simulación de golf. Trabajé en la creación de interfaces responsivas, la integración de funcionalidades y la optimización de la experiencia del usuario utilizando tecnologías modernas.",
                highlights: [
                    "Desarrollé interfaces de usuario con NoesisGUI y C#.",
                    "Implementé nuevas funcionalidades y componentes de UI.",
                    "Optimicé el rendimiento y la experiencia de usuario.",
                ]
            }

        }

    },

    //CrimsonSoul
    {

        id: "crimson-soul",
        image: CrimsonSoul,
        youtube: "https://youtube.com/embed/DyUypj648xs",
        tags: [
            "Gameplay",
            "GameDesing",
            "Art 3D",
            "SoundDesing"
        ],
        buttons: [
            {
                id: "project",
                text: {
                    en: "View Project",
                    es: "Ver Proyecto"
                },
                type: "internal",
                url: "/CrimsonSoul"
            },
            {
                id: "play",
                text: {
                    en: "Play",
                    es: "Jugar"
                },
                type: "external",
                url: "https://play.google.com/store/apps/details?id=com.cerpion.crimsonSoul&hl=en"
            }
        ],

        translations: {
            en: {
                title: "Crimson Soul",
                description: "Crimson Soul is a solo-developed fast-paced action RPG featuring responsive combat, RPG progression, and increasingly challenging enemies. I was responsible for designing and implementing every core gameplay system, creating visual effects, and building the user interface.",
                highlights: [
            "Created shaders and visual effects for gameplay.",
            "Implemented combat feedback and hit effects.",
            "Optimized gameplay systems and UI."
        ]
            },

            es: {
                title: "Crimson Soul",
                description: "Crimson Soul es un RPG de acción de ritmo rápido desarrollado en solitario, con un combate ágil y responsivo, progresión RPG y enemigos cada vez más desafiantes. Fui responsable de diseñar e implementar todos los sistemas principales de gameplay, crear efectos visuales y desarrollar la interfaz de usuario.",
                highlights: [
            "Creé shaders y efectos visuales para el gameplay.",
            "Implementé feedback de combate y efectos de impacto.",
            "Optimicé sistemas de gameplay y UI."
        ]
            }

        }

    },

    //PanDeBonus
    {

        id: "pan-de-bonus",
        image: PanDeBonus,
        youtube: "https://youtube.com/embed/WRlYBvmHHcM?si=cCDtUUet02K7otz0",
        tags: [
            "Gameplay",
            "GameDesing",
            "Art 3D",
            "VFX"
        ],
        buttons: [
            {
                id: "project",
                text: {
                    en: "View Project",
                    es: "Ver Proyecto"
                },
                type: "internal",
                url: "/CrimsonSoul"
            },
            {
                id: "play",
                text: {
                    en: "Play",
                    es: "Jugar"
                },
                type: "external",
                url: "https://play.google.com/store/apps/details?id=com.cerpion.crimsonSoul&hl=en"
            }
        ],

        translations: {
            en: {
                title: "Crimson Soul",
                description: "Crimson Soul is a solo-developed fast-paced action RPG featuring responsive combat, RPG progression, and increasingly challenging enemies. I was responsible for designing and implementing every core gameplay system, creating visual effects, and building the user interface.",
                highlights: [
            "Created shaders and visual effects for gameplay.",
            "Implemented combat feedback and hit effects.",
            "Optimized gameplay systems and UI."
        ]
            },

            es: {
                title: "Crimson Soul",
                description: "Crimson Soul es un RPG de acción de ritmo rápido desarrollado en solitario, con un combate ágil y responsivo, progresión RPG y enemigos cada vez más desafiantes. Fui responsable de diseñar e implementar todos los sistemas principales de gameplay, crear efectos visuales y desarrollar la interfaz de usuario.",
                highlights: [
            "Creé shaders y efectos visuales para el gameplay.",
            "Implementé feedback de combate y efectos de impacto.",
            "Optimicé sistemas de gameplay y UI."
        ]
            }

        }

    },
];