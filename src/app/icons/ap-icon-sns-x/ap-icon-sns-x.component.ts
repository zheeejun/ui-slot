import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ap-icon-sns-x',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconSnsXComponent {
  private sanitizer = inject(DomSanitizer);

  private svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9961_39796)">
<circle cx="20" cy="20" r="20" fill="black"/>
<path d="M21.6881 18.1624L30.2504 8H28.2214L20.7868 16.8238L14.8488 8H8L16.9794 21.3432L8 32H10.0291L17.8802 22.6817L24.1512 32H31L21.6876 18.1624H21.6881ZM18.909 21.4608L17.9992 20.1321L10.7602 9.55962H13.8768L19.7187 18.0919L20.6285 19.4206L28.2224 30.5113H25.1058L18.909 21.4613V21.4608Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_9961_39796">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg['default'])
  );
}
