import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-number',
  templateUrl: './table-number.component.html',
  styleUrl: './table-number.component.scss'
})
export class TableNumberComponent implements OnInit {

  public rawNumbers: number[] = Array.from({length: 100}, (_, i) => i + 1);
  public randomNumber: number[] = [];
  public dataSet: any[] = [];
  public currentNumber: number = 0;

  ngOnInit(): void {
    console.log(Array(10))
    this.createDataForGameTable()
  }

  public createDataForGameTable() {
    if(this.rawNumbers.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.rawNumbers.length)
      this.randomNumber.push(this.rawNumbers[randomIndex])
      this.rawNumbers.splice(randomIndex, 1)
      this.createDataForGameTable()
    }
    else {
      let subArray: any[] = [];
      this.randomNumber.forEach((number, index) => {

        if(subArray.length === 10) {
          console.log(subArray)
          this.dataSet.push(subArray)
          subArray = []
        }

        let cellData = {
          number,
          x: Math.floor(Math.random() * 30),
          y: Math.floor(Math.random() * 40),
          reg: Math.floor(Math.random() * 350)
        }
        subArray.push(cellData)

        if(index === this.randomNumber.length -1) {
          this.dataSet.push(subArray)
        }
      })
      console.log('RESULT: ', this.dataSet)
      console.log('length: ', this.dataSet.length)
    }
  }

  public selectNumber() {
    if(this.currentNumber < 100) {
      this.currentNumber++;
    }
  }
}
