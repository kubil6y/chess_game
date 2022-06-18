import { BasePiece } from "./BasePiece";

export class Pawn extends BasePiece {
  public getImageCoordinates(): {
    imgW: number;
    imgH: number;
    imgOffsetX: number;
    imgOffsetY: number;
  } {
    const imgH = this.name.split(":")[0] === "white" ? 0 : 1;
    return {
      imgW: 5,
      imgH,
      imgOffsetX: 9,
      imgOffsetY: 12,
    };
  }
}
