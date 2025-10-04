import { ShapeEditor } from "./ShapeEditor.js";
import { Line } from "../shapes/Line.js";

export class LineEditor extends ShapeEditor {
    createShape(x1, y1, x2, y2) {
        return new Line(x1, y1, x2, y2);
    }
}
