import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
    constructor(x1, y1, x2, y2) {
        super();
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    draw(ctx) {
        const w = this.x2 - this.x1;
        const h = this.y2 - this.y1;
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x1, this.y1, w, h);
    }

    preview(ctx) {
        const w = this.x2 - this.x1;
        const h = this.y2 - this.y1;
        ctx.strokeStyle = "blue"; 
        ctx.strokeRect(this.x1, this.y1, w, h);
    }
}
