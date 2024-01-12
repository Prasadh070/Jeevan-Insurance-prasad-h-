import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent,children :[

    {path:'', redirectTo:'about',pathMatch:'full'}
    // ,
    // {path:'about',component:AboutUsComponent},
    // {path:'admin',component:AdminComponent},
    // {path:'contact',component:ContactUsComponent},
    // {path:'register',component:RegisterComponent},
  ]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
