import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  @Input() color: string;
  @Output() reset = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  recargar() {
    location.reload();
  }

  resetear() {
    this.reset.emit(true);
  }

}
