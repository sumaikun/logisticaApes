import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CollectionComponent } from '../abstract/collection.component';
import {
  ALPHABET,
  CONTACTS_COLUMNS_DESKTOP,
  CONTACTS_COLUMNS_MOBILE,
  MAT_XSMALL
} from '../../models/constants';
import { Contact } from '../../models/contact';
import { ColumnDef } from '../../models/column'; 
import { CONTACTS_COLUMN_DEFS } from '../../models/column-defs';
import { ConfigService } from 'utils';
import { TranslateService } from '@ngx-translate/core';

const ALL = 'All';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})



export class ContactsComponent extends CollectionComponent implements AfterViewInit, OnInit {

  public pageNumber = 1;
  private count = 0;
  public displayedColumns: string[] = [];
  public alphabet = ALPHABET;
  public columnDefs: ColumnDef[];
  public items: Array<Contact>;
  public dataSource: MatTableDataSource<Contact> = null;
  public selectedFooterItemId = ALL;
  

  constructor( private router: Router,
    private translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private configService: ConfigService) { 
    super();
   
  }

  ngOnInit() {
    super.ngOnInit();
    this.logger.info('ContactsComponent: ngOnInit()');

    //this allow upper column bar
    if (this.breakpointObserver.isMatched(MAT_XSMALL)) {
      this.displayedColumns = CONTACTS_COLUMNS_MOBILE;
    } else {
      this.displayedColumns = CONTACTS_COLUMNS_DESKTOP;
    }

    this.logger.info(this.displayedColumns);

    this.loadColumnDefs();
  }

  async loadColumnDefs() {

    console.log(CONTACTS_COLUMN_DEFS);  
    this.columnDefs = await this.configService.get(CONTACTS_COLUMN_DEFS);   

    this.columnDefs.forEach(column => {

      this.translate.get(column.displayName).subscribe(value => {
        column.displayName = value;
      });

    });

    this.logger.info("columnsDefs");
    this.logger.info(this.columnDefs);

  }

  public ngAfterViewInit() {
    this.logger.info('ContactsComponent: ngAfterViewInit()');
     // React to changes to the viewport

    this.breakpointObserver.observe([ Breakpoints.HandsetPortrait ]).subscribe(result => {

      if (result.matches) {
        this.displayedColumns = CONTACTS_COLUMNS_MOBILE;
      } else {
        this.displayedColumns = CONTACTS_COLUMNS_DESKTOP;
      }

    });
  }

  protected subscribe() {

    this.logger.info('ContactsComponent: subscribe()');

        this.count = 1;
        this.items = [{id:1,displayName:"Beccket",email:"becket@becket.com",
        serviceType:"fullfillment", exporterConfirmation:true, integrationLevel:"full RFID"}];
        //this.items = response.body.data.map((item => this.adapter.adapt(item)));

        this.dataSource = new MatTableDataSource(this.items);
        this.dataSource.data = this.items;
        //this.dataSource.sortingDataAccessor = pathDataAccessor;
        //this.dataSource.sort = this.sort;
  }

  public refresh() {

    this.logger.info('ContactsComponent: refresh()');

    this.unsubscribe();
    this.subscribe();
  }
  
  public canClickPreviousPageButton() {

    this.logger.info('ContactsComponent: canClickPreviousPageButton()');

    return (this.offset - this.limit) >= 0;
  }

  public onClickPreviousPageButton() {

    this.logger.info('ContactsComponent: onClickPreviousPageButton()');

    this.offset = this.offset - this.limit;

    if (this.offset < 0) {
      this.offset = 0;
    }

    this.pageNumber--;

    this.refresh();
  }

  public canClickNextPageButton() {

    this.logger.info('ContactsComponent: canClickNextPageButton()');

    if (this.count === 0) {
      return false;
    }

    const pages = Math.ceil(this.count / this.limit);

    this.logger.info('pages: ' + pages);
    this.logger.info('this.pageNumber: ' + this.pageNumber);

    return (pages - this.pageNumber) > 0;
  }

  public onClickNextPageButton() {

    this.logger.info('ContactsComponent: onClickNextPageButton()');

    this.offset = this.offset + this.limit;

    this.pageNumber++;

    this.refresh();
  }

  public onNew() {

    this.logger.info('ContactsComponent: onNew()');

    this.router.navigate(['logistic/contacts/new']);
  }



}
