

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService
} from '@syncfusion/ej2-angular-pdfviewer';

export class Epreuves {
  constructor(
    public id: string,
    public type: string,
    public note: string,
    public matiere: string
  ) {
  }
}

@Component({
  selector: 'app-epreuves',
  templateUrl: './epreuves.component.html',
  styleUrls: ['./epreuves.component.css'],
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, 
    ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService]
})
export class EpreuvesComponent implements OnInit {

  epreuves: Epreuves[]|any;

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.getEpreuves();
  }

  getEpreuves(){

    this.httpClient.get<any>('http://localhost:8888/epreuves').subscribe(
    response => {
      console.log(response);
      this.epreuves = response;
    }
  );
  }

  OpenPdf()
  {
    
  var ws = window.open(this.epreuves.cour, '_blank', "width=800,height=800,location=no,menubar=no,status=no,titilebar=no,resizable=no")
                //Adding script and CSS files
                ws!.document.write('<!DOCTYPE html><html><head><title>PdfViewer</title><link href = "https://cdn.syncfusion.com/ej2/17.2.41/material.css" rel = "stylesheet"><script src="https://cdn.syncfusion.com/js/assets/external/jquery-3.1.1.min.js"><\/script><script src="https://cdn.syncfusion.com/ej2/17.2.41/dist/ej2.min.js"><\/script><\/head><body>');
                //Div to render PDF Viewer
                ws!.document.write('<div style="width:100%;min-height:570px"><div id="PdfViewer"></div><\/div>')
                //Initializes the PDF Viewer
                ws!.document.write("<script> var pdfviewer = new ej.pdfviewer.PdfViewer({documentPath:'PDF_Succinctly.pdf',serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer'});pdfviewer.appendTo('#PdfViewer');<\/script>")
               
                ws!.document.close();    
  }

}

