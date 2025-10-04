import { ShapeFactory } from "./editors/ShapeFactory.js";

const canvas = document.getElementById("c1");
const ctx = canvas.getContext("2d");

let pcshape = new Array(114);
let count = 0;
let currentShape = "Point";
let preview = null;
let startPoint = null;

function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < count; i++) {
        pcshape[i].draw(ctx);
    }
    if (preview) {
        preview.preview(ctx);
    }
}

canvas.addEventListener("mousedown", (e) => {
    startPoint = { x: e.offsetX, y: e.offsetY };
});

canvas.addEventListener("mousemove", (e) => {
    if (!startPoint) return;
    preview = ShapeFactory.create(
        currentShape,
        startPoint.x,
        startPoint.y,
        e.offsetX,
        e.offsetY
    );
    redraw();
});

canvas.addEventListener("mouseup", (e) => {
    if (!startPoint) return;
    const shape = ShapeFactory.create(
        currentShape,
        startPoint.x,
        startPoint.y,
        e.offsetX,
        e.offsetY
    );
    pcshape[count++] = shape;
    startPoint = null;
    preview = null;
    redraw();
});

document.querySelectorAll(".menu-object").forEach(item => {
    item.addEventListener("click", (e) => {
        currentShape = e.target.dataset.shape;
        document.querySelectorAll(".menu-object").forEach(m => m.classList.remove("active"));
        e.target.classList.add("active");
    });
});

document.getElementById("clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pcshape = new Array(114);
    count = 0;
    preview = null;
    startPoint = null;
});

document.getElementById("about-btn").addEventListener("click", () => {
  alert(`Graphic Editor - Lab 2 (Variant 14)
Student number (Ж): 14
Number of shapes: 114
Rubber band: solid blue line
Rectangle input: by two opposite corners
Ellipse input: from center to corner
Rectangle: black outline, no fill
Ellipse: black outline, colored fill
Ellipse fill color: light green
Current object indicator: shown in the menu.`);
});


