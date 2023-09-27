import { Component } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private service: NotaService) { }

  listaNotas:Nota[]= [];

  ngOnInit(): void {
    this.service.listar().subscribe((listaNotas) => {
      this.listaNotas = listaNotas
    })
  }

  

}
