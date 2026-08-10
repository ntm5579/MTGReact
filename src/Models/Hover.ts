type Coordiantes = {
    x: number
    y: number
}

export default class Hover {
    [x: string]: any;
    constructor(
        title: string,
        description: string,
        startingCoordinates: Coordiantes,
        height: number,
        width: number
    ) {
        this.title = title;
        this.description = description; 
        this.startingCoordinates = startingCoordinates;
        this.height = height;
        this.width = width;
    }

    startingCoordinates!: Coordiantes
    height!: number
    width!: number
    title!: string
    description!: string
}