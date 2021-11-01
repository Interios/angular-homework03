import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { TerminalItemComponent } from './components/terminal-item/terminal-item.component';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { PositiveDirective } from './directives/positive/positive.directive';
import { EvenDirective } from './directives/even/even.directive';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TerminalItemComponent,
    ReversePipe,
    PositiveDirective,
    EvenDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
