import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-item',
  templateUrl: './terminal-item.component.html',
  styleUrls: ['./terminal-item.component.css']
})
export class TerminalItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("terminal task start");
  }

}