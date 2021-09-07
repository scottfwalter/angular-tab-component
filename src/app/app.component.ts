import { Component, VERSION, Input, OnInit, TemplateRef, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tab1',
  template: 'tab 1 is here',
})
export class TabComponent1 implements OnInit{
  ngOnInit() {
    console.log('ON INIT1');
  }
}

@Component({
  selector: 'app-tab2',
  template: 'tab 2 is here',
})
export class TabComponent2 implements OnInit{
  ngOnInit() {
    console.log('ON INIT2');
  }
}


@Component({
  selector: 'app-tab',
  template: '',
})
export class TabComponent {
  @Input() name: string;
  @Input() templateRef: TemplateRef<any>;
}

@Component({
  selector: 'app-tabs',
  styles: [`
  
    span {
      float: left;
      padding: 5px;
      background-color: #D0CCD0;
      border-radius: 5px 5px 0 0;
      color: #828181;
      font-size: 14px;
      cursor: pointer;
    }
    
    .selected {
      background-color: #FBFCFF;
      color: #333;
    }
    
    div {
      clear: both;
      padding: 10px;
      background: #FBFCFF;
      min-height: 100px;
      border-radius: 0 5px 5px 5px;
    }

  `],
  template: `
    <span 
      *ngFor="let tab of tabList" 
      [ngClass]="{selected: isSelected(tab)}" 
      (click)="onTabClick(tab)"
    >
      {{tab.name}}
    </span>
    <div><template [ngTemplateOutlet]="currentTab.templateRef"></template></div>
  `,
})
export class TabsComponent implements AfterContentInit {
  
  @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
  currentTab: TabComponent;

  ngAfterContentInit() {
    this.currentTab = this.tabList.first;
  }
  
  onTabClick(tab: TabComponent) {
    this.currentTab = tab;
  }
  
  isSelected(tab: TabComponent) {
    return this.currentTab.name === tab.name;
  }
  
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
}
