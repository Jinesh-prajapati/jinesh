import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { DragdropComponent } from "./dragdrop/dragdrop.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Login1Component } from './login1/login1.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, DragdropComponent, LoginComponent, RegisterComponent, Login1Component],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
