import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SignupComponent } from './signup/signup.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { TeachersComponent } from './teachers/teachers.component';

import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [ 
  // { path: 'dashboard/header', component: HeaderComponent },
  // { path: 'dashboard/table', component: TableComponent },
  // { path: 'dashboard/courses', component: CoursesComponent },
  // { path: 'dashboard/teacher', component: TeachersComponent },
  // {path: 'dashboard/table', component: TableComponent},
  {path:'dashboard/footer',component:FooterComponent},
  // {path:'dashboard/contact',component:ContactComponent},
  {path:'dashboard/signup',component:SignupComponent},
  {path:'',component:SignupComponent},
  // {path:'dashboard',component:DashboardComponent},
  {
    path:'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path:'courses', component: CoursesComponent
      },
      {path:'contact',component:ContactComponent},
      {path: 'table', component: TableComponent},
      { path: 'teacher', component: TeachersComponent },

     
    ]
  }
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    FooterComponent,
    SideNavComponent,
    SignupComponent,
    CoursesComponent,
    BlogComponent,
    TeachersComponent,
    ContactComponent,
    DashboardComponent,
    FrontPageComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
