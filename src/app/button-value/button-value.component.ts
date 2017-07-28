import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'utils-button-value',
  template: `<button md-raised-button (click)="clicked()">{{value}}</button>`
})
export class ButtonValueComponent {

  @Input() value = 0;
  @Output() changed = new EventEmitter<Number>();

  constructor() { }

  clicked() {
    this.changed.emit(this.value);
  }

}
