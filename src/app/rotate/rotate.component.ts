import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.scss'],
})
export class RotateComponent implements OnInit {

  listRotate: number[];
  numberColumns: number = 0;

  constructor(
    private router: Router,
  ) {
    const data = this.router.getCurrentNavigation().extras.state as number[];
    if (data){
      this.numberColumns = Math.sqrt(data.length);  
      this.listRotate = data;   
    }
   }

  ngOnInit() {
  }

  public getStyles() {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.numberColumns}, 1fr)`,
      'grid-template-rows': `repeat(${this.numberColumns}, 1fr)`,
      'justify-items': 'center',
    };
  }

  back(){
    this.router.navigate(['']);
  }

}
