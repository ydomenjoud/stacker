import { Component, OnInit } from '@angular/core';
import { Ecran1Component } from '../ecran1/ecran1.component';
import { Ecran3Component } from '../ecran3/ecran3.component';
import { StackerService } from '../stacker.service';

@Component({
  selector: 'app-ecran2',
  templateUrl: './ecran2.component.html',
  styleUrls: ['./ecran2.component.css']
})
export class Ecran2Component{

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
