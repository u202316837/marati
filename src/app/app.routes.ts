import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent as AuthLoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path:"", redirectTo:"home", pathMatch:"full" },
    { path:"home", component: HomeComponent },
    { path:"aboutus", component: AboutusComponent },
    { path:"shop", component: ShopComponent },
    { path:"contactus", component: ContactusComponent },
    { path:"category/:id", component: CategoryComponent },
    { path:"product", component: ProductComponent },
    { path: "auth/login", component: AuthLoginComponent }
];
