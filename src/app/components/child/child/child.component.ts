import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() age!: number;
  @Output() counterVal = new EventEmitter();
  counter = 1;

  changeCounter(currentNum: number) {
    this.counter = currentNum;
    this.counterVal.emit(this.counter);
  }
}
