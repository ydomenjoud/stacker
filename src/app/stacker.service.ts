import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { KalDialogRef, KalDialogService } from '@kalidea/kaligraphi';
import { StackerData, StakerComponent } from './staker/staker.component';

@Injectable({
  providedIn: 'root'
})
export class StackerService {

  private stacks: KalDialogRef<any>[] = [];

  constructor(private readonly dialogService: KalDialogService) {
  }

  public stack<T>(component: ComponentType<T>): KalDialogRef<StakerComponent<T>, StackerData<T>> {
    const stack = this.dialogService.open<StakerComponent<T>, StackerData<T>>(StakerComponent, {
      height: '100vh',
      width: '100vw',
      data: {
        component
      }
    });
    this.stacks.push(stack);
    return stack;
  }

  unstack(): void {
    this.stacks.pop().close();
  }
}
