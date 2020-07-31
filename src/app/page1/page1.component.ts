import { Component, OnInit } from '@angular/core';
import { Ecran1Component } from '../ecran1/ecran1.component';
import { Ecran2Component } from '../ecran2/ecran2.component';
import { Ecran3Component } from '../ecran3/ecran3.component';
import { StackerService } from '../stacker.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

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
