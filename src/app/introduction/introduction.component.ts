import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class IntroductionComponent implements OnInit {

  constructor(
    private readonly appService: AppService,
  ) {
  }

  public ngOnInit(): void {
    this.appService.markAsAsStarted();
  }
}