import { Component, OnInit } from '@angular/core';
import { Ecran2Component } from '../ecran2/ecran2.component';
import { Ecran3Component } from '../ecran3/ecran3.component';
import { StackerService } from '../stacker.service';

@Component({
  selector: 'app-ecran1',
  templateUrl: './ecran1.component.html',
  styleUrls: ['./ecran1.component.css']
})
export class Ecran1Component {

  constructor(private readonly stackerService: StackerService) {
  }


  stack1(): void {
    this.stackerService.stack(Ecran1Component);
  }

  stack2(): void {
    this.stackerService.stack(Ecran2Component);
  }

  stack3(): void {
    this.stackerService.stack(Ecran3Component);
  }

}
