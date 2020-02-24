import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../service/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: Heroe;

  constructor( private activateRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _heroesService: HeroesService
               ) {
    this.activateRoute.params.subscribe(params => {
      this.heroe =  this._heroesService.getHeroe( params[ 'id' ]);
      console.log(this.heroe);
    });
   }

}
