import { action, makeAutoObservable, observable } from "mobx";
import { projectDTO, ProjectResourceButtonClasses } from "../models/projects/projectInterfaces";

export class ProjectStore {

    test = false;

    setTest = (value: boolean) => {
        this.test = value;
    }

    projects: projectDTO[] = [
        {
            title: 'Portfolio',
            category: 'Web Application',
            link: '/project/0',
            image: 'https://i.imgur.com/OeX48gL.png',
            info: {
                about: 'This is the project page for this very website. As a new found programmer, it\'s important to have a place for all your previous work to be displayed. This is where a portfolio website comes in handy. Not only can you display your work, so potential employers can look at it. But it also gives opportunity to explain who you are, how you work, and what you\'re good at. So with that in mind, iI had to design and construct the best possible portfolio for myself within a reasonable timeframe, so i can begin searching for job posibilities. I hope you enjoy it!',
                involement: 'As said, this is my own personal portfolio, so my involvement in this project, is everything. I\'ve designed and programmed everything on my own. It is written in React with typescript, Sass for the styling and figma for the initial prototype design idea. Everything can be found in the links below.',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma']
            },

            carouselImages: [
                'https://i.imgur.com/WVnLTNn.png',
                'https://i.imgur.com/GxIf4Pl.png',
            ],
            resources: [
                {
                    iconName: 'figma',
                    title: 'Figma',
                    link: 'https://www.figma.com/file/w0weJhRHHyWhUCR8JN3aaK/Portfolio-Design?t=zXQUdMC5114LzsAF-1',
                    buttonClass: ProjectResourceButtonClasses.FIGMA
                },
                {
                    iconName: 'github_white',
                    title: 'Github',
                    link: 'https://github.com/Frann0/PersonalWebsite',
                    buttonClass: ProjectResourceButtonClasses.GITHUB
                },
                {
                    iconName: 'website',
                    title: 'Website',
                    link: 'https://mikehovedskov.dk',
                    buttonClass: ProjectResourceButtonClasses.WEBSITE
                }
            ]
        },
        {
            title: 'Cappsule',
            category: 'App',
            link: '/project/1',
            image: 'https://i.imgur.com/k2J026O.png',
            info: {
                about: 'Cappsule was built as a native android app during my 4th semester at EASV. I had chosen mobile development as an elective, and during that course we learned how to make native android apps with the native sdk. Cappsule had the purpose of being kind of like snapchat, but with timecapsules. So you could add friends and send them these timecapsules, where you either set a date in the future where this message can be opened or you had to walk to a specific location to have it available.',
                involement: 'As cappsule was an elective during my school years, we had to work in groups. And since it was built in native android we figured it was really important to have it be beautifully designed, since native android is really outdated and kind of hard to get it to look great, so that was really our wow factor. My involvement on the project was not so much developing it, but designing it and implementing the design into the code.',
                platform: 'Android',
                tools: ['Kotlin', 'XML', 'Dotnet', 'Figma',]
            },

            carouselImages: [
                'https://i.imgur.com/APtQRWc.png',
                'https://i.imgur.com/b098hiG.png',
                'https://i.imgur.com/79uz75r.png',
                'https://i.imgur.com/HnynTcp.png'
            ],
            resources: [
                {
                    iconName: 'figma',
                    title: 'Figma',
                    link: 'https://www.figma.com/file/nkz0mCvi0vAor2gVb3UClB/cAppsule?t=VoY32a5ObnaaBRzO-1',
                    buttonClass: ProjectResourceButtonClasses.FIGMA
                },
                {
                    iconName: 'github_white',
                    title: 'Github',
                    link: 'https://github.com/De4aber/cAppsule_Frontend',
                    buttonClass: ProjectResourceButtonClasses.GITHUB
                }
            ]
        },
        {
            title: 'Riv4lz',
            category: 'Web Application',
            link: '/project/2',
            image: 'https://i.imgur.com/7WgPwQ6.png',
            info: {
                about: 'Riv4lz came as an idea by one of my friends, during our 4. semester in our fullstack development elective course. Our problem was that there really isn\'t any online platforms for amateur game casters to get any jobs or for that matter any practice in their abilities. Riv4lz strives to fill that gap, by allowing caster and organisations to sign up to our site. Where the organisations then can create matches amateur casters could apply for. That solves problems for both parties. The organisations get cheaper casters and amateurs get some money and practise at the craft.',
                involement: 'As said the idea was one of my friends\' which meant we also had to build this in a group. My involvement in the project came in as a frontend developer and designer. I also came with inputs on how things could be done and what features could be built.',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma', 'Dotnet']
            },

            carouselImages: [
                'https://i.imgur.com/7WgPwQ6.png',
                'https://i.imgur.com/eUYIPOr.png',
                'https://i.imgur.com/9d2ubXk.png',
                'https://i.imgur.com/i33lrfp.png',
                'https://i.imgur.com/zV7EedT.png',
                'https://i.imgur.com/AqROXvc.png',
                'https://i.imgur.com/mPClG5P.png',
            ],
            resources: [
                {
                    iconName: 'figma',
                    title: 'Figma',
                    link: 'https://www.figma.com/file/DDxObWJ04ewqojwXSmk2HF/rival4z-pages?t=VoY32a5ObnaaBRzO-1',
                    buttonClass: ProjectResourceButtonClasses.FIGMA
                },
                {
                    iconName: 'github_white',
                    title: 'Github',
                    link: 'https://github.com/riv4lz/riv4lz-frontend',
                    buttonClass: ProjectResourceButtonClasses.GITHUB
                }
            ]
        },
        {
            title: 'Loopie Game',
            category: 'Web Application',
            link: '/project/3',
            image: 'https://i.imgur.com/Xc3ADTM.png',
            info: {
                about: 'Loopie was both my internship project and my final project during my 5th semester at EASV. Personalised bingo boards has been more and more popular lately, it is usually used during social events such as weddings or parties, but it is usually played with pen and paper. It requires a lot of pre game setup time and is usually hard to keep track of with the analog stuff. Loopie seeks to eliminate that, by moving it to a online platform, where everything is automated for you.',
                involement: 'During loopie I was the one who did the frontend work on the site aswell as designing it and implemeting the design. ',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma', 'Dotnet', 'Mysql']
            },

            carouselImages: [
                'https://i.imgur.com/aa9fx4E.png',
                'https://i.imgur.com/dwHmGlj.png',
                'https://i.imgur.com/hQiud6Y.png',
                'https://i.imgur.com/lz6qja1.png'
            ],
            resources: [
                {
                    iconName: 'figma',
                    title: 'Figma',
                    link: 'https://www.figma.com/file/jFJkd5RztHXZmkKQwNPsmH/EmilseBilseBingo-Reimagined?t=VoY32a5ObnaaBRzO-1',
                    buttonClass: ProjectResourceButtonClasses.FIGMA
                },
                {
                    iconName: 'github_white',
                    title: 'Github',
                    link: 'https://github.com/Loopie-games/EmilseBilseFrontend',
                    buttonClass: ProjectResourceButtonClasses.GITHUB
                }
            ]
        },

        {
            title: 'Apollyon',
            category: 'Website',
            link: '/project/4',
            image: 'https://i.imgur.com/lajyePs.png',
            info: {
                about: 'Apollyon is just a recruitment page for my World of Warcraft Guild. It has all the information on what we stand for as a team, why we do what we do, our aspirations for the community my team is building and so on. As said it is made for recruitment purposes, as we have a contact form at the bottom of the page, where other players can apply to become apart of our raiding roster. That application then gets send via a discord webhook directly to our guild discord, where me and my officers can review and accept or deny.',
                involement: 'Well, as this is my World of Warcraft guild, I handled everything on during this project, from the design to the implementation of the webhook, as the guys I started the guild with, is not particulary techinally skilled in this field as I am.',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma',]
            },

            carouselImages: [
                'https://i.imgur.com/9GMhT5l.jpg',
            ],
            resources: [
                {
                    iconName: 'figma',
                    title: 'Figma',
                    link: 'https://www.figma.com/file/IQJa5PxYOFjFKELkl6PtnG/Apollyon?t=VoY32a5ObnaaBRzO-1',
                    buttonClass: ProjectResourceButtonClasses.FIGMA
                },
                {
                    iconName: 'website',
                    title: 'Website',
                    link: 'https://theapollyon.dk',
                    buttonClass: ProjectResourceButtonClasses.WEBSITE
                }
            ]
        },
        {
            title: 'Weblager',
            category: 'Web application',
            link: '/project/5',
            image: 'https://i.imgur.com/BF7wJPz.png',
            info: {
                about: 'Weblager was a project i worked on during my time at Danskscanning A/S from nov 2021 - nov 2022. Weblager is a platform where the partnered municipalities can find earlier building cases for plots of land in Denmark. And is usually used by construction workers and such to look at earlier work. This solves the problem of having the old physical files digitalized and available on an online platform, so it wouldn\'t take ages to look for the physical file.',
                involement: 'During my time at Danskscanning, I was tasked with redesigning the old interface to a more stialized and mordernized look for the 21 century. where I as well as some other guys on the team went through 2 or 3 itterations of designs before landing on what it is today. After we got the go ahead on the design, we then began work on getting it implemented by rewriting all the css and typescript to handle everything new we had planned for.',
                platform: 'Web',
                tools: ['Angular', 'Typescript', 'Sass', 'Figma',]
            },

            carouselImages: [
                'https://miro.medium.com/max/4800/1*HhzXu5T8d3n8mM_V4RixKg.webp',
                'https://miro.medium.com/max/4800/1*gpLGGtOOviVCy9-NRQQOIw.webp',
            ],
            resources: [
                {
                    iconName: 'website',
                    title: 'Website',
                    link: 'https://ny.weblager.dk',
                    buttonClass: ProjectResourceButtonClasses.WEBSITE
                }
            ]
        },
        {
            title: 'Webdock',
            category: 'Web application',
            link: '/project/6',
            image: 'https://i.imgur.com/pJ0oLf2.png',
            info: {
                about: 'Webdock was my first project during my bachelor in Webdevelopment. The project was a collaboration between me, 3 other students and the company Webdock A/S which set the task for us. The task was to create a standalone web application that could replace their current system for creating and managing user feedback. ',
                involement: 'My involvement in the project was mostly the backend coding. I handled the backend stack which was Bun, Elysia, Prisma, mysql database and KrakenD. I also had a hand in the frontend, but my main focus was the backend. It was exciting, as i could utilize some new technologies that just reached the market, in a professional manner and not just for fun. And also architechting and orchestrating the whole backend stack was a fun challenge.',
                platform: 'Web',
                tools: ['Vue', 'Typescript', 'Sass', 'Figma', 'Bun', 'Elysia', 'Prisma', 'Mysql', 'KrakenD']
            },

            carouselImages: [
                'https://i.imgur.com/pJ0oLf2.png',
                'https://i.imgur.com/H0ml1zd.png',
                'https://i.imgur.com/csHQCrg.png',
            ],
            resources: [
                {
                    iconName: 'github',
                    title: 'Github',
                    link: 'https://github.com/4xHTeam1/webdock',
                    buttonClass: ProjectResourceButtonClasses.GITHUB
                }
            ]
        },


    ];


    constructor() {
        makeAutoObservable(this);
    }


}
