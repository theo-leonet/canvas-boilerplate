import {IHasCanvas} from "../IHasCanvas";
import {IIsDrawable} from "./IIsDrawable";

export abstract class BaseImage implements IHasCanvas, IIsDrawable {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    private image: HTMLImageElement;

    abstract draw(): void;

    createAndLoad(src: string){
        this.image = new Image();
        this.image.src = src;
        this.image.addEventListener('load', ()=>this.draw());
    }
}
