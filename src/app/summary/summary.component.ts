import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class SummaryComponent {
}