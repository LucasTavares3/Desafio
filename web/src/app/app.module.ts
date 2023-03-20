import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CarrinhoComponent } from './ferramentas/carrinho/carrinho.component';
import { TrocaComponent } from './ferramentas/troca/troca.component';
import { LancamentoComponent } from './ferramentas/lancamento/lancamento.component';
import { EnergiaComponent } from './ferramentas/energia/energia.component';
import { TabuadaComponent } from './ferramentas/tabuada/tabuada.component';
import { CalculadoraComponent } from './ferramentas/calculadora/calculadora.component';
import { DivisorComponent } from './ferramentas/divisor/divisor.component';
import { CacaletrasComponent } from './ferramentas/cacaletras/cacaletras.component';
import { FatorialComponent } from './ferramentas/fatorial/fatorial.component';
import { CrescenteComponent } from './ferramentas/crescente/crescente.component';
import { PrimosComponent } from './ferramentas/primos/primos.component';
import { SomaComponent } from './ferramentas/soma/soma.component';
import { BinarioComponent } from './ferramentas/binario/binario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    CarrinhoComponent,
    TrocaComponent,
    LancamentoComponent,
    EnergiaComponent,
    TabuadaComponent,
    CalculadoraComponent,
    DivisorComponent,
    CacaletrasComponent,
    FatorialComponent,
    CrescenteComponent,
    PrimosComponent,
    SomaComponent,
    BinarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
