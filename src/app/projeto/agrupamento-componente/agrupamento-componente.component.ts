import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agrupamento-componente',
  templateUrl: './agrupamento-componente.component.html',
  styleUrls: ['./agrupamento-componente.component.css']
})
export class AgrupamentoComponenteComponent implements OnInit {
  agrupamento: any[] = [];
  agrupamentoCounts: { albumId: number, qt: number }[] = [];
  totalItems: number = 0; // Total de itens
  carrinhoCount: number = 0; // Contador do carrinho
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos?_limit=800')
      .subscribe(data => {
        this.agrupamento = data;
        this.agrupamentoCounts = this.groupAndCountByAlbumId(this.agrupamento);
        this.totalItems = this.agrupamento.length;
      });
  }

 
  groupAndCountByAlbumId(data: any[]): { albumId: number, qt: number }[] {
    const grouped = data.reduce((accumulator, currentValue) => {
      const albumId = currentValue.albumId;
      accumulator[albumId] = (accumulator[albumId] || 0) + 1;
      return accumulator;
    }, {});

    return Object.keys(grouped).map(albumId => ({ albumId: +albumId, qt: grouped[albumId] }));
  }

  adicionarAoCarrinho(albumId: number): void {
    this.carrinhoCount += 1; // Incrementa o contador do carrinho
    // Você pode adicionar lógica adicional para adicionar o item ao carrinho aqui
    
  }

}