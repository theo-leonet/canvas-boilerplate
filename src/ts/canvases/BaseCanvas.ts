import {IIsCanvas} from "./IIsCanvas";

export class BaseCanvas implements IIsCanvas{
        canvasElement: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;

        constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
            this.canvasElement = canvasElement;
            this.ctx = ctx;
        }

        protected fullWindowResize(): void{
            this.canvasElement.width = innerWidth;
            this.canvasElement.height = innerHeight;
        }

        protected resizeEventListener(): void{
            window.addEventListener('resize', ()=>this.fullWindowResize());
        }
    }