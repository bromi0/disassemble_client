import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import {ButtonValueComponent} from '../button-value/button-value.component';

@Component({
  selector: 'utils-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent {

  @Input() value = 0;
  @Input() steps: number[];
  @Output() changeValue = new EventEmitter<number>();

  constructor() { }

  onValueChange(delta: number) {
    this.value += delta;
    this.changeValue.emit(Number(this.value));
  }

}
