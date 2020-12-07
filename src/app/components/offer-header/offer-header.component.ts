import { Component, OnInit, OnDestroy } from '@angular/core';
import { IOfferHeader } from 'src/app/model/offerHeader.interface';
import { OfferHeaderService } from './offer-header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-header',
  templateUrl: './offer-header.component.html',
  styleUrls: ['./offer-header.component.scss']
})
export class OfferHeaderComponent implements OnInit, OnDestroy {

  public data: IOfferHeader = {
    id: '103164',
    name: 'Test offer $',
    description: 'Testing the UI with data'
  }

  public version = 'none';

  private subscriptions = new Subscription();

  constructor(private offerHeaderService: OfferHeaderService) { }

  ngOnInit(): void {
   this.subscriptions.add(this.offerHeaderService.getVersion().subscribe((result) => {
      this.version = result;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
