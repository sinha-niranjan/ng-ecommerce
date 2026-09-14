import { Component, input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-button',
  imports: [MatAnchor, RouterLink, MatIcon],
  template: `
    <button
      matButton="text"
      [routerLink]="navigateTo() ?? null"
      class="-ms-2 flex items-center gap-1"
    >
      <ng-content />

      <mat-icon>arrow_back</mat-icon>
    </button>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class BackButton {
  navigateTo = input<string>();
}
