import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBaseComponent } from './app-base/app-base.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { IndicacaoListComponent } from './indicacao-list/indicacao-list.component';
import { ModalIndicacaoComponent } from './modal-indicacao/modal-indicacao.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppBaseComponent,
    TopBarComponent,
    IndicacaoListComponent,
    ModalIndicacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbModalModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
