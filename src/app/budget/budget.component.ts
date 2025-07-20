import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class BudgetComponent {
}