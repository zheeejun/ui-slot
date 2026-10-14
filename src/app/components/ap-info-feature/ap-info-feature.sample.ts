/**
 * Sample data for ap-info-feature component
 */

// Sample 1: Avalanche Reels (from the image)
export const avalancheReelsFeature = {
  title: 'Avalanche Reels',
  description:
    'After winning a combination, all the winning symbols will explode allowing the symbols above them to cascade down.',
  symbolImages: [
    'assets/images/symbols/scatter.png',
    'assets/images/symbols/wild.png',
    'assets/images/symbols/gem-green.png',
    'assets/images/symbols/heart-pink.png',
  ],
};

// Sample 2: Free Spins Feature
export const freeSpinsFeature = {
  title: 'Free Spins',
  description:
    'Land 3 or more scatter symbols to trigger free spins. During free spins, all wins are multiplied by 3x.',
  symbolImages: [
    'assets/images/symbols/scatter.png',
    'assets/images/symbols/scatter.png',
    'assets/images/symbols/scatter.png',
  ],
};

// Sample 3: Wild Multiplier (text only, no images)
export const wildMultiplierFeature = {
  title: 'Wild Multiplier',
  description:
    'Wild symbols substitute for all symbols except scatter. When part of a winning combination, they apply a random multiplier up to 5x.',
  symbolImages: [],
};

// Sample 4: Bonus Game
export const bonusGameFeature = {
  title: 'Bonus Game',
  description:
    'Collect bonus symbols during gameplay to unlock the special bonus round where you can win up to 1000x your bet!',
  symbolImages: ['assets/images/symbols/bonus.png'],
};

// Sample 5: Progressive Jackpot
export const progressiveJackpotFeature = {
  title: 'Progressive Jackpot',
  description:
    'Every spin contributes to the progressive jackpot pool. Land 5 jackpot symbols on a payline to win the entire jackpot amount.',
  symbolImages: [
    'assets/images/symbols/jackpot.png',
    'assets/images/symbols/jackpot.png',
    'assets/images/symbols/jackpot.png',
    'assets/images/symbols/jackpot.png',
    'assets/images/symbols/jackpot.png',
  ],
};

/**
 * Complete usage examples:
 *
 * In your component.ts:
 * ```typescript
 * import { avalancheReelsFeature } from './ap-info-feature.sample';
 *
 * export class YourComponent {
 *   avalancheFeature = avalancheReelsFeature;
 * }
 * ```
 *
 * In your template.html:
 * ```html
 * <!-- Example 1: With Images (default) -->
 * <ap-info-feature
 *   [title]="'Avalanche Reels'"
 *   [description]="'After winning a combination, all the winning symbols will explode allowing the symbols above them to cascade down.'"
 *   [symbolImages]="[
 *     'assets/images/symbols/scatter.png',
 *     'assets/images/symbols/wild.png',
 *     'assets/images/symbols/gem-green.png',
 *     'assets/images/symbols/heart-pink.png'
 *   ]"
 *   [variant]="'with-images'"
 * />
 *
 * <!-- Example 2: Text Only (no images) -->
 * <ap-info-feature
 *   [title]="'Wild Multiplier'"
 *   [description]="'Wild symbols substitute for all symbols except scatter.'"
 *   [variant]="'text-only'"
 * />
 *
 * <!-- Example 3: Using sample data -->
 * <ap-info-feature
 *   [title]="avalancheFeature.title"
 *   [description]="avalancheFeature.description"
 *   [symbolImages]="avalancheFeature.symbolImages"
 * />
 *
 * <!-- Example 4: Custom colors and sizes -->
 * <ap-info-feature
 *   [title]="'Free Spins'"
 *   [description]="'Land 3 or more scatter symbols to trigger free spins.'"
 *   [symbolImages]="freeSpinsFeature.symbolImages"
 *   [backgroundColor]="'bg-purple-900'"
 *   [titleColor]="'text-yellow-300'"
 *   [textColor]="'text-gray-100'"
 *   [symbolSize]="'w-16 h-16'"
 * />
 *
 * <!-- Example 5: Multiple features in a list -->
 * <div class="flex flex-col gap-6">
 *   <ap-info-feature
 *     [title]="avalancheReelsFeature.title"
 *     [description]="avalancheReelsFeature.description"
 *     [symbolImages]="avalancheReelsFeature.symbolImages"
 *   />
 *   <ap-info-feature
 *     [title]="freeSpinsFeature.title"
 *     [description]="freeSpinsFeature.description"
 *     [symbolImages]="freeSpinsFeature.symbolImages"
 *   />
 *   <ap-info-feature
 *     [title]="bonusGameFeature.title"
 *     [description]="bonusGameFeature.description"
 *     [symbolImages]="bonusGameFeature.symbolImages"
 *   />
 * </div>
 *
 * <!-- Example 6: Show number of symbols -->
 * <!-- When you have multiple of the same symbol, the component automatically displays them -->
 * <ap-info-feature
 *   [title]="'Progressive Jackpot'"
 *   [description]="'Land 5 jackpot symbols to win!'"
 *   [symbolImages]="progressiveJackpotFeature.symbolImages"
 * />
 * <!-- This will show 5 jackpot symbol images -->
 * ```
 */
