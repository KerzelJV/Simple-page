import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../service/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor( private _heroesSevice: HeroesService ) {
    console.log('Constructor');
   }
  ngOnInit() {
    this.heroes = this._heroesSevice.getHeroes();
    console.log(this.heroes);
  }

}
