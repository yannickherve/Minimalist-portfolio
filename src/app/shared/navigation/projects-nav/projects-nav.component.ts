import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects-nav',
  templateUrl: './projects-nav.component.html',
  styleUrls: ['./projects-nav.component.scss']
})
export class ProjectsNavComponent implements OnInit {
  @Input() previousProject: string;
  @Input() nextProject: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  navigateUrl(name): void {
    this.router.navigate(['/portfolio/project-' + name]).then(() => {});
  }

}
