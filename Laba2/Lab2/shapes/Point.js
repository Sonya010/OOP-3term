import { Shape } from "./Shape.js";

export class Point extends Shape {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
    }

    preview(ctx) {
        ctx.strokeStyle = "blue"; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.stroke();
    }
}
