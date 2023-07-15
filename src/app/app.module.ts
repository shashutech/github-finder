import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components import
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

// forms and http module
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// browser animation and toastr module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReposComponent } from './components/repos/repos.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SingleUserCardComponent } from './components/profile-card/single-user-card/single-user-card.component';
import { MultiUserCardComponent } from './components/profile-card/multi-user-card/multi-user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    ProfileCardComponent,
    SingleUserCardComponent,
    MultiUserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
