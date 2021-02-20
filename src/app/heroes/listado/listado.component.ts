import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman','Iroman','Hulk','Thor'];
  //constructor() { }
  heroeBorrado :string = '';

  //ngOnInit(): void {
    borrarHeroe(){
    // const heroeBorrado = this.heroes.shift();
     //alert(heroeBorrado);

     
       this.heroeBorrado = this.heroes.shift() || '';
     }

  }
  


