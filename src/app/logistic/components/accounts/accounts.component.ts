import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CollectionComponent } from '../abstract/collection.component';
import {
  ALPHABET,
  ACCOUNTS_COLUMNS_DESKTOP,
  ACCOUNTS_COLUMNS_MOBILE,
  MAT_XSMALL
} from '../../models/constants';
import { Account } from '../../models/account';
import { ACCOUNTS_COLUMN_DEFS } from '../../models/column-defs';
import { TranslateService } from '@ngx-translate/core';
import { ColumnDef } from '../../models/column'; 
import { ConfigService } from 'utils';
import { DialogService } from 'serendipity-components';

const ALL = 'All';


@Component({
  selector: 'app-accounts', 
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent extends CollectionComponent implements AfterViewInit, OnInit {

  public sort: MatSort; 

  public items: Array<Account>;

  public dataSource: MatTableDataSource<Account> = null;
  public displayedColumns: string[] = [];

  public alphabet = ALPHABET;

  public columnDefs: ColumnDef[];

  public selectedFooterItemId = ALL;

  public pageNumber = 1;

  private count = 0;

  constructor( private router: Router,
    private translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private configService: ConfigService,
    private dialogService: DialogService ) { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.logger.info('AccountsComponent: ngOnInit()');

    //this allow upper column bar
    if (this.breakpointObserver.isMatched(MAT_XSMALL)) {
      this.displayedColumns = ACCOUNTS_COLUMNS_MOBILE;
    } else {
      this.displayedColumns = ACCOUNTS_COLUMNS_DESKTOP;
    }

    this.logger.info(this.displayedColumns);

    this.loadColumnDefs();    
  }

  public ngAfterViewInit() {
    this.logger.info('AccountsComponent: ngAfterViewInit()');
     // React to changes to the viewport

    this.breakpointObserver.observe([ Breakpoints.HandsetPortrait ]).subscribe(result => {

      if (result.matches) {
        this.displayedColumns = ACCOUNTS_COLUMNS_MOBILE;
      } else {
        this.displayedColumns = ACCOUNTS_COLUMNS_DESKTOP;
      }

    });
  }

  async loadColumnDefs() {

    console.log(ACCOUNTS_COLUMN_DEFS);  
    this.columnDefs = await this.configService.get(ACCOUNTS_COLUMN_DEFS);

    console.log(this.columnDefs);

    this.columnDefs.forEach(column => {

      this.translate.get(column.displayName).subscribe(value => {
        column.displayName = value;
      });

    });

    this.logger.info("columnsDefs");
    this.logger.info(this.columnDefs);

  }

  protected subscribe() {

    this.logger.info('AccountsComponent: subscribe()');

        this.count = 1;
        this.items = [];
        //this.items = [{id:1,number:"1234432",name:"Jesús Vega",phoneNumber:"31323456789"}];
        //this.items = response.body.data.map((item => this.adapter.adapt(item)));

        this.dataSource = new MatTableDataSource(this.items);
        this.dataSource.data = this.items;
        //this.dataSource.sortingDataAccessor = pathDataAccessor;
        //this.dataSource.sort = this.sort;
  }

  public refresh() {

    this.logger.info('AccountsComponent: refresh()');

    this.unsubscribe();
    this.subscribe();
  }
  
  public canClickPreviousPageButton() {

    this.logger.info('AccountsComponent: canClickPreviousPageButton()');

    return (this.offset - this.limit) >= 0;
  }

  public onClickPreviousPageButton() {

    this.logger.info('AccountsComponent: onClickPreviousPageButton()');

    this.offset = this.offset - this.limit;

    if (this.offset < 0) {
      this.offset = 0;
    }

    this.pageNumber--;

    this.refresh();
  }

  public canClickNextPageButton() {

    this.logger.info('AccountsComponent: canClickNextPageButton()');

    if (this.count === 0) {
      return false;
    }

    const pages = Math.ceil(this.count / this.limit);

    this.logger.info('pages: ' + pages);
    this.logger.info('this.pageNumber: ' + this.pageNumber);

    return (pages - this.pageNumber) > 0;
  }

  public onClickNextPageButton() {

    this.logger.info('AccountsComponent: onClickNextPageButton()');

    this.offset = this.offset + this.limit;

    this.pageNumber++;

    this.refresh();
  }

  public onNew() {

    this.logger.info('AccountsComponent: onNew()');

    this.router.navigate(['logistic/accounts/new']);
  }

  


}

function pathDataAccessor(item: any, path: string): any {
  return path.split('.')
  .reduce((accumulator: any, key: string) => {
    return accumulator ? accumulator[key] : undefined;
  }, item);
}