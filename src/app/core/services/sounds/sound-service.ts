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
    this.audio.src = '../../../../assets/sound-effect/pick-92276-0.5-0.7.mp3';
    this.audio.play();
  }
}
