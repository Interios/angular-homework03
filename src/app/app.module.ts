import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { TerminalItemComponent } from './components/terminal-item/terminal-item.component';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { PositiveDirective } from './directives/positive/positive.directive';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    ReversePipe,
    PositiveDirective,
    TerminalItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
