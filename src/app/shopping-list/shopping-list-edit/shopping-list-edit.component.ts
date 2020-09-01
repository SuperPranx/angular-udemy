import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddIngredient(): void {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInput.nativeElement.value,
        Number(this.amountInput.nativeElement.value) || 0));
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
