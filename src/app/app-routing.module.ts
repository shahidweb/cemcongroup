import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { ProductsComponent } from './componets/products/products.component';
import { CareerComponent } from './componets/career/career.component';
import { ContactComponent } from './componets/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
