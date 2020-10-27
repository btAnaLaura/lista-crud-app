import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { AuthGuard } from 'auth.guard';
import { AuthService } from 'auth.service';
import { LoginComponent } from './login/login.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { PainelInvestirComponent } from './painel-investir/painel-investir.component';
import { InvestirComponent } from './investir/investir.component';
import { ModalNotCadastroComponent } from './modal-not-cadastro/modal-not-cadastro.component';
import { SingletonRouterService } from 'src/services/singletonRouter.service';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    HomeLogadaComponent,
    LoginComponent,
    CadastroConcluidoComponent,
    AcessoNegadoComponent,
    PainelInvestirComponent,
    InvestirComponent,
    ModalNotCadastroComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,  
    MatDialogModule,    
    LayoutModule, BrowserAnimationsModule,
    BrowserModule,
    MatCardModule

    ],
  providers: [AuthGuard, AuthService, SingletonRouterService],
  entryComponents:[ModalNotCadastroComponent],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }