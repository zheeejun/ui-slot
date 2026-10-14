import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

interface Coin {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  size: number;
  shouldRotate: boolean;
  swayDistance: number;
}

@Component({
  selector: 'ap-cashdrop-win',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ap-cashdrop-win.component.html',
  styleUrl: './ap-cashdrop-win.component.css',
})
export class ApCashdropWinComponent implements OnInit, OnDestroy {
  coins = signal<Coin[]>([]);
  timeLeft = signal('00:00');
  currentProgress = signal(0);
  totalProgress = signal(10);
  winAmount = signal(0.0);
  private timerSubscription?: Subscription;
  private coinIntervalId?: number;
  private coinIntervalStartTimeoutId?: number;
  // 時間倒數
  private endTime: number = Date.now() + 5 * 60 * 1000;
  private readonly maxCoins = 30;
  private timeUp = false;

  ngOnInit() {
    this.restartRun();
  }

  ngOnDestroy() {
    this.timerSubscription?.unsubscribe();
    this.stopCoinFlow();
  }

  private restartRun() {
    this.timeUp = false;
    this.stopCoinFlow();
    this.timerSubscription?.unsubscribe();
    this.coins.set([]);
    this.endTime = Date.now() + 5 * 60 * 1000;
    this.generateCoins();
    this.startCountdown();
  }

  private generateCoins() {
    const coinArray: Coin[] = [];
    const initialCoinCount = 10; // Start with more coins
    const spawnIntervalMs = 500; // Faster spawn rate
    const intervalStartDelayMs = 1000; // Shorter initial delay
    // 生成金幣
    for (let i = 0; i < initialCoinCount; i++) {
      coinArray.push(
        this.createCoin({
          size: 80,
          rotateThreshold: 0.25,
          delayMax: 4,
          swayMin: 10,
          swayRange: 20,
        })
      );
    }

    this.coins.set(coinArray);

    this.coinIntervalStartTimeoutId = window.setTimeout(() => {
      this.coinIntervalId = window.setInterval(() => {
        if (this.timeUp) {
          return;
        }
        const currentCoins = this.coins();
        // 新增一個金幣，並確保不超過最大數量
        const newCoin: Coin = {
          ...this.createCoin({
            rotateThreshold: 0.4,
            delayMax: 1,
            swayMin: 8,
            swayRange: 16,
          }),
        };
        // 更新金幣陣列
        const updatedCoins =
          currentCoins.length >= this.maxCoins
            ? [...currentCoins.slice(1), newCoin]
            : [...currentCoins, newCoin];
        this.coins.set(updatedCoins);
      }, spawnIntervalMs);
    }, intervalStartDelayMs);
  }

  onCoinClick(coinId: number) {
    this.replaceCoin(coinId);

    // 增加贏取金額
    const randomWin = Math.random() * 10 + 1;
    this.winAmount.set(this.winAmount() + randomWin);

    // 增加進度計數器
    if (this.currentProgress() < this.totalProgress()) {
      this.currentProgress.set(this.currentProgress() + 1);
    }
  }

  private startCountdown() {
    this.timerSubscription = interval(100).subscribe(() => {
      const now = Date.now();
      const remaining = Math.max(0, this.endTime - now);

      if (remaining === 0) {
        this.timeLeft.set('00:00');
        this.timerSubscription?.unsubscribe();
        this.timeUp = true;
        this.stopCoinFlow();
        return;
      }

      const minutes = Math.floor(remaining / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);
      const milliseconds = Math.floor((remaining % 1000) / 10);

      this.timeLeft.set(
        `${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`
      );
    });
  }

  setEndTime(minutes: number) {
    this.endTime = Date.now() + minutes * 60 * 1000;
  }

  private replaceCoin(coinId: number) {
    if (this.timeUp) {
      return;
    }
    this.coins.update((current) => {
      const remaining = current.filter((coin) => coin.id !== coinId);
      return [
        ...remaining,
        this.createCoin({
          rotateThreshold: 0.4,
          delayMax: 1,
          swayMin: 8,
          swayRange: 16,
        }),
      ];
    });
  }

  handleAnimationEnd(event: AnimationEvent, coinId: number) {
    if (event.animationName === 'fall') {
      this.replaceCoin(coinId);
    }
  }

  private stopCoinFlow() {
    if (this.coinIntervalId !== undefined) {
      clearInterval(this.coinIntervalId);
      this.coinIntervalId = undefined;
    }
    if (this.coinIntervalStartTimeoutId !== undefined) {
      clearTimeout(this.coinIntervalStartTimeoutId);
      this.coinIntervalStartTimeoutId = undefined;
    }
  }

  private createCoin(options?: {
    size?: number;
    rotateThreshold?: number;
    delayMax?: number;
    swayMin?: number;
    swayRange?: number;
  }): Coin {
    const {
      size = 60,
      rotateThreshold = 0.4,
      delayMax = 2,
      swayMin = 8,
      swayRange = 16,
    } = options || {};

    return {
      id: Date.now() + Math.random(),
      left: Math.random() * 100,
      animationDelay: Math.random() * delayMax,
      animationDuration: 5.5 + Math.random() * 1.5,
      size,
      shouldRotate: Math.random() > rotateThreshold,
      swayDistance: swayMin + Math.random() * swayRange,
    };
  }
}
