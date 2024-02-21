import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss'],
})
export class DatasetComponent implements OnInit {
  datasets: any[] = [];
  chartData: any;
  chartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'category',
        },
      ],
      yAxes: [{}],
    },
  };
  chartLegend = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.listDatasets();
  }

  listDatasets() {
    this.apiService.listDatasets().subscribe((response) => {
      this.datasets = response.datasets;
      console.log(this.datasets);
    });
  }

  deleteDataset(id: number) {
    this.apiService.deleteDataset(id).subscribe((response) => {
      console.log(response);
      this.listDatasets(); // Refresh the list after deletion
    });
  }

  generatePlot(id: number) {
    this.apiService.generatePlot(id).subscribe((response) => {
      console.log(response);
      this.chartData = {
        labels: Object.keys(response),
        datasets: [
          {
            label: 'Amount per Customer',
            data: Object.values(response),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
    });
  }
}
