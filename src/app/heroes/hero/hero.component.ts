import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
//simple clase con un decorador
export class HeroComponent {

  public name: string ='ironman';
  public age: number = 45;
 //getter y setter
//se ven igual que las propiedades
  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  //un metodo que junte el nombre y la age

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'Spiderman'
  }

  changeAge():void{
    this.age = 25
  }

}
