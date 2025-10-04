import { ShapeEditor } from "./ShapeEditor.js";
import { Ellipse } from "../shapes/Ellipse.js";

export class EllipseEditor extends ShapeEditor {
    createShape(x1, y1, x2, y2) {
        const rx = Math.abs(x2 - x1);
        const ry = Math.abs(y2 - y1);
        return new Ellipse(x1, y1, rx, ry);
    }
}
