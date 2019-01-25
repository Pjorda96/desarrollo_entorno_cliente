import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }


  @Input() dimensiones: number[];
  @Input() color: string;
  @Input() reset: boolean;

  columnas() {
    let columnas=[];
    for (let j = 0; j < this.dimensiones[0]; j++) {
        columnas.push("columnas");
    }
    return columnas;
  }

  filas() {
    let filas = [];
    for (let j = 0; j < this.dimensiones[1]; j++) {
      filas.push("fila");
    }
    return filas;
  }

  changeBackground(event) {
    event.target.style.backgroundColor = this.color;
  }

  ngOnInit() { }


}
