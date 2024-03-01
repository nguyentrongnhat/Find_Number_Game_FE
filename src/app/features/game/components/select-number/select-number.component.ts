import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select-number',
  templateUrl: './select-number.component.html',
  styleUrl: './select-number.component.scss'
})
export class SelectNumberComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    //this.upDateIndicate();
  }

  @Input('value') number: number = 12;
  @Input() currentNumber: number = 0;
  @Output() onSelected = new EventEmitter<number>();

  public selected: boolean = false;
  public isIndicate: boolean = false;

  public onSelect() {
    if(this.currentNumber + 1 === this.number) {
      this.selected = true;
      this.onSelected.emit(this.number)
    }
  }

  public upDateIndicate() {
    if(this.currentNumber + 1 === this.number) {
      this.isIndicate = true;
    }
  }
}
