import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page'; // Ensure this points to your HomePage component

const routes: Routes = [
  {
    path: '',
    component: HomePage // Default route for home page
  },
  // You can add additional routes here for other components if needed in the future
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
