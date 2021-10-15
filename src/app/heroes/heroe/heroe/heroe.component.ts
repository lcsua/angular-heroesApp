import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  constructor(private activatedRoute : ActivatedRoute, private heroeSerice: HeroesService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
    .pipe( switchMap(({id})=>this.heroeSerice.getHeroesbyId(id)))
    .subscribe( heroe => this.heroe = heroe);
  }

}
