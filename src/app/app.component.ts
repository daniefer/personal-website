import { Component } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { PageService } from 'src/services/page.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public pageService: PageService) {

  }

  public githubIcon = faGithub;
  public linkedinIcon = faLinkedin;
  public twitterIcon = faTwitter;
}
