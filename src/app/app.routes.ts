import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BudgetComponent } from './budget/budget.component';
import { PurposeComponent } from './purpose/purpose.component';
import { FuelComponent } from './fuel/fuel.component';
import { PersonalExperiencesComponent } from './personal-experiences/personal-experiences.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '0',
    pathMatch: 'full',
  },
  {
    path: '0',
    component: StartComponent,
    title: 'Start',
  },
  {
    path: '1',
    component: IntroductionComponent,
    title: 'Introduction',
  },
  {
    path: '2',
    component: BudgetComponent,
    title: 'Budget',
  },
  {
    path: '3',
    component: PurposeComponent,
    title: 'Purpose',
  },
  {
    path: '4',
    component: FuelComponent,
    title: 'Fuel',
  },
  {
    path: '5',
    component: PersonalExperiencesComponent,
    title: 'Personal experiences',
  },
  {
    path: '6',
    component: SummaryComponent,
    title: 'Summary',
  },
  {
    path: '**',
    redirectTo: 'start',
    pathMatch: 'full',
  },
];