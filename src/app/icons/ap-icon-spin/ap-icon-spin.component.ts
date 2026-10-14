import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export type ApIconSpinVariant = 'default' | 'chance' | 'bonus' | 'red';

@Component({
  selector: 'ap-icon-spin',
  imports: [],
  templateUrl: '../ap-icon.root.html',
  styleUrl: '../ap-icon.root.css'
})
export class ApIconSpinComponent {
  variant = input<ApIconSpinVariant>('default');

  private sanitizer = inject(DomSanitizer);

  path = "M38.2691 43.289C44.5995 38.6057 47.9627 31.4116 47.9995 24.1077C48.0164 20.7665 47.3359 17.4021 45.926 14.2448L45 20L39.1831 19.1251C39.6935 20.7191 39.9491 22.3837 39.9402 24.0573C39.915 28.9135 37.6806 33.6979 33.4763 36.8081C27.5061 41.2251 19.4695 40.8557 13.9558 36.3864L19.8676 32.0126L4.53556 29.7196L2.24284 45.052L7.34598 41.2764C15.6268 49.2838 28.6989 50.3692 38.2691 43.289Z M43.4709 17.8505L45.7633 2.51841L40.4032 6.48404C32.1108 -1.30517 19.2041 -2.29779 9.72976 4.71141C0.532902 11.5156 -2.4003 23.6189 2.03043 33.6597L3.5 27.5L8.66983 28.4219C6.86976 22.1995 8.99417 15.2441 14.5064 11.1661C20.3865 6.81589 28.2704 7.10871 33.7748 11.3878L28.1388 15.5577L43.4709 17.8505Z";

  private svg: Record<ApIconSpinVariant, string> = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16, 16) scale(1)">
        <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g></svg>`,
    chance: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#2563EB" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#e0e0e0" stroke-width="4"/>
      <g transform="translate(16, 16) scale(1)">
        <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#e0e0e0"/></g></svg>`,
    bonus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#059669" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#e0e0e0" stroke-width="4"/>
      <g transform="translate(16, 16) scale(1)">
        <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#e0e0e0"/></g></svg>`,
    red: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#000" stroke-width="4"/>
      <circle cx="40" cy="40" r="38" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16, 16) scale(1)">
        <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g></svg>`,
  };

  svgHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.svg[this.variant()])
  );
}
