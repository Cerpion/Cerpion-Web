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
                id: "viewProject",
                type: "internal",
                url: "/ForesightSports"
            },
            {
                id: "play",
                type: "external",
                url: "https://www.foresightsports.com/pages/fsx-play"
            }
        ],
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
            id: "viewProject",
            type: "internal",
            url: "/CrimsonSoul"
        },

        {
            id: "play",
            type: "external",
            url: "https://play.google.com/store/apps/details?id=com.cerpion.crimsonSoul&hl=en"
        }
            ],


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
                id: "viewProject",
                type: "internal",
                url: "/PanDeBonus"
            },
            {
                id: "play",
                type: "external",
                url: "https://celab.com.co/"
            }
        ],
    },
];