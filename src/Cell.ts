import { BaseComponent } from "./BaseComponent";
import { Canvas } from "./Canvas";
import { BasePiece } from "./pieces/BasePiece";

export type TCellColor = "white" | "#7c7219cc";

export class Cell extends BaseComponent {
  public currentPiece: BasePiece | null = null;
  constructor(
    public name: string,
    public canvas: Canvas,
    public x: number,
    public y: number,
    public size: number,
    public color: string
  ) {
    super(name, canvas, x, y, size, color);
  }

  get center(): { x: number; y: number } {
    const x = this.x + this.size / 2;
    const y = this.y + this.size / 2;
    return { x, y };
  }

  public setCurrentPiece(piece: BasePiece) {
    this.currentPiece = piece;
  }
}
