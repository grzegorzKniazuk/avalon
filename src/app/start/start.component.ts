import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    RouterLink,
  ],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class StartComponent implements OnInit {

  public readonly ready = signal<boolean>(false);

  public ngOnInit(): void {
    setTimeout(() => {
      this.ready.set(true);
    }, 1000);
  }
}