import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  statusbar = ["active", "inactive"];

  productForm !: FormGroup;
  actionBtn: string = "save"
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      Email: ['', Validators.required],
      Gender: ['', Validators.required],
      statusbar: ['', Validators.required]
    })
    if (this.editData) {
      this.actionBtn = "update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['Email'].setValue(this.editData.Email);
      this.productForm.controls['Gender'].setValue(this.editData.Gender);
      this.productForm.controls['statusbar'].setValue(this.editData.statusbar);
    }

  }
  Addproduct() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postproduct(this.productForm.value)
          .subscribe({
            next: (res) => {
              alert("add successfully");
              this.productForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert(" no add error");
            }
          })
      }
    }else {
      this.updateProduct()
    }
  }
updateProduct(){
this.api.putProduct(this.productForm.value,this.editData.id)
.subscribe ({
  next:(res)=>{
    alert("suceess update");
    this.productForm.reset();
    this.dialogRef.close('update');
  },
  error:()=>{
    alert('Error update');
  }
})
}
}
