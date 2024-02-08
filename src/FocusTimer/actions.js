import state from "./state.js";
import { countdown, updateDisplay } from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');
  countdown();
  sounds.buttonPress.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  updateDisplay();
  sounds.buttonPress.play();
}

export function set() {
  el.minutes.setAttribute('contenteditable', true);
  el.minutes.focus();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('musicon');

  if (state.isMute) {
    sounds.bgAudio.play();
    return;
  }

  sounds.bgAudio.pause();
}