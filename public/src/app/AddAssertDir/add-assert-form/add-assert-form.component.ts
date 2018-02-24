import { Component, OnInit } from '@angular/core';
import { GridColumns } from '../../assert-view/assert-view.component';
import { FormsModule } from '@angular/forms';
import { HTTPCRUDService } from '../../HTTPCrudClient/http.crud.service';


@Component({
  selector: 'app-add-assert-form',
  templateUrl: './add-assert-form.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddAssertFormComponent implements OnInit {

  model: GridColumns;
  constructor(private __http: HTTPCRUDService) {
    this.model = <GridColumns>{};
  }

  ngOnInit() {
  }

  submit() {
    try {
      this.__http.setTableData(this.model, 'http://localhost:8008/detail/add').subscribe(data => {}, error => {
        console.log('Error' + error);
      });
      console.log('Inserted Successfully');
    } catch (error) {
      console.log('Error' + error);
    }
  }
}
