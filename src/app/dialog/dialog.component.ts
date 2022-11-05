import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  statusbar = ["active" , "inactive"];
  constructor() { }

  ngOnInit(): void {
  }

}
