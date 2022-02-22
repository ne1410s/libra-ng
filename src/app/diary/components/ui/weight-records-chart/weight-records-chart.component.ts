import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { WeightRecord } from 'src/app/diary/models/weight-record';

@Component({
  selector: 'app-weight-records-chart',
  templateUrl: './weight-records-chart.component.html',
  styleUrls: ['./weight-records-chart.component.scss']
})
export class WeightRecordsChartComponent implements OnChanges {

  @Input()
  records!: WeightRecord[];

  data: ChartData<'scatter'> = {
    datasets: [
      {
        label: 'Weight Records',
        data: [] as any,
        fill: true,
        showLine: true,
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: 'rgba(147, 102, 102, 0.25)',
        tension: .2,
      },
    ]
  };

  options: ChartOptions<'scatter'> = {
    plugins: {
      title: {
        display: true,
        text: 'Ra!'
      },
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        type: 'time' as any,
        min: new Date(2022, 0, 1) as any,
        max: new Date(2022, 11, 31) as any,
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMM yy'
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'weight / kg',
        },
        min: 70,
      }
    }
  };

  ngOnChanges(): void {
    this.data = {
      datasets: [{
        ... this.data.datasets[0],
        data: this.records.map(r => ({ x: r.recorded, y: r.amount } as any)),
      }]
    };
  }

}
