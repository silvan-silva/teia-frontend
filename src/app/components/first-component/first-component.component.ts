import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Silvan';
  idade= 20;
  job = 'Programador'
  hobbie = ['estudar', 'correr', 'ver filmes']
  car = {
    carro: 'gol',
    cor: 'branco'
  }
  
  constructor(){}

  ngOnInit(): void {
    
  }
}
