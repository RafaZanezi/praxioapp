import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth/auth.guard.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
