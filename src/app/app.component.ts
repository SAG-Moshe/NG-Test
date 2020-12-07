import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly defaultLang = 'en';

  public title = 'X2';
  public sideMenuOpen = false;

  private useLang = 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.defaultLang);
    this.translateService.use(this.useLang);
  }

  sideMenuClick(openStatus: boolean): void {
    this.sideMenuOpen = openStatus;
  }
}
