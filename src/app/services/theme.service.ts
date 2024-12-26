import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = false;

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
  }

  private applyTheme() {
    const className = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.classList.toggle(className, this.isDarkTheme);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'dark';
      this.applyTheme();
    }
  }

  saveTheme() {
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }
}
