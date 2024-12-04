import { Component, HostListener } from '@angular/core';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav],
})
export class NavbarComponent extends BaseComponent {
  isSubmenuOpen = false;

  toggleSubmenu(event: Event) {
    event.preventDefault();
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeSubmenu(event: MouseEvent) {
    const clickedInside =
      event.target instanceof HTMLElement &&
      (event.target.closest('.nav-item') ||
        event.target.closest('.dropdown-menu'));

    if (!clickedInside) {
      this.isSubmenuOpen = false;
    }
  }
}
