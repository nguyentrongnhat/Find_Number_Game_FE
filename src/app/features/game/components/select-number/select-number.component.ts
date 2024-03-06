import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SoundService } from '../../../../core/services/sounds/sound-service';

@Component({
  selector: 'app-select-number',
  templateUrl: './select-number.component.html',
  styleUrl: './select-number.component.scss'
})
export class SelectNumberComponent implements OnChanges {

  constructor(
    public soundService: SoundService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    //this.upDateIndicate();
    this.updateForSelectedNumber();//For resume game
  }

  @Input('value') number: number = 12;
  @Input() currentNumber: number = 0;
  @Output() onSelected = new EventEmitter<number>();

  public selected: boolean = false;
  public isIndicate: boolean = false;

  public onSelect() {
    if(this.currentNumber + 1 === this.number) {
      //this.soundService.selectedEffect();
      this.selected = true;
      this.onSelected.emit(this.number)
    }
  }

  public updateForSelectedNumber() {
    if(this.number <= this.currentNumber) {
      this.selected = true;
    }
  }

  public upDateIndicate() {
    if(this.currentNumber + 1 === this.number) {
      this.isIndicate = true;
    }
  }
}
