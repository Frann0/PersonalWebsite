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
            image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
            info: {
                about: 'This is the project page for this very website. As a new found programmer, it\'s important to have a place for all your previous work to be displayed. This is where a portfolio website comes in handy. Not only can you display your work, so potential employers can look at it. But it also gives opportunity to explain who you are, how you work, and what you\'re good at. So with that in mind, iI had to design and construct the best possible portfolio for myself within a reasonable timeframe, so i can begin searching for job posibilities. I hope you enjoy it!',
                involement: 'As said, this is my own personal portfolio, so my involvement in this project, is everything. I\'ve designed and programmed everything on my own. It is written in React with typescript, Sass for the styling and figma for the initial prototype design idea. Everything can be found in the links below.',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma']
            },

            carouselImages: [
                'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
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
            link: '/project/3',
            image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
            info: {
                about: 'This is the project page for this very website. As a new found programmer, it\'s important to have a place for all your previous work to be displayed. This is where a portfolio website comes in handy. Not only can you display your work, so potential employers can look at it. But it also gives opportunity to explain who you are, how you work, and what you\'re good at. So with that in mind, iI had to design and construct the best possible portfolio for myself within a reasonable timeframe, so i can begin searching for job posibilities. I hope you enjoy it!',
                involement: 'As said, this is my own personal portfolio, so my involvement in this project, is everything. I\'ve designed and programmed everything on my own. It is written in React with typescript, Sass for the styling and figma for the initial prototype design idea. Everything can be found in the links below.',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma',]
            },

            carouselImages: [
                'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
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
                }
            ]
        },
        {
            title: 'Riv4lz',
            category: 'Web Application',
            link: '/project/2',
            image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
            info: {
                about: 'This is the project page for this very website. As a new found programmer, it\'s important to have a place for all your previous work to be displayed. This is where a portfolio website comes in handy. Not only can you display your work, so potential employers can look at it. But it also gives opportunity to explain who you are, how you work, and what you\'re good at. So with that in mind, iI had to design and construct the best possible portfolio for myself within a reasonable timeframe, so i can begin searching for job posibilities. I hope you enjoy it!',
                involement: 'As said, this is my own personal portfolio, so my involvement in this project, is everything. I\'ve designed and programmed everything on my own. It is written in React with typescript, Sass for the styling and figma for the initial prototype design idea. Everything can be found in the links below.',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma',]
            },

            carouselImages: [
                'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
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
            title: 'Loopie Game',
            category: 'Web Application',
            link: '/project/1',
            image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
            info: {
                about: 'This is the project page for this very website. As a new found programmer, it\'s important to have a place for all your previous work to be displayed. This is where a portfolio website comes in handy. Not only can you display your work, so potential employers can look at it. But it also gives opportunity to explain who you are, how you work, and what you\'re good at. So with that in mind, iI had to design and construct the best possible portfolio for myself within a reasonable timeframe, so i can begin searching for job posibilities. I hope you enjoy it!',
                involement: 'As said, this is my own personal portfolio, so my involvement in this project, is everything. I\'ve designed and programmed everything on my own. It is written in React with typescript, Sass for the styling and figma for the initial prototype design idea. Everything can be found in the links below.',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma', 'Dotnet', 'Mysql']
            },

            carouselImages: [
                'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
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
            title: 'Apollyon',
            category: 'Website',
            link: '/project/4',
            image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
            info: {
                about: 'This is the project page for this very website. As a new found programmer, it\'s important to have a place for all your previous work to be displayed. This is where a portfolio website comes in handy. Not only can you display your work, so potential employers can look at it. But it also gives opportunity to explain who you are, how you work, and what you\'re good at. So with that in mind, iI had to design and construct the best possible portfolio for myself within a reasonable timeframe, so i can begin searching for job posibilities. I hope you enjoy it!',
                involement: 'As said, this is my own personal portfolio, so my involvement in this project, is everything. I\'ve designed and programmed everything on my own. It is written in React with typescript, Sass for the styling and figma for the initial prototype design idea. Everything can be found in the links below.',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma',]
            },

            carouselImages: [
                'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
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
                    link: 'https://theapollyon.dk',
                    buttonClass: ProjectResourceButtonClasses.WEBSITE
                }
            ]
        },
        {
            title: 'Weblager',
            category: 'Web application',
            link: '/project/5',
            image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
            info: {
                about: 'This is the project page for this very website. As a new found programmer, it\'s important to have a place for all your previous work to be displayed. This is where a portfolio website comes in handy. Not only can you display your work, so potential employers can look at it. But it also gives opportunity to explain who you are, how you work, and what you\'re good at. So with that in mind, iI had to design and construct the best possible portfolio for myself within a reasonable timeframe, so i can begin searching for job posibilities. I hope you enjoy it!',
                involement: 'As said, this is my own personal portfolio, so my involvement in this project, is everything. I\'ve designed and programmed everything on my own. It is written in React with typescript, Sass for the styling and figma for the initial prototype design idea. Everything can be found in the links below.',
                platform: 'Web',
                tools: ['React', 'Typescript', 'Sass', 'Figma',]
            },

            carouselImages: [
                'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
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
                    link: 'https://ny.weblager.dk',
                    buttonClass: ProjectResourceButtonClasses.WEBSITE
                }
            ]
        },


    ];


    constructor() {
        makeAutoObservable(this);
    }


}
