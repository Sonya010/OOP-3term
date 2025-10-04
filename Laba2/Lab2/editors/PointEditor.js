import { ShapeEditor } from "./ShapeEditor.js";
import { Point } from "../shapes/Point.js";

export class PointEditor extends ShapeEditor {
    createShape(x1, y1) {
        return new Point(x1, y1);
    }
}
