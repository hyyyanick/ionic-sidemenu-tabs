import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookSharp, homeSharp, waterSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class TabsComponent {

  public tabBars: any[] = [
    {
      title: 'Tab 1',
      tab: 'home',
      icon: 'home'
    },
    {
      title: 'Tab 2',
      tab: 'tab2',
      icon: 'book'
    },
    {
      title: 'Tab 3',
      tab: 'tab3',
      icon: 'water'
    }
  ];

  constructor() { 
    addIcons({homeSharp, bookSharp, waterSharp})
   }
}
