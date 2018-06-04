import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
//import {AuthModule} from "./auth/auth.module";
export const routes: Routes = [
    {path : '' , component: HomePageComponent},
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];