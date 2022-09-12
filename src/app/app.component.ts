import {
  FlexibleConnectedPositionStrategy,
  OverlayPositionBuilder
} from '@angular/cdk/overlay';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isOpen = false;
  public positionStrategy!: FlexibleConnectedPositionStrategy;

  @ViewChild('button', { static: true })
  public button!: ElementRef<HTMLButtonElement>;

  constructor(private overlayPositionBuilder: OverlayPositionBuilder) {}

  ngOnInit(): void {
    this.positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.button)
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
      ]);
  }
}
