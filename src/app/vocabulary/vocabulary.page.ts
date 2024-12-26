// src/app/vocabulary/vocabulary.page.ts
import { Component } from '@angular/core';
import { VocabularyService } from '../services/vocabulary.service';
import { Word } from '../models/word.model';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-vocabulary',
  templateUrl: 'vocabulary.page.html',
  styleUrls: ['vocabulary.page.scss'],
})
export class VocabularyPage {
  words: Word[] = [];

  constructor(private vocabularyService: VocabularyService) {
    this.loadWords();
  }

  loadWords() {
    this.words = this.vocabularyService.getWords();
  }

  markAsLearned(id: number) {
    this.vocabularyService.markAsLearned(id);
    this.loadWords(); // Reload the words to reflect changes
  }
}
