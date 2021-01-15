import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  public icon = 'menu';

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  menuOpened(): void {
    this.icon = 'close';
  }
  menuClosed(): void {
    this.icon = 'menu';
  }

}
