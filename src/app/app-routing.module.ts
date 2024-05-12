import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PortfolioComponents/home/home.component';
import { ProjectsComponent } from './PortfolioComponents/projects/projects.component';
import { AboutComponent } from './PortfolioComponents/about/about.component';
import { ContactComponent } from './PortfolioComponents/contact/contact.component';
import { ProjectDetailComponent } from './PortfolioComponents/project-detail/project-detail.component';
import { HeaderComponent } from './PortfolioComponents/header/header.component';

const routes: Routes = [{ path: '', component: HomeComponent  },
//const routes: Routes = [{ path: '', component: HeaderComponent  },
{ path: 'projects', component: ProjectsComponent },
{path:'project-detail', component:ProjectDetailComponent},
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'header', component: HeaderComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
