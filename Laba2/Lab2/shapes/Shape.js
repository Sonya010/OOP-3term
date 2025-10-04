export class Shape {
    constructor() {}

    draw(ctx) {
        throw new Error("draw() must be implemented in subclass");
    }

    preview(ctx) {
        throw new Error("preview() must be implemented in subclass");
    }
}
