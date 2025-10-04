import { ShapeEditor } from "./ShapeEditor.js";
import { Rectangle } from "../shapes/Rectangle.js";

export class RectangleEditor extends ShapeEditor {
    createShape(x1, y1, x2, y2) {
        return new Rectangle(x1, y1, x2, y2);
    }
}
