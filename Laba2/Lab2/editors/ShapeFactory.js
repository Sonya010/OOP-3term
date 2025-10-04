import { PointEditor } from "./PointEditor.js";
import { LineEditor } from "./LineEditor.js";
import { RectangleEditor } from "./RectangleEditor.js";
import { EllipseEditor } from "./EllipseEditor.js";

export class ShapeFactory {
    static editors = {
        Point: new PointEditor(),
        Line: new LineEditor(),
        Rectangle: new RectangleEditor(),
        Ellipse: new EllipseEditor()
    };

    static create(type, x1, y1, x2, y2) {
        const editor = this.editors[type];
        if (!editor) throw new Error(`Unknown shape type: ${type}`);
        return editor.createShape(x1, y1, x2, y2);
    }
}
