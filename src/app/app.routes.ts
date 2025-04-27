import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

export const routes: Routes = [
    { path:"home", component: HomeComponent },
    { path:"aboutus", component: AboutusComponent },
    { path:"shop", component: ShopComponent },
    { path:"contactus", component: ContactusComponent }
];
