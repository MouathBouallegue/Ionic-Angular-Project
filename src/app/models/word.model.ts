// src/app/models/word.model.ts

export interface Word {
  id: number;               // Unique identifier for each word
  word: string;             // The word in the target language
  translation: string;      // The translation of the word
  pronunciation?: string;   // Optional pronunciation of the word (can be used for audio or text)
  category: string;         // The category of the word (e.g., Animals, Food, etc.)
  learned: boolean;         // Flag to indicate if the user has learned this word
}
