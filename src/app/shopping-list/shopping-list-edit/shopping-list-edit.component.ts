import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef<HTMLInputElement>;

  @Output() addIngredient = new EventEmitter<Ingredient>();

  onAddIngredient(): void {
    this.addIngredient.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        Number(this.amountInput.nativeElement.value) || 0));
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
