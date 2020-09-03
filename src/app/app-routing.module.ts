import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipeBookComponent,
    // children: [
    //   {path: ''}
    // ]
  },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
