import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' // Redirect to home if the path is empty
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) // Lazy load Home module
  },
  {
    path: 'vocabulary',
    loadChildren: () => import('./vocabulary/vocabulary.module').then(m => m.VocabularyPageModule) // Lazy load Vocabulary module
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizPageModule) // Lazy load Quiz module
  },
  {
    path: 'progress',
    loadChildren: () => import('./progress/progress.module').then(m => m.ProgressPageModule) // Lazy load Progress module
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Preload all lazy-loaded modules
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
