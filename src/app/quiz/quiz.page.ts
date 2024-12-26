import { Component } from '@angular/core';
import { VocabularyService } from '../services/vocabulary.service';
import { Word } from '../models/word.model';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class QuizPage {
  words: Word[] = [];
  currentWord: Word | null = null;
  options: string[] = [];
  score = 0;
  totalQuestions = 5;
  quizCompleted = false;

  constructor(private vocabularyService: VocabularyService) {
    this.loadWords();
    this.startQuiz();
  }

  loadWords() {
    this.words = this.vocabularyService.getWords();
    if (this.words.length === 0) {
      console.warn("No words available for the quiz.");
      this.quizCompleted = true; // Set quiz to completed if no words are available
    }
  }

  startQuiz() {
    this.score = 0;
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.words.length === 0 || this.score >= this.totalQuestions) {
      this.quizCompleted = true;
      return;
    }

    // Pick a random word for the question
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[randomIndex];

    // Generate random options (including the correct answer)
    this.options = this.generateOptions(this.currentWord);
  }

  generateOptions(correctWord: Word): string[] {
    const options = [correctWord.translation];
    while (options.length < 4) {
      const randomWord = this.words[Math.floor(Math.random() * this.words.length)].translation;
      if (!options.includes(randomWord)) {
        options.push(randomWord);
      }
    }
    return this.shuffleArray(options);
  }

  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  checkAnswer(selectedOption: string) {
    if (selectedOption === this.currentWord?.translation) {
      this.score++;
    }
    this.nextQuestion();
  }
}
