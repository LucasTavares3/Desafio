import { BinarioComponent } from './ferramentas/binario/binario.component';
import { SomaComponent } from './ferramentas/soma/soma.component';
import { PrimosComponent } from './ferramentas/primos/primos.component';
import { CrescenteComponent } from './ferramentas/crescente/crescente.component';
import { FatorialComponent } from './ferramentas/fatorial/fatorial.component';
import { CacaletrasComponent } from './ferramentas/cacaletras/cacaletras.component';
import { DivisorComponent } from './ferramentas/divisor/divisor.component';
import { CalculadoraComponent } from './ferramentas/calculadora/calculadora.component';
import { TabuadaComponent } from './ferramentas/tabuada/tabuada.component';
import { EnergiaComponent } from './ferramentas/energia/energia.component';
import { LancamentoComponent } from './ferramentas/lancamento/lancamento.component';
import { TrocaComponent } from './ferramentas/troca/troca.component';
import { CarrinhoComponent } from './ferramentas/carrinho/carrinho.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'about', component:AboutComponent},
  {path:'menu/carrinho', component:CarrinhoComponent},
  {path:'menu/troca', component:TrocaComponent},
  {path:'menu/lancamento', component:LancamentoComponent},
  {path:'menu/energia', component:EnergiaComponent},
  {path:'menu/tabuada', component:TabuadaComponent},
  {path:'menu/calculadora', component:CalculadoraComponent},
  {path:'menu/divisor', component:DivisorComponent},
  {path:'menu/cacaletras', component:CacaletrasComponent},
  {path:'menu/fatorial', component:FatorialComponent},
  {path:'menu/crescente', component:CrescenteComponent},
  {path:'menu/primos', component:PrimosComponent},
  {path:'menu/soma', component:SomaComponent},
  {path:'menu/binario', component:BinarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
