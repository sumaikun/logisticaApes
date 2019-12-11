import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { MatSidenav } from '@angular/material';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { ConfigService, LoggerService } from 'utils'; 

interface SideNavRoute {
  icon?: string; 
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  @ViewChild('commandbarSidenav', {static: true})
  public sidenav: MatSidenav;

  public myWorkRoutes: SideNavRoute[];
  public customerRoutes: SideNavRoute[];



  protected subscription: Subscription;

  constructor(private configService: ConfigService,
              private translate: TranslateService,
              private logger: LoggerService) {}

  public ngOnInit(): void {

    this.logger.info('NavComponent: ngOnInit()');
    
    this.loadNavListItems();

   
  }

  async loadNavListItems() {

    this.myWorkRoutes = await this.configService.get('my-work-routes');

    this.myWorkRoutes.forEach(route => {

      this.translate.get(route.title).subscribe(value => {
        route.title = value;
      });

    });

    this.customerRoutes = await this.configService.get('customer-routes');

    this.customerRoutes.forEach(route => {

      this.translate.get(route.title).subscribe(value => {
        route.title = value;
      });

    });

  }

 



  public onDragStart(event, identifier) {

    
  }

  public ngOnDestroy() {

    this.logger.info('NavComponent: ngOnDestroy()');

    
  }

}
