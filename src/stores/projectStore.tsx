import { action, makeAutoObservable, observable } from "mobx";

export class ProjectStore {

    projects = [
        {
            title: 'Portfolio1',
            category: 'Web Design',
            link: '/project/1',
        },
        {
            title: 'Portfolio',
            category: 'Web Design',
            link: '/project/1',
        },
        {
            title: 'Portfolio',
            category: 'Web Design',
            link: '/project/1',
        },
        {
            title: 'Portfolio',
            category: 'Web Design',
            link: '/project/1',
        },
        {
            title: 'Portfolio',
            category: 'Web Design',
            link: '/project/1',
        },
        {
            title: 'Portfolio',
            category: 'Web Design',
            link: '/project/1',
        },
    ];


    constructor() {
        makeAutoObservable(this);
    }


}
