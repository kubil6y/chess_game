import { Canvas } from "../Canvas";

export class ResizeEvents {
  public _canvas: Canvas;
  constructor(canvas: Canvas) {
    this._canvas = canvas;

    window.addEventListener("resize", () => {
      this._canvas.c.width = window.innerWidth;
      this._canvas.c.height = window.innerHeight;
      console.log("resize fired");
    });
  }
}
