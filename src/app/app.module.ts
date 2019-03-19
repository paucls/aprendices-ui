import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LinkyModule } from 'ngx-linky';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { metaReducers, reducers } from './reducers';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './dashboard/post-card/post.component';
import { DashboardEffects } from './dashboard/dashboard.effects';
import { reducer } from './dashboard/dashboard.reducer';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    HeaderComponent,
    PostComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreModule.forFeature('dashboard', reducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      DashboardEffects
    ]),
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    ReactiveFormsModule,
    LayoutModule,
    LinkyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
