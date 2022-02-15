import { Component, Input, OnInit } from '@angular/core';
import { WeightRecord } from 'src/app/diary/models/weight-record';

@Component({
  selector: 'app-weight-records-grid',
  templateUrl: './weight-records-grid.component.html',
  styleUrls: ['./weight-records-grid.component.scss']
})
export class WeightRecordsGridComponent {

  @Input()
  records!: WeightRecord[];
}
