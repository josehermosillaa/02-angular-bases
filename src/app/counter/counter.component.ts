import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent  {
    public counter:number = 10;


    //por defecto esto es publico no suele ponerse, si es un metodo private se coloca
    increaseBy(value:number):void{
    this.counter += value;
    }

    resetCounter(value:number = 10){
    this.counter = value
    }

}