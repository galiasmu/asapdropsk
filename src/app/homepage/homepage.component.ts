import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { get } from 'node:http';
import { SidenavComponent } from '../sidenav/sidenav.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true,
  imports: [CommonModule, SidenavComponent]
})
export class HomepageComponent {
  menuOpen = false;
}
