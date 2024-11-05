import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AcercaComponent},
    {path:'signin',component:LoginComponent},
    {path:'blog',component:BlogComponent},
    {path:'contact',component:ContactComponent},
    {path:'menu',component:MenuComponent},
    {path:'service',component:ServicesComponent},
];
