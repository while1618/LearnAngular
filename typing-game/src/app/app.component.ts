import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  generatedText = lorem.sentence();
  userInput = '';

  onInputChange(value: string) {
    this.userInput = value;
  }

  pickLetterColor(generatedLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return generatedLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
