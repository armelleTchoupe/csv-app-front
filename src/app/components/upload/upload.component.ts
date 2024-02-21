import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  selectedFile: File | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      this.apiService.uploadFile(this.selectedFile).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
