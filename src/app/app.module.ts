import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TelaComponent } from './tela/tela.component';
import { BotaoComponent } from './botao/botao.component';
import { CorpoComponent } from './corpo/corpo.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaComponent,
    BotaoComponent,
    CorpoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
