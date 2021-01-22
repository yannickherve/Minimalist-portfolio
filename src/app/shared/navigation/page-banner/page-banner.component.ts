import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent implements OnInit {
  @Input() dynamicMargin: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dynamicMargin);
  }

}
