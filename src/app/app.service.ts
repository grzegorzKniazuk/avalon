import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  public readonly started = signal<boolean>(false);
  public readonly activeIndex = signal<number>(0);

  public markAsAsStarted(): void {
    this.started.set(true);
  };
}