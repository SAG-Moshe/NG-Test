import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMenuItem } from 'src/app/model/menuItem.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output() notifyMenuOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  public menuItmes: IMenuItem[];
  public showMenu = false;
  public menuOpened = false;

  constructor() { }

  ngOnInit(): void {
    this.setMocData();
    this.showMenu = true;
  }

  onMenuItmeClicked(selectedItemName): void {
    console.log(`Menu itme clicked - ${selectedItemName}`);
    switch (selectedItemName) {
      case 'itemOne':
        this.menuOpened = !this.menuOpened;
        this.notifyMenuOpen.emit(this.menuOpened);
        break;
    }

    this.menuItmes.forEach((item: IMenuItem) => {
      if (selectedItemName !== 'itemOne') {
        item.selected = (item.name === selectedItemName);
      }
      
      item.showLabel = this.menuOpened;
    });
    
  }

  // TODO remove this when release data is avilable
  private setMocData(): void {

    const labelDirection = 'left';

    this.menuItmes = [
      {
        icon: 'fa fa-align-left',
        label: '',
        name: 'itemOne',
        labelDirection: labelDirection,
        showLabel: false,
        translateLabel: false,
        clickable: true,
        selected: false,
        backgroundColor: '#4392F1',
        color: '#ffffff'
      },
      {
        icon: 'fa fa-home',
        label: 'Home',
        name: 'home',
        labelDirection: labelDirection,
        showLabel: false,
        translateLabel: false,
        clickable: true,
        selected: false
      },
      {
        icon: 'fa fa-bullhorn',
        label: 'Item label 2',
        name: 'itemTow',
        labelDirection: labelDirection,
        showLabel: false,
        translateLabel: false,
        clickable: true,
        selected: true
      },
      {
        icon: 'fa fa-tag',
        label: 'Item label 3',
        name: 'itemThree',
        labelDirection: labelDirection,
        showLabel: false,
        translateLabel: false,
        clickable: true,
        selected: false
      },
      {
        icon: 'fa fa-calculator',
        label: 'Item label 3',
        name: 'itemFour',
        labelDirection: labelDirection,
        showLabel: false,
        translateLabel: false,
        clickable: false,
        selected: false
      },
      {
        icon: 'fa fa-leanpub',
        label: 'Item label 3',
        name: 'itemFive',
        labelDirection: labelDirection,
        showLabel: false,
        translateLabel: false,
        clickable: false,
        selected: false
      },
      {
        icon: 'fa fa-pie-chart',
        label: 'Item label 3',
        name: 'itemSix',
        labelDirection: labelDirection,
        showLabel: false,
        translateLabel: false,
        clickable: false,
        selected: false
      },
    ];
  }
}
