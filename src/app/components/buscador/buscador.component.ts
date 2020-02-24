import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  // variable local
  heroes: any[] = [];
  termino: string;

  constructor( private activatedRouter: ActivatedRoute,
               private _heroesServie: HeroesService ) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
      // asignamos una variable local termino para poder
      this.termino = params ['termino' ];
      // Regresa el arreglo de todos los elemento que coinsidan con lo que se busca
      this.heroes = this._heroesServie.buscarHeroe( params['termino'] );
      console.log(this.heroes);
    });
  }
}
