import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: DataManager;
	ngOnInit() {
    this.data = new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
            adaptor: new ODataV4Adaptor
        });
  }
}
