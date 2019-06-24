import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public githubIcon = faGithub;
  public subTitle = 'You know that guy Dan?';
  public title = 'Dan Ferguson';
}
