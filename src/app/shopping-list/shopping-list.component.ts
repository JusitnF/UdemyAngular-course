import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private SLService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients= this.SLService.getIngredients();
    this.igChangeSub = this.SLService.ingredientsChanged
      .subscribe(
       (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
       }
      );
  }

  onEditItem(index: number) {
    this.SLService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
