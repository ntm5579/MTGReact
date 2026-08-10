type Coordiantes = {
    x: number
    y: number
}

export default class Hover {
    [x: string]: any;
    constructor(
        title: string | undefined,
        description: string,
        startingCoordinates: Coordiantes,
        height: number,
        width: number,
        color?: string
    ) {
        this.title = title;
        this.description = description; 
        this.startingCoordinates = startingCoordinates;
        this.height = height;
        this.width = width;
        this.color = color;
    }

    startingCoordinates!: Coordiantes
    height!: number
    width!: number
    title?: string
    description!: string
    color?: string
}