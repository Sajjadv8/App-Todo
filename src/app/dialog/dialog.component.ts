import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  statusbar = ["active", "inactive"];

  productForm !: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      Email: ['', Validators.required],
      Gender: ['', Validators.required],
      statusbar: ['', Validators.required]
    })
  }
  Addproduct(){
    console.log(this.productForm.value);
    
  }

}
