import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { RecordsWindow } from 'src/app/diary/models/records-window';
import { WeightRecord } from 'src/app/diary/models/weight-record';

@Component({
  selector: 'app-weight-records-chart',
  templateUrl: './weight-records-chart.component.html',
  styleUrls: ['./weight-records-chart.component.scss']
})
export class WeightRecordsChartComponent implements OnChanges {

  @Input()
  records!: WeightRecord[];

  @Input()
  recordsWindow!: RecordsWindow;

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
        text: this.recordsWindow?.title
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
        ...this.data.datasets[0],
        data: this.records.map(r => ({ x: r.recorded, y: r.amount } as any)),
      }]
    };
    this.options = {
      ...this.options,
      plugins: {
        ...this.options.plugins,
        title: {
          ...this.options.plugins?.title,
          text: this.recordsWindow.title
        }
      }
    }
  }

}
