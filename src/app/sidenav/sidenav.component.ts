import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [CommonModule],
})
export class SidenavComponent {
  activeMenu: number | null = null;
  mobileMenuOpen: boolean = false;

  openMenu(menuId: number) {
    this.activeMenu = menuId;
  }

  closeMenu() {
    this.activeMenu = null;
  }
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  onSearchClick() {
    console.log('Search clicked');
  }
}
