import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/sites/home/home.component';
import { ContactComponent } from './components/sites/contact/contact.component';
import { AboutComponent } from './components/sites/about/about.component';
import { CopyRightsDirective } from './directives/copy-rights.directive';
import { GoToTopComponent } from './components/go-to-top/go-to-top.component';
import { LongTextPopupComponent } from './components/long-text-popup/long-text-popup.component';
import { ButtonComponent } from './components/button/button.component';
import { OfferComponent } from './components/sites/offer/offer.component';
import { PawsComponent } from './components/paws/paws.component';
import { MoreComponent } from './components/sites/more/more.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PhoneComponent } from './components/phone/phone.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    LayoutComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CopyRightsDirective,
    GoToTopComponent,
    LongTextPopupComponent,
    ButtonComponent,
    OfferComponent,
    PawsComponent,
    MoreComponent,
    FacebookComponent,
    GalleryComponent,
    PhoneComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
