import { BOLT_PATH, TICKET_PATH, SPINNING_PATH, PLUS_PATH, MINUS_PATH, REPLAY_PATH, GIFT_PATH, BOLT_2_PATH, X_MARK_PATH, SPEAKER_WAVE_DEFAULT_PATH, SPEAKER_WAVE_PRESSED_PATH, } from "../../../ap-components-lib/ap-icon/icon-data";
export const CATEGORY = {
    title: 'Game Control Icons',
    description: 'Icons for primary game controls and actions',
};
export const ICONS = {
    spin: {
        default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16, 16) scale(0.57)">
      <path fill-rule="evenodd" d="${SPINNING_PATH}" clip-rule="evenodd" fill="#D4D4D8"/></g></svg>`,
        hover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#FFF085" stroke-width="4"/>
      <g transform="translate(16, 16) scale(0.57)">
      <path fill-rule="evenodd" d="${SPINNING_PATH}" clip-rule="evenodd" fill="#FFF085"/></g></svg>
    </svg>`,
        active: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#FFD84D" stroke-width="4"/>
      <g transform="translate(16, 16) scale(0.57)">
      <path fill-rule="evenodd" d="${SPINNING_PATH}" clip-rule="evenodd" fill="#FDC700"/></g></svg>`,
        chance: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#2563EB" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16, 16) scale(0.57)">
      <path fill-rule="evenodd" d="${SPINNING_PATH}" clip-rule="evenodd" fill="#D4D4D8"/></g></svg>`,
        bonus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#059669" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16, 16) scale(0.57)">
      <path fill-rule="evenodd" d="${SPINNING_PATH}" clip-rule="evenodd" fill="#D4D4D8"/></g></svg>`,
    },
    autoplay: {
        default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <!-- Out Frame: Circular button background -->
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_autoplay)" filter="url(#filter0_i_autoplay)"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8"" stroke-width="4"/>
      <g transform="translate(20 20) scale(2.5)">
      <path fill-rule="evenodd" d="${REPLAY_PATH}" clip-rule="evenodd" fill="#D4D4D8"/></g>
      <defs>
        <filter id="filter0_i_autoplay" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_autoplay"/>
        </filter>
        <linearGradient id="paint0_linear_autoplay" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6A6A6A"/>
          <stop offset="0.4" stop-color="#424242"/>
          <stop offset="0.8" stop-color="#343434"/>
          <stop offset="1" stop-color="#303030"/>
        </linearGradient>
      </defs>
    </svg>`,
        hover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <!-- Out Frame: Circular button background -->
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_autoplay)" filter="url(#filter0_i_autoplay)"/>
      <circle cx="40" cy="40" r="34" stroke="#FFF085"" stroke-width="4"/>
      <g transform="translate(20 20) scale(2.5)">
      <path fill-rule="evenodd" d="${REPLAY_PATH}" clip-rule="evenodd" fill="#FFF085"/></g>
      <defs>
        <filter id="filter0_i_autoplay" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_autoplay"/>
        </filter>
        <linearGradient id="paint0_linear_autoplay" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6A6A6A"/>
          <stop offset="0.4" stop-color="#424242"/>
          <stop offset="0.8" stop-color="#343434"/>
          <stop offset="1" stop-color="#303030"/>
        </linearGradient>
      </defs>
    </svg>`,
        active: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <!-- Out Frame: Circular button background -->
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_autoplay)" filter="url(#filter0_i_autoplay)"/>
      <circle cx="40" cy="40" r="34" stroke="#FDC700"" stroke-width="4"/>
      <g transform="translate(20 20) scale(2.5)">
      <path fill-rule="evenodd" d="${REPLAY_PATH}" clip-rule="evenodd" fill="#FDC700"/></g>
      <defs>
        <filter id="filter0_i_autoplay" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_autoplay"/>
        </filter>
        <linearGradient id="paint0_linear_autoplay" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6A6A6A"/>
          <stop offset="0.4" stop-color="#424242"/>
          <stop offset="0.8" stop-color="#343434"/>
          <stop offset="1" stop-color="#303030"/>
        </linearGradient>
      </defs>
    </svg>`,
    },
    turbo: {
        default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_turbo)" filter="url(#filter0_i_turbo)"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(14 15) scale(1.3)">
      <!-- Icon -->
        <path fill-rule="evenodd" d="${BOLT_PATH}" clip-rule="evenodd" fill="#D4D4D8"/></g><defs>
        <filter id="filter0_i_turbo" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_turbo"/>
        </filter>
        <linearGradient id="paint0_linear_turbo" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6A6A6A"/>
          <stop offset="0.4" stop-color="#424242"/>
          <stop offset="0.8" stop-color="#343434"/>
          <stop offset="1" stop-color="#303030"/>
        </linearGradient>
      </defs>
    </svg>`,
        pressed1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_turbo_pressed1)" filter="url(#filter0_i_turbo_pressed1)"/>
      <circle cx="40" cy="40" r="34" stroke="#FDC700" stroke-width="4"/>
      <g transform="translate(14 15) scale(1.3)">
        <path fill-rule="evenodd" d="${BOLT_PATH}" clip-rule="evenodd" fill="#FDC700"/></g><defs>
        <filter id="filter0_i_turbo_pressed1" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_turbo_pressed1"/>
        </filter>
        <linearGradient id="paint0_linear_turbo_pressed1" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6A6A6A"/>
          <stop offset="0.4" stop-color="#424242"/>
          <stop offset="0.8" stop-color="#343434"/>
          <stop offset="1" stop-color="#303030"/>
        </linearGradient>
      </defs>
    </svg>`,
        pressed2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_turbo_pressed2)" filter="url(#filter0_i_turbo_pressed2)"/>
      <circle cx="40" cy="40" r="34" stroke="#00E5FF" stroke-width="4"/>
      <g transform="translate(15 15) scale(1.3)">
      <!-- Icon -->
        <path fill-rule="evenodd" d="${BOLT_2_PATH}" clip-rule="evenodd" fill="#00E5FF"/></g><defs>
        <filter id="filter0_i_turbo_pressed2" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_turbo_pressed2"/>
        </filter>
        <linearGradient id="paint0_linear_turbo_pressed2" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
           <stop stop-color="#4F6784"/>
          <stop offset="0.4" stop-color="#37506B"/>
          <stop offset="0.8" stop-color="#2B4158"/>
          <stop offset="1" stop-color="#23374A"/>
        </linearGradient>
      </defs>
    </svg>`,
        pressed3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_light)" filter="url(#filter0_i_light)"/>
      <circle cx="40" cy="40" r="34" stroke="#FDC700" stroke-width="4"/>
      <g transform="translate(15 15) scale(1.3)">
      <!-- Icon -->
        <path fill-rule="evenodd" d="${BOLT_2_PATH}" clip-rule="evenodd" fill="#FFFFFF"/></g><defs>
        <filter id="filter0_i_light" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_light"/>
        </filter>
        <linearGradient id="paint0_linear_light" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
           <stop stop-color="#8A6711"/>
          <stop offset="0.4" stop-color="#6A4F0D"/>
          <stop offset="0.8" stop-color="#4D3909"/>
          <stop offset="1" stop-color="#3A2B07"/>
        </linearGradient>
      </defs>
    </svg>`,
    },
    'buy-feature': {
        default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <!-- Out Frame: Circular button background -->
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B"  stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_ticket)" filter="url(#filter0_i_menu)"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D4" stroke-width="4"/>
      <g transform="translate(14 14) scale(1.1)">
      <!-- Icon -->
        <path fill-rule="evenodd" d="${TICKET_PATH}" clip-rule="evenodd" fill="#E4E4E7"/></g>
      <defs>
        <filter id="filter0_i_menu" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_menu"/>
        </filter>
        <linearGradient id="paint0_linear_ticket" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F06C9B"/>
          <stop offset="0.4" stop-color="#D63B73"/>
          <stop offset="0.8" stop-color="#A81E4E"/>
          <stop offset="1" stop-color="#6B0F30"/>
        </linearGradient>
      </defs>
    </svg>`,
        cancel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <!-- Out Frame: Circular button background -->
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B"  stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_buy_feature_cancel)" filter="url(#filter0_i_buy_feature_cancel)"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${X_MARK_PATH}" clip-rule="evenodd" fill="#D4D4D8"/>
      </g>
      <defs>
        <filter id="filter0_i_buy_feature_cancel" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_buy_feature_cancel"/>
        </filter>
        <linearGradient id="paint0_linear_buy_feature_cancel" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="  #D64545"/>
          <stop offset="0.4" stop-color="  #A33232"/>
          <stop offset="0.8" stop-color="  #6B2222"/>
          <stop offset="1" stop-color="  #4A1818"/>
        </linearGradient>
      </defs>
    </svg>`,
    },
    campaign: {
        default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <!-- Out Frame: Circular button background -->
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B"  stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_campaign)" filter="url(#filter0_i_campaign)"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(18 18) scale(1.8)">
      <path fill-rule="evenodd" d="${GIFT_PATH}" clip-rule="evenodd" fill="#D4D4D8"/>
      </g>
      <defs>
        <filter id="filter0_i_campaign" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_campaign"/>
        </filter>
        <linearGradient id="paint0_linear_campaign" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E2A77C"/>
          <stop offset="0.4" stop-color="#B16833"/>
          <stop offset="0.8" stop-color="#8B4714"/>
          <stop offset="1" stop-color="#592E0F"/>
        </linearGradient>
      </defs>
    </svg>`,
    },
    increase: {
        default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <rect x="2" y="2" width="76" height="76" rx="14" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <rect x="6" y="6" width="68" height="68" rx="10" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${PLUS_PATH}" clip-rule="evenodd" fill="#D4D4D8"/></g></svg>`,
        hover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <rect x="2" y="2" width="76" height="76" rx="14" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <rect x="6" y="6" width="68" height="68" rx="10" stroke="#FFF085" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${PLUS_PATH}" clip-rule="evenodd" fill="#FFF085"/></g></svg>`,
        active: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <rect x="2" y="2" width="76" height="76" rx="14" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <rect x="6" y="6" width="68" height="68" rx="10" stroke="#FDC700" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${PLUS_PATH}" clip-rule="evenodd" fill="#FDC700"/></g></svg>`,
    },
    decrease: {
        default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <rect x="2" y="2" width="76" height="76" rx="14" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <rect x="6" y="6" width="68" height="68" rx="10" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${MINUS_PATH}" clip-rule="evenodd" fill="#D4D4D8"/></g></svg>`,
        hover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <rect x="2" y="2" width="76" height="76" rx="14" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <rect x="6" y="6" width="68" height="68" rx="10" stroke="#FFF085" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${MINUS_PATH}" clip-rule="evenodd" fill="#FFF085"/></g></svg>`,
        active: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <rect x="2" y="2" width="76" height="76" rx="14" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <rect x="6" y="6" width="68" height="68" rx="10" stroke="#FDC700" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${MINUS_PATH}" clip-rule="evenodd" fill="#FDC700"/></g></svg>`,
    },
    first: {
        default: `
<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8778_38894)">
<g filter="url(#filter0_d_8778_38894)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7477 14.0014C26.3241 14.0014 31.4786 19.456 31.4786 26.0016C31.4786 32.729 26.1464 38.0018 19.7477 38.0018C13.1713 38.0018 8.0168 32.5471 8.0168 26.0016C7.66131 19.456 12.9935 14.0014 19.7477 14.0014Z" fill="url(#paint0_linear_8778_38894)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7477 14.0014C26.3241 14.0014 31.4786 19.456 31.4786 26.0016C31.4786 32.729 26.1464 38.0018 19.7477 38.0018C13.1713 38.0018 8.0168 32.5471 8.0168 26.0016C7.66131 19.456 12.9935 14.0014 19.7477 14.0014Z" stroke="#FEF9C2"/>
</g>
<path d="M22 19V32H19.4176V21.2915H19.3341L16 23.2339V21.0757L19.5429 19H22Z" fill="#09090B"/>
<g filter="url(#filter1_d_8778_38894)">
<path d="M19.779 2.27761C20.1494 2.2743 20.4626 2.58075 20.4537 2.95442C20.4612 3.18984 20.345 3.39659 20.1671 3.51791L23.8836 8.73704L29.8992 5.84185C29.8602 5.75696 29.8372 5.66333 29.8357 5.5658C29.8235 5.18501 30.1317 4.87795 30.5091 4.88866C30.8936 4.8786 31.2055 5.18452 31.1967 5.55797C31.209 5.93874 30.9016 6.24568 30.5243 6.23514C30.4381 6.23742 30.3562 6.22215 30.2811 6.19501L27.6382 14.1515C25.4706 13.0937 23.0417 12.4728 20.4656 12.4106C17.4333 12.3375 14.5652 13.0467 12.0581 14.3507L9.27434 6.24237C9.20441 6.26759 9.13025 6.2851 9.05248 6.2858C8.66074 6.28179 8.36981 5.98256 8.35743 5.60166C8.35235 5.23502 8.66083 4.92849 9.03825 4.93935C9.42279 4.9293 9.7347 5.23517 9.72585 5.60866C9.72708 5.69646 9.70882 5.78092 9.6776 5.85854L15.686 8.72465L19.3722 3.50341C19.204 3.38021 19.0951 3.18133 19.0917 2.96223C19.0794 2.58143 19.3944 2.28808 19.779 2.27761Z" fill="url(#paint1_linear_8778_38894)"/>
<path d="M19.779 2.27761L19.7769 2.02758L19.7723 2.02771L19.779 2.27761ZM20.4537 2.95442L20.2034 2.94857L20.2038 2.9625L20.4537 2.95442ZM20.1671 3.51791L20.0263 3.31139L19.8154 3.45519L19.9634 3.663L20.1671 3.51791ZM23.8836 8.73704L23.6799 8.88213L23.8021 9.05366L23.9919 8.96229L23.8836 8.73704ZM29.8992 5.84185L30.0075 6.0671L30.2287 5.96062L30.1264 5.73754L29.8992 5.84185ZM29.8357 5.5658L30.0857 5.56197L30.0856 5.55763L29.8357 5.5658ZM30.5091 4.88866L30.5018 5.13893L30.5155 5.13857L30.5091 4.88866ZM31.1967 5.55797L30.9464 5.55223L30.9468 5.56621L31.1967 5.55797ZM30.5243 6.23514L30.5314 5.98487L30.5178 5.98523L30.5243 6.23514ZM30.2811 6.19501L30.3661 5.95988L30.1248 5.8727L30.0438 6.11633L30.2811 6.19501ZM27.6382 14.1515L27.5285 14.3762L27.7854 14.5015L27.8755 14.2302L27.6382 14.1515ZM20.4656 12.4106L20.4718 12.1607L20.4718 12.1607L20.4656 12.4106ZM12.0581 14.3507L11.8216 14.432L11.9158 14.7065L12.1734 14.5725L12.0581 14.3507ZM9.27434 6.24237L9.5108 6.16107L9.42841 5.9211L9.18965 6.00721L9.27434 6.24237ZM9.05248 6.2858L9.04977 6.53583L9.05459 6.53579L9.05248 6.2858ZM8.35743 5.60166L8.10741 5.60527L8.10756 5.60992L8.35743 5.60166ZM9.03825 4.93935L9.03089 5.18962L9.04463 5.18926L9.03825 4.93935ZM9.72585 5.60866L9.47574 5.60288L9.47587 5.61232L9.72585 5.60866ZM9.6776 5.85854L9.44567 5.76537L9.35806 5.98316L9.56986 6.08419L9.6776 5.85854ZM15.686 8.72465L15.5783 8.9503L15.7686 9.04107L15.8902 8.86875L15.686 8.72465ZM19.3722 3.50341L19.5765 3.64751L19.7182 3.44677L19.52 3.30168L19.3722 3.50341ZM19.0917 2.96223L19.3417 2.95821L19.3416 2.95399L19.0917 2.96223ZM19.779 2.27761L19.781 2.5276C20.015 2.52551 20.2092 2.72081 20.2037 2.94857L20.4537 2.95442L20.7036 2.96027C20.7161 2.44069 20.2838 2.0231 19.7769 2.02762L19.779 2.27761ZM20.4537 2.95442L20.2038 2.9625C20.2084 3.10814 20.1372 3.23577 20.0263 3.31139L20.1671 3.51791L20.3078 3.72443C20.5528 3.5574 20.7139 3.27153 20.7035 2.94634L20.4537 2.95442ZM20.1671 3.51791L19.9634 3.663L23.6799 8.88213L23.8836 8.73704L24.0873 8.59195L20.3707 3.37282L20.1671 3.51791ZM23.8836 8.73704L23.9919 8.96229L30.0075 6.0671L29.8992 5.84185L29.7909 5.61659L23.7753 8.51179L23.8836 8.73704ZM29.8992 5.84185L30.1264 5.73754C30.1009 5.68181 30.0866 5.62226 30.0857 5.56197L29.8357 5.5658L29.5857 5.56964C29.5877 5.70441 29.6196 5.83211 29.6719 5.94616L29.8992 5.84185ZM29.8357 5.5658L30.0856 5.55763C30.078 5.32109 30.2683 5.13192 30.5019 5.13856L30.5091 4.88866L30.5163 4.63877C29.9952 4.62397 29.569 5.04894 29.5859 5.57397L29.8357 5.5658ZM30.5091 4.88866L30.5155 5.13857C30.7625 5.13211 30.9521 5.32689 30.9468 5.55224L31.1967 5.55797L31.4466 5.5637C31.4589 5.04215 31.0248 4.62508 30.5027 4.63875L30.5091 4.88866ZM31.1967 5.55797L30.9468 5.56621C30.9545 5.80299 30.7647 5.99176 30.5314 5.98524L30.5243 6.23514L30.5172 6.48503C31.0384 6.4996 31.4636 6.0745 31.4466 5.54973L31.1967 5.55797ZM30.5243 6.23514L30.5178 5.98523C30.4657 5.98661 30.4148 5.97745 30.3661 5.95988L30.2811 6.19501L30.196 6.43015C30.2976 6.46684 30.4106 6.48824 30.5308 6.48504L30.5243 6.23514ZM30.2811 6.19501L30.0438 6.11633L27.401 14.0728L27.6382 14.1515L27.8755 14.2302L30.5183 6.27369L30.2811 6.19501ZM27.6382 14.1515L27.748 13.9268C25.5487 12.8536 23.0845 12.2237 20.4718 12.1607L20.4656 12.4106L20.4594 12.6606C22.9988 12.7218 25.3925 13.3338 27.5285 14.3762L27.6382 14.1515ZM20.4656 12.4106L20.4718 12.1607C17.3963 12.0865 14.4864 12.8059 11.9428 14.129L12.0581 14.3507L12.1734 14.5725C14.6439 13.2875 17.4704 12.5885 20.4594 12.6606L20.4656 12.4106ZM12.0581 14.3507L12.2946 14.2694L9.5108 6.16107L9.27434 6.24237L9.03788 6.32367L11.8216 14.432L12.0581 14.3507ZM9.27434 6.24237L9.18965 6.00721C9.13751 6.02601 9.09201 6.03544 9.05037 6.03582L9.05248 6.2858L9.05459 6.53579C9.16849 6.53476 9.27131 6.50917 9.35903 6.47754L9.27434 6.24237ZM9.05248 6.2858L9.05519 6.03582C8.80181 6.03322 8.61548 5.84505 8.60731 5.5934L8.35743 5.60166L8.10756 5.60992C8.12414 6.12006 8.51968 6.53035 9.04977 6.53579L9.05248 6.2858ZM8.35743 5.60166L8.60741 5.59805C8.60432 5.37514 8.79431 5.18243 9.03091 5.18925L9.03825 4.93935L9.04559 4.68946C8.52735 4.67454 8.10038 5.09491 8.10745 5.60527L8.35743 5.60166ZM9.03825 4.93935L9.04463 5.18926C9.2917 5.18281 9.48125 5.37758 9.47592 5.60289L9.72585 5.60866L9.97578 5.61444C9.98814 5.09276 9.55388 4.6758 9.03186 4.68944L9.03825 4.93935ZM9.72585 5.60866L9.47587 5.61232C9.47658 5.66296 9.4661 5.71456 9.44567 5.76537L9.6776 5.85854L9.90954 5.95171C9.95154 5.84728 9.97759 5.72997 9.97583 5.605L9.72585 5.60866ZM9.6776 5.85854L9.56986 6.08419L15.5783 8.9503L15.686 8.72465L15.7938 8.499L9.78535 5.63289L9.6776 5.85854ZM15.686 8.72465L15.8902 8.86875L19.5765 3.64751L19.3722 3.50341L19.168 3.35931L15.4818 8.58054L15.686 8.72465ZM19.3722 3.50341L19.52 3.30168C19.4127 3.22311 19.3438 3.09633 19.3417 2.95821L19.0917 2.96223L18.8418 2.96625C18.8464 3.26633 18.9953 3.53731 19.2245 3.70514L19.3722 3.50341ZM19.0917 2.96223L19.3416 2.95399C19.3344 2.73119 19.5194 2.53476 19.7856 2.52751L19.779 2.27761L19.7723 2.02771C19.2695 2.04139 18.8244 2.43167 18.8419 2.97047L19.0917 2.96223Z" fill="#FEF9C2"/>
</g>
</g>
<defs>
<filter id="filter0_d_8778_38894" x="5.49994" y="12.5014" width="28.4787" height="29.0004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8778_38894"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8778_38894" result="shape"/>
</filter>
<filter id="filter1_d_8778_38894" x="6.10736" y="1.02759" width="27.3397" height="16.6789" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8778_38894"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8778_38894" result="shape"/>
</filter>
<linearGradient id="paint0_linear_8778_38894" x1="19.7393" y1="14.0014" x2="19.7393" y2="38.0018" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBEA"/>
<stop offset="0.628619" stop-color="#FED153"/>
<stop offset="1" stop-color="#F4B000"/>
</linearGradient>
<linearGradient id="paint1_linear_8778_38894" x1="19.8598" y1="2.27861" x2="19.5609" y2="14.5331" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFFBEA"/>
<stop offset="0.628619" stop-color="#FED153"/>
<stop offset="1" stop-color="#F4B000"/>
</linearGradient>
<clipPath id="clip0_8778_38894">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    second: {
        default: `<svg  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8588_53982)">
<g filter="url(#filter0_d_8588_53982)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5084 14.0013C27.0848 14.0013 32.2394 19.456 32.2394 26.0016C32.2394 32.729 26.9071 38.0018 20.5084 38.0018C13.9319 38.0018 8.77742 32.5472 8.77742 26.0016C8.42193 19.456 13.7542 14.0013 20.5084 14.0013Z" fill="url(#paint0_linear_8588_53982)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5084 14.0013C27.0848 14.0013 32.2394 19.456 32.2394 26.0016C32.2394 32.729 26.9071 38.0018 20.5084 38.0018C13.9319 38.0018 8.77742 32.5472 8.77742 26.0016C8.42193 19.456 13.7542 14.0013 20.5084 14.0013Z" stroke="#F5F5F5" stroke-width="0.5"/>
</g>
<path d="M15.6702 32.2618V30.3014L20.2962 26.0603C20.6896 25.6833 21.0196 25.3441 21.2861 25.0425C21.5569 24.7409 21.762 24.4456 21.9016 24.1565C22.0412 23.8633 22.111 23.5471 22.111 23.2078C22.111 22.8308 22.0243 22.5062 21.8509 22.2339C21.6774 21.9575 21.4405 21.7459 21.1402 21.5993C20.8398 21.4485 20.4993 21.3731 20.1185 21.3731C19.7209 21.3731 19.374 21.4527 19.0778 21.6119C18.7817 21.7711 18.5533 21.9993 18.3925 22.2967C18.2318 22.5941 18.1514 22.9481 18.1514 23.3586H15.5433C15.5433 22.5167 15.7358 21.7857 16.1208 21.1658C16.5058 20.5458 17.0451 20.0662 17.7389 19.7269C18.4327 19.3877 19.2322 19.218 20.1376 19.218C21.0682 19.218 21.8784 19.3814 22.5679 19.7081C23.2617 20.0306 23.8011 20.4788 24.1861 21.0527C24.571 21.6265 24.7635 22.2842 24.7635 23.0256C24.7635 23.5115 24.6662 23.9911 24.4716 24.4644C24.2812 24.9377 23.9407 25.4634 23.45 26.0415C22.9592 26.6153 22.2676 27.3044 21.3749 28.1086L19.4776 29.9496V30.0375H24.9348V32.2618H15.6702Z" fill="#09090B"/>
<g filter="url(#filter1_d_8588_53982)">
<path d="M20.54 2.27727C20.9101 2.27423 21.2225 2.58074 21.2138 2.95405C21.2214 3.18928 21.1057 3.39609 20.9281 3.51757L24.6437 8.73765L30.6592 5.84343C30.6201 5.75836 30.5973 5.66423 30.5958 5.56641C30.5835 5.18552 30.8927 4.87843 31.2701 4.8893C31.6546 4.87951 31.9657 5.18611 31.9567 5.55956C31.9686 5.94001 31.6615 6.24638 31.2844 6.23575C31.1982 6.23804 31.1163 6.22279 31.0412 6.19562L28.3983 14.1521C26.2306 13.0943 23.8017 12.4734 21.2257 12.4113C18.1933 12.3381 15.3253 13.0473 12.8182 14.3514L10.0344 6.24298C9.96448 6.2682 9.89032 6.28572 9.81255 6.28641C9.42084 6.28239 9.1299 5.98314 9.11751 5.60227C9.11231 5.23555 9.42086 4.92812 9.79834 4.93899C10.183 4.92892 10.4949 5.23569 10.4859 5.60927C10.4871 5.69694 10.4688 5.78066 10.4377 5.85817L16.4461 8.72526L20.1333 3.50404C19.9647 3.38091 19.8552 3.18216 19.8518 2.96284C19.8395 2.5819 20.1553 2.28753 20.54 2.27727Z" fill="url(#paint1_linear_8588_53982)"/>
<path d="M20.54 2.27727L20.5381 2.02724L20.5335 2.02736L20.54 2.27727ZM21.2138 2.95405L20.9634 2.94836L20.9639 2.96229L21.2138 2.95405ZM20.9281 3.51757L20.787 3.31126L20.5767 3.45514L20.7244 3.66261L20.9281 3.51757ZM24.6437 8.73765L24.44 8.88269L24.5621 9.05427L24.7519 8.96291L24.6437 8.73765ZM30.6592 5.84343L30.7675 6.0687L30.9891 5.96208L30.8863 5.73879L30.6592 5.84343ZM30.5958 5.56641L30.8458 5.56251L30.8457 5.55823L30.5958 5.56641ZM31.2701 4.8893L31.2628 5.13956L31.2764 5.13921L31.2701 4.8893ZM31.9567 5.55956L31.7064 5.55368L31.7069 5.5675L31.9567 5.55956ZM31.2844 6.23575L31.2916 5.98547L31.2779 5.98584L31.2844 6.23575ZM31.0412 6.19562L31.1263 5.9605L30.8849 5.87326L30.8039 6.11695L31.0412 6.19562ZM28.3983 14.1521L28.2886 14.3768L28.5454 14.5021L28.6356 14.2308L28.3983 14.1521ZM21.2257 12.4113L21.2318 12.1613V12.1613L21.2257 12.4113ZM12.8182 14.3514L12.5817 14.4327L12.6759 14.7071L12.9334 14.5731L12.8182 14.3514ZM10.0344 6.24298L10.2709 6.16168L10.1885 5.92172L9.94973 6.00781L10.0344 6.24298ZM9.81255 6.28641L9.80984 6.53644L9.81464 6.5364L9.81255 6.28641ZM9.11751 5.60227L8.86748 5.60596L8.86763 5.61055L9.11751 5.60227ZM9.79834 4.93899L9.79099 5.18926L9.80473 5.1889L9.79834 4.93899ZM10.4859 5.60927L10.2358 5.60342L10.2359 5.61292L10.4859 5.60927ZM10.4377 5.85817L10.2057 5.76511L10.1183 5.98281L10.3299 6.08381L10.4377 5.85817ZM16.4461 8.72526L16.3383 8.95089L16.5286 9.04169L16.6503 8.86939L16.4461 8.72526ZM20.1333 3.50404L20.3375 3.64817L20.4794 3.44718L20.2808 3.30213L20.1333 3.50404ZM19.8518 2.96284L20.1018 2.95877L20.1017 2.9546L19.8518 2.96284ZM20.54 2.27727L20.5419 2.52726C20.7753 2.52534 20.9691 2.72039 20.9638 2.94837L21.2138 2.95405L21.4637 2.95974C21.4758 2.44109 21.045 2.02312 20.5381 2.02728L20.54 2.27727ZM21.2138 2.95405L20.9639 2.96229C20.9686 3.108 20.8976 3.23565 20.787 3.31126L20.9281 3.51757L21.0692 3.72387C21.3138 3.55654 21.4742 3.27057 21.4636 2.94582L21.2138 2.95405ZM20.9281 3.51757L20.7244 3.66261L24.44 8.88269L24.6437 8.73765L24.8474 8.5926L21.1318 3.37252L20.9281 3.51757ZM24.6437 8.73765L24.7519 8.96291L30.7675 6.0687L30.6592 5.84343L30.5509 5.61817L24.5354 8.51238L24.6437 8.73765ZM30.6592 5.84343L30.8863 5.73879C30.861 5.68377 30.8467 5.62383 30.8458 5.56251L30.5958 5.56641L30.3458 5.57032C30.3478 5.70463 30.3791 5.83296 30.4321 5.94807L30.6592 5.84343ZM30.5958 5.56641L30.8457 5.55823C30.8381 5.322 31.0287 5.13245 31.2628 5.13919L31.2701 4.8893L31.2775 4.6394C30.7566 4.62441 30.329 5.04904 30.3459 5.57459L30.5958 5.56641ZM31.2701 4.8893L31.2764 5.13921C31.5227 5.13294 31.7123 5.32782 31.7068 5.55369L31.9567 5.55956L32.2067 5.56543C32.2192 5.04439 31.7864 4.62608 31.2639 4.63938L31.2701 4.8893ZM31.9567 5.55956L31.7069 5.5675C31.7142 5.8041 31.5247 5.99242 31.2916 5.98585L31.2844 6.23575L31.2772 6.48564C31.7982 6.50034 32.223 6.07592 32.2066 5.55162L31.9567 5.55956ZM31.2844 6.23575L31.2779 5.98584C31.2257 5.98722 31.1749 5.97808 31.1263 5.9605L31.0412 6.19562L30.9561 6.43074C31.0577 6.46749 31.1706 6.48885 31.2909 6.48565L31.2844 6.23575ZM31.0412 6.19562L30.8039 6.11695L28.1611 14.0734L28.3983 14.1521L28.6356 14.2308L31.2784 6.2743L31.0412 6.19562ZM28.3983 14.1521L28.5081 13.9274C26.3088 12.8542 23.8446 12.2243 21.2318 12.1613L21.2257 12.4113L21.2195 12.6612C23.7589 12.7224 26.1525 13.3345 28.2886 14.3768L28.3983 14.1521ZM21.2257 12.4113L21.2318 12.1613C18.1563 12.0872 15.2466 12.8065 12.7029 14.1296L12.8182 14.3514L12.9334 14.5731C15.404 13.288 18.2304 12.5891 21.2195 12.6612L21.2257 12.4113ZM12.8182 14.3514L13.0546 14.2701L10.2709 6.16168L10.0344 6.24298L9.79795 6.32428L12.5817 14.4327L12.8182 14.3514ZM10.0344 6.24298L9.94973 6.00781C9.89756 6.02663 9.85207 6.03606 9.81046 6.03643L9.81255 6.28641L9.81464 6.5364C9.92857 6.53538 10.0314 6.50977 10.1191 6.47815L10.0344 6.24298ZM9.81255 6.28641L9.81527 6.03643C9.56191 6.03383 9.37557 5.84564 9.36738 5.59399L9.11751 5.60227L8.86763 5.61055C8.88423 6.12064 9.27977 6.53095 9.80984 6.5364L9.81255 6.28641ZM9.11751 5.60227L9.36748 5.59859C9.36432 5.37525 9.55473 5.18208 9.791 5.18888L9.79834 4.93899L9.80568 4.68909C9.28698 4.67416 8.86031 5.09585 8.86753 5.60596L9.11751 5.60227ZM9.79834 4.93899L9.80473 5.1889C10.0514 5.18244 10.2414 5.37766 10.236 5.60342L10.4859 5.60927L10.7359 5.61512C10.7484 5.09371 10.3145 4.67541 9.79195 4.68908L9.79834 4.93899ZM10.4859 5.60927L10.2359 5.61292C10.2366 5.66306 10.2263 5.71395 10.2057 5.76511L10.4377 5.85817L10.6697 5.95123C10.7114 5.84737 10.7377 5.73081 10.7359 5.60563L10.4859 5.60927ZM10.4377 5.85817L10.3299 6.08381L16.3383 8.95089L16.4461 8.72526L16.5539 8.49962L10.5455 5.63253L10.4377 5.85817ZM16.4461 8.72526L16.6503 8.86939L20.3375 3.64817L20.1333 3.50404L19.9291 3.35991L16.2419 8.58113L16.4461 8.72526ZM20.1333 3.50404L20.2808 3.30213C20.173 3.22338 20.1039 3.09665 20.1018 2.95877L19.8518 2.96284L19.6018 2.96691C19.6065 3.26768 19.7564 3.53844 19.9858 3.70595L20.1333 3.50404ZM19.8518 2.96284L20.1017 2.9546C20.0944 2.73155 20.2804 2.53428 20.5465 2.52718L20.54 2.27727L20.5335 2.02736C20.0302 2.04078 19.5845 2.43225 19.6019 2.97108L19.8518 2.96284Z" fill="#F5F5F5"/>
</g>
</g>
<defs>
<filter id="filter0_d_8588_53982" x="6.51062" y="12.7513" width="27.9788" height="28.5005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8588_53982"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8588_53982" result="shape"/>
</filter>
<filter id="filter1_d_8588_53982" x="6.86743" y="1.02722" width="27.3397" height="16.6799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8588_53982"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8588_53982" result="shape"/>
</filter>
<linearGradient id="paint0_linear_8588_53982" x1="20.5" y1="14.0013" x2="20.5" y2="38.0018" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F5"/>
<stop offset="0.628619" stop-color="#D4D4D4"/>
<stop offset="1" stop-color="#A3A3A3"/>
</linearGradient>
<linearGradient id="paint1_linear_8588_53982" x1="20.6204" y1="2.27923" x2="20.3215" y2="14.5337" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F5"/>
<stop offset="0.628619" stop-color="#D4D4D4"/>
<stop offset="1" stop-color="#A3A3A3"/>
</linearGradient>
<clipPath id="clip0_8588_53982">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    third: {
        default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8588_54039)">
<g filter="url(#filter0_d_8588_54039)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7477 14.0014C26.3241 14.0014 31.4786 19.456 31.4786 26.0016C31.4786 32.729 26.1464 38.0018 19.7477 38.0018C13.1713 38.0018 8.0168 32.5471 8.0168 26.0016C7.66131 19.456 12.9935 14.0014 19.7477 14.0014Z" fill="url(#paint0_linear_8588_54039)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7477 14.0014C26.3241 14.0014 31.4786 19.456 31.4786 26.0016C31.4786 32.729 26.1464 38.0018 19.7477 38.0018C13.1713 38.0018 8.0168 32.5471 8.0168 26.0016C7.66131 19.456 12.9935 14.0014 19.7477 14.0014Z" stroke="#FAA365" stroke-width="0.5"/>
</g>
<g filter="url(#filter1_d_8588_54039)">
<path d="M19.7795 2.27702C20.1498 2.27373 20.462 2.58024 20.4532 2.95381C20.4608 3.1894 20.3456 3.3969 20.1675 3.5183L23.8841 8.73743L29.8987 5.84221C29.8597 5.75723 29.8376 5.66288 29.8362 5.56522C29.8242 5.18466 30.1315 4.87844 30.5086 4.88903C30.8933 4.87881 31.205 5.18477 31.1962 5.55834C31.2084 5.93907 30.9011 6.2462 30.5238 6.2355C30.4378 6.23776 30.3566 6.22152 30.2816 6.19443L27.6387 14.1519C25.4709 13.0939 23.0414 12.4731 20.4651 12.411C17.4332 12.338 14.5654 13.0464 12.0586 14.3502L9.27385 6.24274C9.20397 6.26792 9.1297 6.28548 9.05199 6.28617C8.66049 6.28194 8.37031 5.98278 8.35792 5.60205C8.35264 5.23537 8.6604 4.92808 9.03778 4.93874C9.42246 4.92863 9.73534 5.23541 9.72634 5.60905C9.72755 5.69678 9.70833 5.78037 9.67714 5.85793L15.6865 8.72406L19.3728 3.50282C19.2044 3.37958 19.0956 3.18086 19.0922 2.96164C19.0801 2.58084 19.3948 2.28725 19.7795 2.27702Z" fill="url(#paint1_linear_8588_54039)"/>
<path d="M19.7795 2.27702L19.7774 2.027L19.773 2.02712L19.7795 2.27702ZM20.4532 2.95381L20.2029 2.94803L20.2033 2.96205L20.4532 2.95381ZM20.1675 3.5183L20.0268 3.31178L19.8159 3.45558L19.9639 3.66339L20.1675 3.5183ZM23.8841 8.73743L23.6804 8.88252L23.8026 9.05406L23.9924 8.96267L23.8841 8.73743ZM29.8987 5.84221L30.007 6.06746L30.2283 5.96095L30.1259 5.73786L29.8987 5.84221ZM29.8362 5.56522L30.0863 5.56147L30.0861 5.55717L29.8362 5.56522ZM30.5086 4.88903L30.5014 5.1393L30.5151 5.13894L30.5086 4.88903ZM31.1962 5.55834L30.9459 5.55257L30.9463 5.56647L31.1962 5.55834ZM30.5238 6.2355L30.5311 5.98523L30.5174 5.98559L30.5238 6.2355ZM30.2816 6.19443L30.3666 5.95928L30.1253 5.87214L30.0443 6.11576L30.2816 6.19443ZM27.6387 14.1519L27.529 14.3766L27.7859 14.5019L27.876 14.2306L27.6387 14.1519ZM20.4651 12.411L20.4713 12.1611L20.4713 12.1611L20.4651 12.411ZM12.0586 14.3502L11.8222 14.4315L11.9164 14.7058L12.1739 14.5719L12.0586 14.3502ZM9.27385 6.24274L9.5103 6.1614L9.42791 5.92154L9.18921 6.00755L9.27385 6.24274ZM9.05199 6.28617L9.04914 6.5362L9.05408 6.53616L9.05199 6.28617ZM8.35792 5.60205L8.1079 5.6058L8.10805 5.61033L8.35792 5.60205ZM9.03778 4.93874L9.03056 5.18901L9.0442 5.18865L9.03778 4.93874ZM9.72634 5.60905L9.47623 5.60318L9.47636 5.61266L9.72634 5.60905ZM9.67714 5.85793L9.44519 5.76478L9.35762 5.98257L9.56941 6.08358L9.67714 5.85793ZM15.6865 8.72406L15.5788 8.94972L15.7691 9.04047L15.8908 8.86816L15.6865 8.72406ZM19.3728 3.50282L19.577 3.64693L19.7187 3.44617L19.5205 3.30108L19.3728 3.50282ZM19.0922 2.96164L19.3422 2.95771L19.3421 2.95353L19.0922 2.96164ZM19.7795 2.27702L19.7815 2.52701C20.0149 2.52494 20.2087 2.71979 20.2033 2.94804L20.4532 2.95381L20.7031 2.95958C20.7154 2.4407 20.2848 2.02253 19.7774 2.02704L19.7795 2.27702ZM20.4532 2.95381L20.2033 2.96205C20.2081 3.10875 20.1369 3.23667 20.0268 3.31178L20.1675 3.5183L20.3083 3.72482C20.5542 3.55714 20.7136 3.27005 20.7031 2.94557L20.4532 2.95381ZM20.1675 3.5183L19.9639 3.66339L23.6804 8.88252L23.8841 8.73743L24.0878 8.59234L20.3712 3.37321L20.1675 3.5183ZM23.8841 8.73743L23.9924 8.96267L30.007 6.06746L29.8987 5.84221L29.7903 5.61697L23.7758 8.51218L23.8841 8.73743ZM29.8987 5.84221L30.1259 5.73786C30.1012 5.68401 30.0871 5.62388 30.0862 5.56147L29.8362 5.56522L29.5863 5.56896C29.5882 5.70187 29.6182 5.83045 29.6714 5.94656L29.8987 5.84221ZM29.8362 5.56522L30.0861 5.55717C30.0786 5.3207 30.2681 5.13238 30.5014 5.13893L30.5086 4.88903L30.5158 4.63913C29.9949 4.62451 29.5698 5.04863 29.5864 5.57326L29.8362 5.56522ZM30.5086 4.88903L30.5151 5.13894C30.7621 5.13238 30.9516 5.32707 30.9463 5.55258L31.1962 5.55834L31.4461 5.5641C31.4585 5.04248 31.0245 4.62525 30.5021 4.63912L30.5086 4.88903ZM31.1962 5.55834L30.9463 5.56647C30.9539 5.80351 30.7641 5.99221 30.531 5.98561L30.5238 6.2355L30.5166 6.4854C31.0382 6.50019 31.4628 6.07463 31.4461 5.5502L31.1962 5.55834ZM30.5238 6.2355L30.5174 5.98559C30.4675 5.9869 30.4175 5.97764 30.3666 5.95928L30.2816 6.19443L30.1966 6.42957C30.2958 6.4654 30.408 6.48862 30.5302 6.48541L30.5238 6.2355ZM30.2816 6.19443L30.0443 6.11576L27.4015 14.0732L27.6387 14.1519L27.876 14.2306L30.5189 6.2731L30.2816 6.19443ZM27.6387 14.1519L27.7485 13.9272C25.549 12.8538 23.0843 12.2241 20.4713 12.1611L20.4651 12.411L20.4589 12.6609C22.9986 12.7222 25.3928 13.3341 27.529 14.3766L27.6387 14.1519ZM20.4651 12.411L20.4713 12.1611C17.3962 12.087 14.4867 12.8056 11.9434 14.1284L12.0586 14.3502L12.1739 14.5719C14.6441 13.2872 17.4702 12.5889 20.4589 12.6609L20.4651 12.411ZM12.0586 14.3502L12.2951 14.2688L9.5103 6.1614L9.27385 6.24274L9.0374 6.32407L11.8222 14.4315L12.0586 14.3502ZM9.27385 6.24274L9.18921 6.00755C9.13703 6.02636 9.09143 6.03581 9.04991 6.03618L9.05199 6.28617L9.05408 6.53616C9.16797 6.53514 9.2709 6.50949 9.35849 6.47792L9.27385 6.24274ZM9.05199 6.28617L9.05484 6.03619C8.80189 6.03345 8.61599 5.84559 8.60779 5.59377L8.35792 5.60205L8.10805 5.61033C8.12463 6.11998 8.51909 6.53042 9.04914 6.53615L9.05199 6.28617ZM8.35792 5.60205L8.6079 5.5983C8.60468 5.37477 8.7946 5.18197 9.03057 5.18864L9.03778 4.93874L9.04499 4.68885C8.52621 4.67418 8.1006 5.09598 8.10794 5.6058L8.35792 5.60205ZM9.03778 4.93874L9.0442 5.18865C9.29141 5.18216 9.48183 5.37783 9.47641 5.60318L9.72634 5.60905L9.97627 5.61492C9.98884 5.093 9.55352 4.67511 9.03136 4.68883L9.03778 4.93874ZM9.72634 5.60905L9.47636 5.61266C9.47703 5.6612 9.4665 5.71178 9.44519 5.76478L9.67714 5.85793L9.90909 5.95107C9.95015 5.84896 9.97807 5.73237 9.97632 5.60545L9.72634 5.60905ZM9.67714 5.85793L9.56941 6.08358L15.5788 8.94972L15.6865 8.72406L15.7943 8.4984L9.78487 5.63227L9.67714 5.85793ZM15.6865 8.72406L15.8908 8.86816L19.577 3.64693L19.3728 3.50282L19.1685 3.35872L15.4823 8.57996L15.6865 8.72406ZM19.3728 3.50282L19.5205 3.30108C19.4131 3.22244 19.3443 3.09583 19.3422 2.95771L19.0922 2.96164L18.8423 2.96557C18.8468 3.26589 18.9957 3.53673 19.225 3.70457L19.3728 3.50282ZM19.0922 2.96164L19.3421 2.95353C19.335 2.73037 19.52 2.534 19.786 2.52693L19.7795 2.27702L19.773 2.02712C19.2696 2.04049 18.8252 2.43132 18.8424 2.96976L19.0922 2.96164Z" fill="#FAA365"/>
</g>
<path d="M19.7509 32.001C18.8922 32.001 18.1273 31.8424 17.4564 31.5252C16.7893 31.2039 16.2621 30.7632 15.8749 30.203C15.4915 29.6387 15.2941 28.9878 15.2826 28.2505H17.7899C17.8053 28.5594 17.8992 28.8313 18.0717 29.0661C18.2481 29.2968 18.4819 29.4759 18.7733 29.6036C19.0647 29.7313 19.3925 29.7952 19.7567 29.7952C20.1362 29.7952 20.4717 29.7231 20.7631 29.5789C21.0544 29.4348 21.2826 29.235 21.4474 28.9796C21.6123 28.7242 21.6947 28.4297 21.6947 28.096C21.6947 27.7583 21.6065 27.4596 21.4302 27.2001C21.2576 26.9365 21.0084 26.7305 20.6826 26.5823C20.3605 26.434 19.9771 26.3598 19.5324 26.3598H18.434V24.395H19.5324C19.9081 24.395 20.2398 24.325 20.5273 24.1849C20.8187 24.0449 21.0449 23.8513 21.2059 23.6041C21.3669 23.3528 21.4474 23.0604 21.4474 22.7267C21.4474 22.4096 21.3765 22.1315 21.2346 21.8926C21.0966 21.6496 20.9011 21.4601 20.6481 21.3242C20.3989 21.1882 20.1075 21.1203 19.7739 21.1203C19.4366 21.1203 19.1279 21.1862 18.8481 21.318C18.5682 21.4457 18.3439 21.629 18.1752 21.8679C18.0065 22.1068 17.9164 22.3869 17.9049 22.7082H15.5184C15.5299 21.9791 15.7235 21.3365 16.0992 20.7804C16.4749 20.2244 16.981 19.7898 17.6174 19.4767C18.2577 19.1596 18.9803 19.001 19.7854 19.001C20.5982 19.001 21.3094 19.1596 21.919 19.4767C22.5286 19.7939 23.002 20.2223 23.3394 20.7619C23.6806 21.2974 23.8493 21.8988 23.8455 22.5661C23.8493 23.2746 23.6442 23.8657 23.2301 24.3394C22.8199 24.8131 22.2851 25.1138 21.6257 25.2415V25.3403C22.4921 25.4598 23.1516 25.7831 23.6039 26.3104C24.0602 26.8335 24.2864 27.4885 24.2825 28.2752C24.2864 28.9961 24.0928 29.6366 23.7017 30.1968C23.3145 30.757 22.7797 31.1977 22.0972 31.519C21.4148 31.8403 20.6327 32.001 19.7509 32.001Z" fill="#09090B"/>
</g>
<defs>
<filter id="filter0_d_8588_54039" x="5.75" y="12.7514" width="27.9786" height="28.5004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8588_54039"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8588_54039" result="shape"/>
</filter>
<filter id="filter1_d_8588_54039" x="6.10785" y="1.02698" width="27.3387" height="16.6789" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8588_54039"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8588_54039" result="shape"/>
</filter>
<linearGradient id="paint0_linear_8588_54039" x1="19.7393" y1="14.0014" x2="19.7393" y2="38.0018" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9AA71"/>
<stop offset="0.514424" stop-color="#CD7739"/>
<stop offset="0.8" stop-color="#924E1C"/>
<stop offset="1" stop-color="#7C4217"/>
</linearGradient>
<linearGradient id="paint1_linear_8588_54039" x1="19.8598" y1="2.27898" x2="19.5609" y2="14.5335" gradientUnits="userSpaceOnUse">
<stop stop-color="#BF8A64"/>
<stop offset="0.4" stop-color="#AC6532"/>
<stop offset="0.8" stop-color="#924E1C"/>
<stop offset="1" stop-color="#7C4217"/>
</linearGradient>
<clipPath id="clip0_8588_54039">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    music: {
        default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <!-- Out Frame: Circular button background -->
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_autoplay)" filter="url(#filter0_i_autoplay)"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8"" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${SPEAKER_WAVE_DEFAULT_PATH}" clip-rule="evenodd" fill="#D4D4D8"/></g>
      <defs>
        <filter id="filter0_i_autoplay" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_autoplay"/>
        </filter>
        <linearGradient id="paint0_linear_autoplay" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6A6A6A"/>
          <stop offset="0.4" stop-color="#424242"/>
          <stop offset="0.8" stop-color="#343434"/>
          <stop offset="1" stop-color="#303030"/>
        </linearGradient>
      </defs>
    </svg>`,
        pressed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <!-- Out Frame: Circular button background -->
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_autoplay)" filter="url(#filter0_i_autoplay)"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8"" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${SPEAKER_WAVE_PRESSED_PATH}" clip-rule="evenodd" fill="#D4D4D8"/></g>
      <defs>
        <filter id="filter0_i_autoplay" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_autoplay"/>
        </filter>
        <linearGradient id="paint0_linear_autoplay" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6A6A6A"/>
          <stop offset="0.4" stop-color="#424242"/>
          <stop offset="0.8" stop-color="#343434"/>
          <stop offset="1" stop-color="#303030"/>
        </linearGradient>
      </defs>
    </svg>`,
    },
    'icon-badge': {
        default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9742_36179)">
<circle cx="20" cy="20" r="20" fill="#09090B"/>
<circle cx="20" cy="20" r="16" fill="white"/>
<circle cx="20" cy="20" r="12" fill="#DC2626"/>
</g>
<defs>
<clipPath id="clip0_9742_36179">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    blank: {
        default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16, 16) scale(0.57)">
    `,
    },
};
//# sourceMappingURL=ap-icon-all.js.map