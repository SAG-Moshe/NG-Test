import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { CommService } from './sharedServices/comm.service';
import { HTTP_INTERCEPTORS,  HttpClientModule, HttpClient } from '@angular/common/http';
import { FailedRequestInterceptor } from './interceptors/failedRequest.interceptor';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { OfferHeaderComponent } from './components/offer-header/offer-header.component';
import { OfferHeaderService } from './components/offer-header/offer-header.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    SideMenuComponent,
    TopBarComponent,
    OfferHeaderComponent,
    HomePageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [
    CommService,
    OfferHeaderService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: FailedRequestInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: SendFailedConnectivityLogInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
