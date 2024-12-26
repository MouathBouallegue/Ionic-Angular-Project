// src/app/services/vocabulary.service.ts
import { Injectable } from '@angular/core';
import { Word } from '../models/word.model';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  private words: Word[] = [
    { id: 1, word: 'Dog', translation: 'Chien', category: 'Animals', learned: false },
    { id: 2, word: 'Apple', translation: 'Pomme', category: 'Food', learned: false },
    { id: 3, word: 'Cat', translation: 'Chat', category: 'Animals', learned: false },
    { id: 4, word: 'Orange', translation: 'Orange', category: 'Food', learned: false },
    { id: 5, word: 'Bird', translation: 'Oiseau', category: 'Animals', learned: false },
    { id: 6, word: 'Bread', translation: 'Pain', category: 'Food', learned: false },
    { id: 7, word: 'Car', translation: 'Voiture', category: 'Vehicles', learned: false },
    { id: 8, word: 'Bicycle', translation: 'Vélo', category: 'Vehicles', learned: false },
    { id: 9, word: 'House', translation: 'Maison', category: 'Places', learned: false },
    { id: 10, word: 'School', translation: 'École', category: 'Places', learned: false },
    { id: 11, word: 'Sun', translation: 'Soleil', category: 'Nature', learned: false },
    { id: 12, word: 'Tree', translation: 'Arbre', category: 'Nature', learned: false },
    { id: 13, word: 'Fish', translation: 'Poisson', category: 'Animals', learned: false },
    { id: 14, word: 'Grapes', translation: 'Raisins', category: 'Food', learned: false },
    { id: 15, word: 'Table', translation: 'Table', category: 'Furniture', learned: false },
    { id: 16, word: 'Chair', translation: 'Chaise', category: 'Furniture', learned: false },
    // You can add more words here as needed
  ];

  constructor() { }

  getWords() {
    return this.words;
  }

  markAsLearned(id: number) {
    const word = this.words.find(w => w.id === id);
    if (word) {
      word.learned = true;
    }
  }

  getWordsByCategory(category: string) {
    return this.words.filter(word => word.category === category);
  }
}
