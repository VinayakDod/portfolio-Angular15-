import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './PortfolioComponents/header/header.component';
import { FooterComponent } from './PortfolioComponents/footer/footer.component';
import { HomeComponent } from './PortfolioComponents/home/home.component';
import { ProjectsComponent } from './PortfolioComponents/projects/projects.component';
import { ProjectDetailComponent } from './PortfolioComponents/project-detail/project-detail.component';
import { AboutComponent } from './PortfolioComponents/about/about.component';
import { ContactComponent } from './PortfolioComponents/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
