import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ap-icon-sns-facebook',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconSnsFacebookComponent {
  private sanitizer = inject(DomSanitizer);

  private svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9956_39757)">
<mask id="mask0_9956_39757" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-8" y="-8" width="56" height="56">
<path d="M-8 -8H48V48H-8V-8Z" fill="white"/>
</mask>
<g mask="url(#mask0_9956_39757)">
<path d="M40.0002 19.9999C40.0002 8.95419 31.0459 -0.000129774 20.0002 -0.000129774C8.95456 -0.000129774 0.000244141 8.95419 0.000244141 19.9999C0.000244141 29.3795 6.45744 37.2496 15.1687 39.4109V26.1116H11.0446V19.9999H15.1687V17.3664C15.1687 10.559 18.2494 7.40379 24.9326 7.40379C26.1996 7.40379 28.3859 7.65219 29.2803 7.90067V13.441C28.8082 13.3913 27.9884 13.3664 26.9698 13.3664C23.6903 13.3664 22.4232 14.6087 22.4232 17.8384V19.9999H28.9559L27.8337 26.1116H22.4232V39.8534C32.3261 38.6573 40.0002 30.2253 40.0002 19.9999Z" fill="#0866FF"/>
</g>
<mask id="mask1_9956_39757" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-8" y="-8" width="56" height="56">
<path d="M-8 -8H48V48H-8V-8Z" fill="white"/>
</mask>
<g mask="url(#mask1_9956_39757)">
<path d="M27.8333 26.1118L28.9556 20.0001H22.4229V17.8386C22.4229 14.6088 23.69 13.3667 26.9694 13.3667C27.988 13.3667 28.8079 13.3915 29.28 13.4412V7.90092C28.3856 7.65244 26.1992 7.40396 24.9322 7.40396C18.2491 7.40396 15.1684 10.5592 15.1684 17.3666V20.0001H11.0442V26.1118H15.1684V39.4112C16.7158 39.795 18.3338 40.0001 19.9999 40.0001C20.8202 40.0001 21.6285 39.9496 22.4229 39.8536V26.1118H27.8333Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_9956_39757">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg['default'])
  );
}
