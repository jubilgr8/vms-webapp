import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AddEffectsDataSource, AddEffectsItem } from './add-effects-datasource';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'vms-add-effects',
  templateUrl: './add-effects.component.html',
  styleUrls: ['./add-effects.component.css'],
})
export class AddEffectsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AddEffectsItem>;
  dataSource: AddEffectsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  effectsForm: any;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  constructor(private formBuilder: FormBuilder) {
    this.dataSource = new AddEffectsDataSource();
  }
  ngOnInit(): void {
    this.effectsForm = this.formBuilder.group({
      duration: new FormControl('', [Validators.required]),
      effectIn: new FormControl('', [Validators.required]),
      effectOut: new FormControl('', [Validators.required]),
      partyId: new FormControl('', [Validators.required]),
      mediaType: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {}
}
