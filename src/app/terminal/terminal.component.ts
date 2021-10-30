import { Component, OnInit } from '@angular/core';

interface SuperHomework {
  reverseValue: string,
  xyz: string
}

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  homework:SuperHomework = {
    reverseValue: "kitty",
    xyz: ""
  }

  constructor() { }

  ngOnInit(): void {
    console.log("terminal start");
  }
}
