// src/app/progress/progress.page.ts
import { Component } from '@angular/core';
import { VocabularyService } from '../services/vocabulary.service';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-progress',
  templateUrl: 'progress.page.html',
  styleUrls: ['progress.page.scss'],
})
export class ProgressPage {
  learnedWordsCount = 0;

  constructor(private vocabularyService: VocabularyService) {
    this.calculateProgress();
  }

  calculateProgress() {
    this.learnedWordsCount = this.vocabularyService.getWords().filter(word => word.learned).length;
  }
}
