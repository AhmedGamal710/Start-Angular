import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' ,         redirectTo: '/home',pathMatch: 'full'},
  {path:'home' , component:HomeComponent},
  {path:'portfolio' , component:PortfolioComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
