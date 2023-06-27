import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';                                                         
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { EducationComponent } from './components/education/education.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { OtherComponent } from './components/other/other.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'education', component: EducationComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'other', component: OtherComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
