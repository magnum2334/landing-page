import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.component.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.component.css']
})
export class BottomSheetOverviewExampleSheetComponent implements OnInit {

  page = `https://www.soyjuanpa.com`
  horizontalPosition: MatSnackBarHorizontalPosition = 'start'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'

  constructor(private _bottomSheetRef: MatBottomSheetRef<MatBottomSheet>, private _snackBar: MatSnackBar,) {}

  ngOnInit(): void {
  }

  async clickBoardMessage() {
    await this._snackBar.open("¡Link copiado! ✔️✔️ Compartelo con tus amigos! 💙🧡", "Ok", {
      duration: 5000,
      panelClass: "clickboard",
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    })
  }

}
