import { action, makeAutoObservable, observable } from "mobx";

export class ProjectStore {

    projects = [
        {
            title: 'portfolio',
            category: 'web design',
            link: '/project/0',
            image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
            info: {
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nisl. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nisl.',
                involement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nisl. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nisl.',
                platform: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nisl. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel nisl.',
                tools: ['React', 'Typescript', 'Sass', 'Figma']
            },

            carouselImages: [
                'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
                'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            ]
        },

    ];


    constructor() {
        makeAutoObservable(this);
    }


}
