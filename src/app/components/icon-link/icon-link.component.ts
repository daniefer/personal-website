import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLinkComponent implements OnInit {

  @Input()
  public href: string;

  @Input()
  public text: string;

  @Input()
  public prefix: string = 'fa';

  @Input()
  public icon: IconDefinition;

  constructor() { }

  ngOnInit() {
  }

}
