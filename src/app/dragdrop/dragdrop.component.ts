import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-dragdrop",
  templateUrl: "./dragdrop.component.html",
  styleUrls: ["./dragdrop.component.css"],
})
export class DragdropComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  movies = [
    { optionOrder: 2, option: "hello" },
    { optionOrder: 1, option: "hii" },
    { optionOrder: 3, option: "h" },
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(this.movies);
  }
}
