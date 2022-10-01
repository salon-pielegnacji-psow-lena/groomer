import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/sites/home/home.component';
import { AboutComponent } from './components/sites/about/about.component';
import { ContactComponent } from './components/sites/contact/contact.component';
import { OfferComponent } from './components/sites/offer/offer.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ButtonComponent } from './components/tools/button/button.component';
import { ExternalLinkComponent } from './components/tools/external-link/external-link.component';
import { LogoComponent } from './components/tools/logo/logo.component';
import { PopupComponent } from './components/tools/popup/popup.component';
import { GalleryComponent } from './components/tools/gallery/gallery.component';
import { MessageComponent } from './components/tools/message/message.component';
import { LoaderComponent } from './components/tools/loader/loader.component';
import { LanguageService } from './services/language.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoToTopComponent } from './components/tools/go-to-top/go-to-top.component';
import { RouterComponent } from './components/router/router.component';
import { MoreComponent } from './components/sites/more/more.component';
import { BrandComponent } from './components/tools/brand/brand.component';
import { SetLanguageComponent } from './components/tools/set-language/set-language.component';
import { PhoneComponent } from './components/tools/phone/phone.component';
import { TableComponent } from './components/tools/table/table.component';
import { CopyTextDirective } from './directives/copy-text.directive';
import { TranslateDirective } from './directives/translate.directive';
import { PawsComponent } from './components/tools/paws/paws.component';
import { FacebookComponent } from './components/tools/facebook/facebook.component';
import { GallerySiteComponent } from './components/sites/gallery-site/gallery-site.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OfferComponent,
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ExternalLinkComponent,
    LogoComponent,
    PopupComponent,
    GalleryComponent,
    MessageComponent,
    LoaderComponent,
    GoToTopComponent,
    RouterComponent,
    MoreComponent,
    BrandComponent,
    SetLanguageComponent,
    PhoneComponent,
    TableComponent,
    CopyTextDirective,
    TranslateDirective,
    PawsComponent,
    FacebookComponent,
    GallerySiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
