import { Shape } from "./Shape.js";

export class Ellipse extends Shape {
    constructor(cx, cy, rx, ry) {
        super();
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.ellipse(this.cx, this.cy, this.rx, this.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillStyle = "lightgreen"; 
        ctx.fill();
    }

    preview(ctx) {
        ctx.beginPath();
        ctx.ellipse(this.cx, this.cy, this.rx, this.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "blue"; 
        ctx.stroke();
    }
}
