import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe("a test recipe", "this is a test","https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg"),
  new Recipe("another recipe", "this is another test","https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
