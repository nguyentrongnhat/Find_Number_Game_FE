import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-number',
  templateUrl: './table-number.component.html',
  styleUrl: './table-number.component.scss'
})
export class TableNumberComponent implements OnInit {

  public rawNumbers: number[] = [];
  public randomNumber: number[] = [];
  public dataSet: any[] = [];
  public currentNumber: number = 0;

  public startTime: Date;
  public endTime: Date;
  public gameDuration: number = 0;

  public timer: string = '00:00:00'
  public timerInterval: any;

  public isPause: boolean = false;

  ngOnInit(): void {
    this.createNewGame()
  }

  public createNewGame() {
    this.stopTimer();
    this.timer = '00:00:00'
    this.currentNumber = 0
    this.gameDuration = 0
    this.rawNumbers = Array.from({length: 100}, (_, i) => i + 1);
    this.randomNumber = [];
    this.dataSet = [];

    this.startTime = new Date()
    this.createDataForGameTable()
    this.runTimer()
  }

  public pauseGame() {
    this.isPause = true;
    this.stopTimer();
  }

  public resumeGame() {
    this.isPause = false;
    this.runTimer();
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
          //console.log(subArray)
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
      //console.log('RESULT: ', this.dataSet)
      //console.log('length: ', this.dataSet.length)
    }
  }

  public runTimer() {
    this.timerInterval = setInterval(() => {
      this.gameDuration+=1000

      let hh = Math.floor(this.gameDuration/1000/3600); //miliseconds to hours
      let mm = Math.floor((this.gameDuration - hh * 3600 * 1000)/1000/60); //miliseconds to minutes
      let ss = Math.floor((this.gameDuration - hh * 3600 * 1000 - mm * 60 * 1000)/1000); //milliseconds to seconds

      this.timer = `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`
    }, 1000)
  }

  public stopTimer() {
    if(this.timerInterval) {
      clearInterval(this.timerInterval)
    }
  }

  public selectNumber() {
    if(this.currentNumber < 99) {
      this.currentNumber++;
    }
    else {
      this.stopTimer()
      this.endTime = new Date()
    }
  }
}
