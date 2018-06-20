import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {

  selectedFile: File = null;

  constructor(private http: HttpClient) { }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    // console.log(this.selectedFile);
  }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('http://www.botanum.com/public', uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(a => {
      console.log(a);
    });
  }

  ngOnInit() {
  }

}
