import { Component, effect, HostListener, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { filter, timer } from 'rxjs';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { AppService } from './app.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    MatMiniFabButton,
    MatIcon,
  ],
  animations: [
    trigger('moveRight', [
      state('step0', style({ transform: 'translateX(0)' })),
      state('step1', style({ transform: 'translateX(15vw)' })),
      state('step2', style({ transform: 'translateX(30vw)' })),
      state('step3', style({ transform: 'translateX(45vw)' })),
      state('step4', style({ transform: 'translateX(60vw)' })),
      state('step5', style({ transform: 'translateX(75vw)' })),
      state('step6', style({ transform: 'translateX(calc(100vw - 55px))' })),
      transition('* => *', animate('500ms ease-out')),
    ]),
  ],
})
export class AppComponent implements OnInit {

  public readonly activeIndex = this.appService.activeIndex.asReadonly();
  public readonly started = this.appService.started.asReadonly();

  public readonly minutes = signal<string>('0');
  public readonly seconds = signal<string>('0');

  private url: string | undefined;
  private readonly last = 6;

  constructor(
    private readonly appService: AppService,
    private readonly router: Router,
  ) {
    effect(() => {
      const started = this.appService.started();

      if (started) {
        timer(0, 1000).subscribe((time) => {
          const minutes = Math.floor(time / 60);
          const seconds = Math.floor(time % 60);

          if (minutes < 10) {
            this.minutes.set(`0${minutes}`);
          } else {
            this.minutes.set(`${minutes}`);
          }

          if (seconds < 10) {
            this.seconds.set(`0${seconds}`);
          } else {
            this.seconds.set(`${seconds}`);
          }
        });
      }
    });
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) => {
      this.url = event.url;

      this.appService.activeIndex.set(parseInt(this.url.slice(1)));
    });
  }

  @HostListener('document:keydown', [ '$event' ])
  public keydown(event: KeyboardEvent): void {
    if (event.keyCode === LEFT_ARROW) {
      this.prev();
    }

    if (event.keyCode === RIGHT_ARROW) {
      this.next();
    }
  }

  public prev(): void {
    if (this.url) {
      const current = parseInt(this.url.slice(1));

      if (current > 0) {
        this.router.navigate([ current - 1 ]);
      }
    }
  }

  public next(): void {
    if (this.url) {
      const current = parseInt(this.url.slice(1));

      if (current + 1 <= this.last) {
        this.router.navigate([ current + 1 ]);
      }
    }
  }
}