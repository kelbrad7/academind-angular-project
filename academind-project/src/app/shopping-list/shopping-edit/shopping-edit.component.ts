import { Component,
  ElementRef, OnDestroy, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild ('f') slForm:NgForm;
subscription: Subscription;
editMode = false;
editedItemIndex: number;
editedItem: Ingredient;

  constructor(private slservice: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slservice.startedEditing.subscribe((index:number) =>{this.editMode = true;
      this.editedItemIndex= index;
      this.editedItem = this.slservice.getIngredient(index);
      this.slForm.setValue({
        name:this.editedItem.name,
        amount: this.editedItem.amount
      })
    })}


  onAddItem(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slservice.addIngredient(newIngredient);
    if (this.editMode) {
      this.slservice.updateIngredient(this.editedItemIndex, newIngredient)}
      else {
        this.slservice.addIngredient(newIngredient)
      }
      this.editMode = false;
      form.reset();
    }

    onClear(){
      this.slForm.reset();
        this.editMode = false;
    }

    onDelete(){
      this.slservice.deleteIngredient(this.editedItemIndex)
      this.onClear();
    }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();
  }
}
