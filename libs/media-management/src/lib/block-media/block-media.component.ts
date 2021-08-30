import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { BlockMediaDataSource, BlockMediaItem } from './block-media-datasource';

@Component({
  selector: 'vms-block-media',
  templateUrl: './block-media.component.html',
  styleUrls: ['./block-media.component.css'],
})
export class BlockMediaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BlockMediaItem>;
  dataSource: BlockMediaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private router: Router) {
    this.dataSource = new BlockMediaDataSource();
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }

  addMedia() {
    this.router.navigateByUrl('/media-management/add-effects');
  }
}
