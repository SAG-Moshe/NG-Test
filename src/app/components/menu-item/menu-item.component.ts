import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { IMenuItem } from 'src/app/model/menuItem.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit, OnChanges {

  @Input() menuItem: IMenuItem;
  @Output() notifyMenuItmeClicked: EventEmitter<string> = new EventEmitter<string>();

  showItem = false;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.menuItem) {
      this.showItem = true;
    }
  }


  itemClick(): void {
    if (!this.menuItem.clickable) { return; }
    this.notifyMenuItmeClicked.emit(this.menuItem.name);
  }
}
