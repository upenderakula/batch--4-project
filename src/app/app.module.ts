import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Registationcomponent } from './Registation/Registation.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChieldComponent } from './chield/chield.component';
import { ChieldOutputComponent } from './chield-output/chield-output.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServayFormComponent } from './servay-form/servay-form.component';
import { ServayFormReactiveComponent } from './servay-form-reactive/servay-form-reactive.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { HttpClientModule} from '@angular/common/http'
import { apiservice } from './api-data/api.sevice';
import { commonservice } from './common.service';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TodosComponent } from './todos/todos.component';
import { todoservice } from './todo.service';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


let routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'registaion',component:Registationcomponent},
  {path:'courses',component:CoursesComponent},
  {path:'input-output',component:ParentComponent},
  {path:'contact form',component:ContactFormComponent},
  {path:'servay-form T.D',component:ServayFormComponent},
  {path:'servay-form reactive',component:ServayFormReactiveComponent},
  {path:'login form',component:LoginFormComponent},
  {path:'api-data/:id',component:PostDetailComponent},
  {path:'api-data',component:ApiDataComponent},
  {path:'todos/:id',component:TodoDetailComponent},
  {path:'todos',component:TodosComponent},
  {path:'**',component:NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    Registationcomponent,
    LoginComponent,
    CoursesComponent,
    HomeComponent,
    ParentComponent,
    ChieldComponent,
    ChieldOutputComponent,
    ContactFormComponent,
    ServayFormComponent,
    ServayFormReactiveComponent,
    LoginFormComponent,
    ApiDataComponent,
    NotFoundComponent,
    PostDetailComponent,
    TodosComponent,
    TodoDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-right'})
  ],
  providers: [apiservice ,commonservice,todoservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
