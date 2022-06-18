import { BasePiece } from "./BasePiece";

export abstract class King extends BasePiece {
  public abstract getImageCoordinates(): {
    imgW: number;
    imgH: number;
    imgOffsetX: number;
    imgOffsetY: number;
  };
}
