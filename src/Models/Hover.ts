type Coordiantes = {
    x: number
    y: number
}

export default class Hover {
    [x: string]: any;
    constructor(
        text: string,
        startingCoordinates: Coordiantes,
        height: number,
        width: number
    ) {
        this.text = text;
        this.startingCoordinates = startingCoordinates;
        this.height = height;
        this.width = width;
    }

    startingCoordinates!: Coordiantes
    height!: number
    width!: number
    text!: string
}