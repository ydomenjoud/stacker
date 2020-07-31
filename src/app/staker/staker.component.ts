import { ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Inject, OnInit } from '@angular/core';
import { KAL_DIALOG_DATA, KalDialogRef } from '@kalidea/kaligraphi';
import { StackerService } from '../stacker.service';

export interface StackerData<T> {
  component: ComponentType<T>;
}

@Component({
  selector: 'app-staker',
  templateUrl: './staker.component.html',
  styleUrls: ['./staker.component.css']
})
export class StakerComponent<T> {

  portal: ComponentPortal<T>;

  constructor(private readonly dialogRef: KalDialogRef<StakerComponent<T>>,
              private readonly stackerService: StackerService,
              @Inject(KAL_DIALOG_DATA) private readonly data: StackerData<T>) {
    this.portal = new ComponentPortal<T>(this.data.component);
  }

  unstack(): void {
    this.stackerService.unstack();
  }
}
