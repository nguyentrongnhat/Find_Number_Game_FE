import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  public selectedEffect() {
    this.audio.src = '../../../../assets/sound-effect/select-number.wav';
    this.audio.play();
  }
}
