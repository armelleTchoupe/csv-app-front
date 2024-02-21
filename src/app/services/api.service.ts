import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/csv/`, formData);
  }

  listDatasets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/csv/`);
  }

  deleteDataset(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/csv/${id}/`);
  }

  generatePlot(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/csv/${id}/plot/`);
  }
}
