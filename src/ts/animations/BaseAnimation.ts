import {IIsAnimation} from "./IIsAnimation";
import {IIsCanvas} from "../canvases/IIsCanvas";

export abstract class BaseAnimation implements IIsAnimation{
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    canvas: IIsCanvas;

    protected constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
    }

    abstract animate(): void;

    clear(): void{
        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }

    loop(): void{
        requestAnimationFrame(()=>this.animate());
    }
}