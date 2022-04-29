import {IIsCanvas} from "../canvases/IIsCanvas";

export interface IIsAnimation {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    canvas: IIsCanvas;

    animate(): void;
}