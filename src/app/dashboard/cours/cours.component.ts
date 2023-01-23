

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService
} from '@syncfusion/ej2-angular-pdfviewer';
export class Matieres {
  constructor(
    public name: string,
    public cour: string,
    public email: string,
    public heurs: string
  ) {
  }
}

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css'],
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, 
    ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService]
})
export class CoursComponent implements OnInit {

  matieres: Matieres[]|any;

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.getMatieres();
  }

  getMatieres(){

    this.httpClient.get<any>('http://localhost:8888/matieres').subscribe(
    response => {
      console.log(response);
      this.matieres = response;
    }
  );
  }

  OpenPdf()
  {
    
  var ws = window.open(this.matieres.cour, '_blank', "width=800,height=800,location=no,menubar=no,status=no,titilebar=no,resizable=no")
                //Adding script and CSS files
                ws!.document.write('<!DOCTYPE html><html><head><title>PdfViewer</title><link href = "https://cdn.syncfusion.com/ej2/17.2.41/material.css" rel = "stylesheet"><script src="https://cdn.syncfusion.com/js/assets/external/jquery-3.1.1.min.js"><\/script><script src="https://cdn.syncfusion.com/ej2/17.2.41/dist/ej2.min.js"><\/script><\/head><body>');
                //Div to render PDF Viewer
                ws!.document.write('<div style="width:100%;min-height:570px"><div id="PdfViewer"></div><\/div>')
                //Initializes the PDF Viewer
                ws!.document.write("<script> var pdfviewer = new ej.pdfviewer.PdfViewer({documentPath:'PDF_Succinctly.pdf',serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer'});pdfviewer.appendTo('#PdfViewer');<\/script>")
               
                ws!.document.close();    
  }

}