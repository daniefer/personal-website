import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

export class AboutViewModel {
    currentEmployer = 'Sync1 Systems';
    currentEmployerUrl = 'https://www.sync1systems.com/';

    githubIcon = faGithub;
    githubUrl = 'https://github.com/daniefer'

    linkedInIcon = faLinkedin;
    linkedInUrl = 'https://www.linkedin.com/in/ferguson-dan/'

    twitterIcon = faTwitter;
    twitterUrl = 'https://twitter.com/devdanaf'

    emailIcon = faMailBulk;
    email = 'dan.ferguson@outlook.com'
}