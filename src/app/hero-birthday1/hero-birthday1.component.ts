import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hero-birthday1",
  templateUrl: "./hero-birthday1.component.html",
  styleUrls: ["./hero-birthday1.component.css"],
  template: `
    <p>The hero's birthday is {{ birthday | date }}</p>
  `
})
export class HeroBirthday1Component implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  constructor() {}

  ngOnInit() {}
}
