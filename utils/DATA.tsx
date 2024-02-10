import { ICONS } from "./ICONS";
import { IMAGES } from "./IMAGES";

export const DATA = {
    FEATURED_ICON_SIZE: 20,
    NAV: [
        "About",
        "Projects"
    ],
    SELECTED_PROJECTS: {
        FILTER: [
            {
                name: "all",
                icon: ICONS.LAPTOP
            },
            {
                name: "website",
                icon: ICONS.WEBSITE
            },
            {
                name: "mobile",
                icon: ICONS.MOBILE
            },
            {
                name: "games",
                icon: ICONS.GAMES
            },
        ],
        LIST:
            [
                {
                    title: "Valorant HQ",
                    description:
                        "It gives Valorant players a fast overview of limited character talents, abilities, and lineups.",
                    cover: IMAGES.PROJECTS.VALORANT,
                    tools: ["Javascript", "CSS", "HTML"],
                    github: "https://github.com/marvskiee/valorant-beginner",
                    link: "https://marvskiee.github.io/valorant-beginner/",
                    type: "website",
                    work: "Freelance",
                },
                {
                    title: "Wild Path",
                    description:
                        "It is a website that helps people to know more about wildlife, including its benefits and career opportunities.",
                    cover: IMAGES.PROJECTS.WILD,
                    tools: ["Javascript", "Html", "CSS"],
                    github: "https://github.com/marvskiee/projwild",
                    link: "https://marvskiee.github.io/projwild/",
                    type: "website",
                    work: "Freelance",
                },
                {
                    title: "Ncov-Trace",
                    description: "It is a website that keeps track of the world's and country's daily covid cases.",
                    cover: IMAGES.PROJECTS.COVID,
                    tools: ["ReactJS", "NodeJS"],
                    github: "https://github.com/marvskiee/ncov-trace",
                    link: "https://ncovtrace-marvs.netlify.app/tracker",
                    type: "website",
                    work: "Personal",
                },
                {
                    title: "Netflix Clone",
                    description:
                        "It shows various award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
                    cover: IMAGES.PROJECTS.NETFLIX,
                    tools: ["ReactJS", "NodeJS"],
                    github: "https://github.com/marvskiee/nutflix",
                    link: "https://lucid-tereshkova-7e2d1a.netlify.app/",
                    type: "website",
                    work: "Personal",
                },

                {
                    title: "RentApt",
                    description: "It is an apartment management system with SMS notifications that include utility billing records.",
                    cover: IMAGES.PROJECTS.RENT,
                    tools: ["NextJS", "NodeJS", "MongoDB", "Firebase"],
                    link: "https://rentapt.online",
                    type: "website",
                    work: "Freelance",
                },

                {
                    title: "AsianHuba",
                    description:
                        "It is a mobile application that offers a diverse selection of Asian dramas, including Thai films, Korean dramas, and Japanese films.",
                    cover: IMAGES.PROJECTS.ASIAN,
                    tools: ["React Native", "Flask", "Python", "BeautifulSoup4"],
                    github: "https://github.com/marvskiee/asianhuba2-client",
                    video: "https://www.youtube.com/embed/VCLCzA8I9iI",
                    type: "mobile",
                    work: "Personal",
                },
                {
                    title: "AnimeGon",
                    description:
                        "It is a mobile application that offers a vast and impressive selection of anime.",
                    cover: IMAGES.PROJECTS.ANIME,
                    tools: ["React Native"],
                    github: "https://github.com/marvskiee/animegon2-client",
                    video: "https://www.youtube.com/embed/iBs_leic0OY",
                    type: "mobile",
                    work: "Personal",
                },
                {
                    title: "Crowneplaza",
                    description: "It is a hotel reservation management system that offers real-time vacant rooms to users.",
                    cover: IMAGES.PROJECTS.CROWNE,
                    tools: ["NextJS", "NodeJS", "MongoDB", "Firebase"],
                    link: "https://crowneplazav2.vercel.app/customer",
                    type: "website",
                    work: "Freelance",
                },

                {
                    title: "Community Pantry",
                    description: "It is a social media platform that sees the latest pantry posted near the user's location.",
                    cover: IMAGES.PROJECTS.PANTRY,
                    tools: ["NextJS", "MongoDB", "Firebase"],
                    link: "https://community-pantry.vercel.app",
                    type: "website",
                    work: "Freelance",
                },
                {
                    title: "Cryptobat",
                    description: "It is a website that shows the top cryptocurrency market rank.",
                    cover: IMAGES.PROJECTS.CRYPTO,
                    tools: ["ReactJS", "NodeJS"],
                    github: "https://github.com/marvskiee/cryptobat",
                    link: "https://modest-leavitt-ad3897.netlify.app",
                    type: "website",
                    work: "Personal",
                },


                {
                    title: "Vita Store",
                    description:
                        "It is a mobile application product scanner with an inventory system. It features instant information checking via barcode scanning.",
                    cover: IMAGES.PROJECTS.VITA,
                    tools: ["React Native", "NodeJS", "MongoDB"],
                    github: "https://github.com/marvskiee/vitacode_client",
                    video: "https://www.youtube.com/embed/_Z5iwXt3aF4",
                    type: "mobile",
                    work: "Personal",
                },
                {
                    title: "MovieHiro",
                    description:
                        "It is an online movie streaming application that holds various movies with no ads.",
                    cover: IMAGES.PROJECTS.MOVIE,
                    tools: ["React Native", "Python", "Flask", "BeautifulSoup4"],
                    github: "https://github.com/marvskiee/movie_client",
                    video: "https://www.youtube.com/embed/DdyFY5-Xda0",
                    type: "mobile",
                    work: "Personal",
                },
                {
                    title: "Traysi",
                    description:
                        "It is a mobile application tricycle tracking app with a report system that includes comments and ratings. It also provides fare rate computation for users.",
                    tools: ["Ionic", "Firebase"],
                    cover: IMAGES.PROJECTS.TRAYSI,
                    video: "https://www.youtube.com/embed/JNyjN53WJoc",
                    type: "mobile",
                    work: "Freelance",
                },

                {
                    title: "Color Game",
                    description:
                        "It is a quick game with the mechanic of selecting the correct color that challenges the user to obtain a high score.",
                    tools: ["React Native"],
                    cover: IMAGES.PROJECTS.COLOR,
                    github: "https://github.com/marvskiee/color_game",
                    video: "https://www.youtube.com/embed/YKJlBInygYE",
                    type: "games",
                    work: "Freelance",
                },
                {
                    title: "Note Me",
                    description:
                        "It is a note-taking application with an account feature to record the user's saved written output.",
                    cover: IMAGES.PROJECTS.NOTE,
                    tools: ["React Native", "NodeJS", "MongoDB"],
                    github: "https://github.com/marvskiee/noteme-client",
                    video: "https://www.youtube.com/embed/Eo1sN4gPrSo",
                    type: "mobile",
                    work: "Freelance",
                },
                {
                    title: "Attack on Virus",
                    description:
                        "It is a game that lets the players have strategies to kill viruses at different levels. It is also a fun way to educate players about viruses.",
                    tools: ["Unity"],
                    cover: IMAGES.PROJECTS.VIRUS,
                    video: "https://www.youtube.com/embed/O-8S-Te299I",
                    type: "games",
                    work: "Freelance",
                },
                {
                    title: "Marinduque Investigative",
                    description:
                        " It is a mystery game that tells the story of a prodigy programmer and his son. It intends to help information technology practitioners measure their knowledge about developing software, web, and games.",
                    tools: ["Unity"],
                    cover: IMAGES.PROJECTS.MARINDUQUE,
                    video: "https://www.youtube.com/embed/RqgTGpoIm7g",
                    type: "games",
                    work: "Freelance",
                },
            ]
    },
    FEATURED_PROJECTS: [
        {
            embed: "ehsPEJUauEk",
            icon: IMAGES.TMIC,
            title: "Tiger Metal Industries Corporation",
            subcategory: "Steel Pipe Bench Scale Reports Management System",
            description:
                "TMIC is a company that produces steel bars in any sizes and shapes. This software has a feature to track inventories using a barcode scanner, weighing large scale of metal using Defender 300 OHAUS, and print stickers based on their preferences.",
            tools: ['C#', ' MySql', ' Eyoyo Barcode Scanner', ' Defender 3000(Scale) and Xprinter 470B']

        },
        {
            embed: "SWyc5LSnBYA",
            icon: IMAGES.FUJIHIRO,
            title: "Fujihiro Philippines",
            subcategory:
                "Metal Bench Scale Reports Management System",
            description:
                "Fujihiro Philippines is a company that trades goods such as electronic parts. This software has a feature to weigh metals, Metal Scrap, and Raw Metal. After getting the weight, they can print the data using EPSON LX-300. It also has a CSV file report.",
            tools: ['C#', ' XML', ' Defender 3000(Scale) and Epson LX-300'],
        },
    ]
}