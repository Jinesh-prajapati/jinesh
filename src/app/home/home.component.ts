import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @Input() home: string;
  @Output() selectvalue = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  clickbtn() {
    this.selectvalue.emit("hello");
  }
}
