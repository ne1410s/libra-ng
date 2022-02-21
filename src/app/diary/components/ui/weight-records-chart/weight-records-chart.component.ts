import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeightRecord } from 'src/app/diary/models/weight-record';

@Component({
  selector: 'app-weight-records-chart',
  templateUrl: './weight-records-chart.component.html',
  styleUrls: ['./weight-records-chart.component.scss']
})
export class WeightRecordsChartComponent implements OnChanges {

  @Input()
  records!: WeightRecord[];

  basicData = {
    datasets: [
      {
        label: 'Weight Records',
        data: [] as any,
        fill: true,
        showLine: true,
        borderColor: 'red',
        backgroundColor: 'rgba(147, 102, 102, 0.25)',
        tension: .2
      },
    ]
  };

  ngOnChanges(): void {
    this.basicData = {
      datasets: [{
        ... this.basicData.datasets[0],
        data: this.records.map(r => ({ x: r.recorded, y: r.amount })),
      }]
    };
  }

}
