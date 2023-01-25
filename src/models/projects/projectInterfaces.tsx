export enum ProjectResourceButtonClasses {
    FIGMA = 'Button_Figma',
    GITHUB = 'Button_Github',
    WEBSITE = 'Button_Website',
}

export interface projectDTO {
    title: string,
    category: string,
    image: string,
    link: string,
    info: {
        about: string,
        involement: string,
        platform: string,
        tools: string[],
    }
    carouselImages: string[]
    resources?: projectResource[]

}

export interface projectResource {
    iconName: string,
    title: string,
    link: string,
    buttonClass: ProjectResourceButtonClasses,
}