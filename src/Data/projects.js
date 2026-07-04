import CrimsonSoul from "../Components/Games/CrimsonSoul/Photo 1.png";

export const projects = [
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
                    en: "Play Demo",
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