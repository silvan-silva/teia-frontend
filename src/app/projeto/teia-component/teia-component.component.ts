import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-teia-component',
  templateUrl: './teia-component.component.html',
  styleUrls: ['./teia-component.component.css']
})
export class TeiaComponentComponent implements OnInit {
  teiaComponent: any[] = []; // Variável para armazenar os dados da API
  paginatedTeiaComponent: any[] = []; // Variável para armazenar os dados da API paginados
  currentPage = 1; // Página atual
  itemsPerPage = 5; // Número de itens por página

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData(); // Quando o componente é inicializado, chame a função para buscar os dados da API
  }

  fetchData() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe((data) => {
      this.teiaComponent = data; // Armazena os itens da API na variável teiaComponent
      this.paginateData(); // Chama a função para paginar os dados
    });
  }

  sortData() {
    this.teiaComponent.sort((a, b) => a.albumId - b.albumId);
  }

  paginateData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedTeiaComponent = this.teiaComponent.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateData();
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.teiaComponent.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.paginateData();
    }
  }
}
