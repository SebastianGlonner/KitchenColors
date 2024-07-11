import {Component, OnInit} from '@angular/core';

interface ColorScheme {
  name: string;
  cBody: string;
  cWorkingPlate: string;
  cWallSave: string;
}

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  private verde = '#485A4F';
  // private verde = 'url(\'/assets/verde.jpg\')';
  private beton = 'url(\'/assets/beton.jpg\')';
  private betonWhite = 'url(\'/assets/beton-white.jpg\')';
  private floor = 'url(\'/assets/floor.jpg\')';

  colors: ColorScheme[] = [
    {
      name: 'grün - beton weiß',
      cBody: this.verde,
      cWorkingPlate: this.betonWhite,
      cWallSave: this.betonWhite,
    },
    {
      name: 'grün - boden',
      cBody: this.verde,
      cWorkingPlate: this.floor,
      cWallSave: this.floor,
    },
    {
      name: 'beton grafit',
      cBody: this.beton,
      cWorkingPlate: this.floor,
      cWallSave: this.floor,
    },
    {
      name: 'test',
      cBody: 'black',
      cWorkingPlate: 'blue',
      cWallSave: 'green',
    }
  ]

  // cBody = 'green';
  // cBody = 'url(\'/assets/floor-small.jpg\')';

  cBody = 'green';
  cWorkingPlate = 'red';
  cWallSave = 'red';

  ngOnInit() {
    this.setColorScheme(this.colors[0]);
  }

  setColorScheme(scheme: ColorScheme) {
    this.cBody = scheme.cBody;
    this.cWorkingPlate = scheme.cWorkingPlate;
    this.cWallSave = scheme.cWallSave;
  }
}
