import { Component } from '@angular/core';

@Component({
  templateUrl: './site-wrapper.component.html',
  styleUrls: ['./site-wrapper.component.scss']
})
export class SiteWrapperComponent {
  title = 'libra';
  year = new Date().getFullYear();
}
