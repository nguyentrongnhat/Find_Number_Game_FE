import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FACEBOOK_ICON, GOOGLE_ICON } from '../../../../../assets/svg/svg-code';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer,
    public router: Router,
  ) {
    iconRegistry.addSvgIconLiteral('google-icon', sanitizer.bypassSecurityTrustHtml(GOOGLE_ICON));
    iconRegistry.addSvgIconLiteral('facebook-icon', sanitizer.bypassSecurityTrustHtml(FACEBOOK_ICON));
  }

}
