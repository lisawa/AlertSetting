import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'InkButton',
    template: `
        <div class="BtnBody" (click)="AreaOnClick($event)"
        [ngStyle]="{ 
            'background-color': BGColor, 
            'color': Color 
        }">
            {{Text}}
            <div class="BtnEffect"
                [ngStyle]="{ '-webkit-clip-path': 'circle(' + pR +'% at ' + pX + 'px ' +  pY + 'px)'}">
            </div>
        </div>
    `,
    styles:[
        `.BtnBody{
            width: 100px;
            height: 45px;
            line-height: 45px;
            overflow:hidden;
            text-align:center;
            position:relative;
            border-radius:10px;
            -webkit-box-shadow:0 0 4px 0px #aaaaaa;
            transition:all 0.5s;
            display:inline-block;
            }

            .BtnBody:hover{
            -webkit-box-shadow:0 5px 5px 3px #aaaaaa;
            }

            .BtnEffect{
                position:absolute; 
                background-color:#aaaaaa; 
                width:100px;
                height:50px;
                top:0px; 
                Opacity:0.3;
        }`],
})

export class InkButton{
    @Input() Text: string;
    @Input() BGColor: string;
    @Input() Color: string;
    @Input() position: string;
    @Input() pX: number;
    @Input() pY: number;
    public pR: number; 
    @Output() OnClick = new EventEmitter();
    
    AreaOnClick(event){
        this.pX = event.offsetX;
        this.pY = event.offsetY;
        this.circleEffect();
        this.OnClick.next('');
    }

    circleEffect(){
        if (this.pR < 30) {
            this.pR++;
            setTimeout(() => {this.circleEffect() }, 5);
        }
        else{
            this.pR = 0;
        }
    }
    
    constructor(){
        this.BGColor = 'gray';
        this.Color = 'white';
        this.pX = 0;
        this.pY = 0;
        this.pR = 0;
    }
}