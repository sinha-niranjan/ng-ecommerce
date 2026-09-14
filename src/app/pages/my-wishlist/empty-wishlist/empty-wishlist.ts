import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-wishlist',
  imports: [MatButton, MatIcon, RouterLink],
  template: `
    <section class="flex flex-col items-center justify-center py-16 text-center">
      <div
        class="mb-6 flex  p-5 items-center justify-center rounded-full border border-pink-100 bg-pink-50 shadow-sm"
      >
        <mat-icon class="!text-2xl !text-pink-500">favorite_border</mat-icon>
      </div>

      <h2 class="text-3xl font-bold tracking-tight text-gray-900">Your wishlist is empty</h2>
      <p class="mt-3 max-w-md text-base text-gray-500">
        Save items you love and come back to them anytime.
      </p>

      <button matButton color="primary" routerLink="/products/all" class="mt-8 !rounded-full">
        <mat-icon>shopping_bag</mat-icon>
        Continue Shopping
      </button>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class EmptyWishlist {}
