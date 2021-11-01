import { Component, OnInit } from '@angular/core';

interface SuperHomework {
  reverseValue: string,
  evenValue: string,
  positiveValue: string
}

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  homework:SuperHomework = {
    reverseValue: "kitty",
    evenValue: "",
    positiveValue: ""
  }

  constructor() { }

  ngOnInit(): void {
    console.log("terminal open");
  }
}
