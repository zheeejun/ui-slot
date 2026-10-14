import { Component, computed, signal, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { ApInputBox } from "../../../ap-components-lib/ap-input-box/ap-input-box";

import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApUiTabGroupComponent } from "../../components/ap-ui-tab-group/ap-ui-tab-group.component";
import { TabItem } from '../../components/ap-ui-tab-group/ap-ui-tab-group.interface';
import { droppingPlannerSetting } from '../../../chiikawa/DroppingBlock/DroppingPlannerSettingInterface';
import { rollingPlannerSetting } from '../../../chiikawa/RollingReel/RollingPlannerStiingInterface';
import { ApSelectComponent } from "../../../ap-components-lib/ap-select/ap-select.component";
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { LoggerService } from '../../services/logger/logger.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';

@Component({
  selector: 'slot-reel-setting',
  imports: [ApInputBox, ApButtonComponent, ApUiTabGroupComponent, ApSelectComponent],
  templateUrl: './slot-reel-setting.component.html',
  styleUrl: './slot-reel-setting.component.css'
})
export class SlotReelSettingComponent implements OnInit, OnDestroy {
  showPanel = signal(true);
  private destroy$ = new Subject<void>();
  showRolling = computed(() => this.selectedTab() === 'rolling');
  showDropping = computed(() => this.selectedTab() === 'dropping');
  showGameParameter = computed(() => this.selectedTab() === 'gameParameter');
  showDemoTestCase = computed(() => this.selectedTab() === 'demoTestCase');
  selectedTab = signal('default');
  // Rolling Planner Settings
  symbolSpinTimes1 = signal(1);
  symbolSpinTimes2 = signal(1);
  symbolSpinTimes3 = signal(1);
  startUpTimes1 = signal(1);
  startUpTimes2 = signal(1);
  startUpTimes3 = signal(1);
  startUpDistances1 = signal(1);
  startUpDistances2 = signal(1);
  startUpDistances3 = signal(1);
  startDownTimes1 = signal(1);
  startDownTimes2 = signal(1);
  startDownTimes3 = signal(1);
  startDelays1 = signal(0);
  startDelays2 = signal(0);
  startDelays3 = signal(0);
  startDelayInterval1 = signal(0);
  startDelayInterval2 = signal(0);
  startDelayInterval3 = signal(0);
  endTimes1 = signal(1);
  endTimes2 = signal(1);
  endTimes3 = signal(1);
  endUpTimes1 = signal(1);
  endUpTimes2 = signal(1);
  endUpTimes3 = signal(1);
  endDownTimes1 = signal(1);
  endDownTimes2 = signal(1);
  endDownTimes3 = signal(1);
  endBottomDistances1 = signal(1);
  endBottomDistances2 = signal(1);
  endBottomDistances3 = signal(1);
  endTopDistances1 = signal(1);
  endTopDistances2 = signal(1);
  endTopDistances3 = signal(1);
  expectEndTime = signal(1);
  expectEndUpTime = signal(1);
  expectEndDownTime = signal(1);
  expectEndBottomDistance = signal(1);
  expectEndTopDistance = signal(1);
  nearMissDistance = signal(0);
  nearMissTime = signal(0);
  luckyBreakDistance = signal(0);
  luckyBreakTime = signal(0);
  spinCounts1 = signal(1);
  spinCounts2 = signal(1);
  spinCounts3 = signal(1);
  extraSpinCounts1 = signal(0);
  extraSpinCounts2 = signal(0);
  extraSpinCounts3 = signal(0);
  spinCountInterval1 = signal(0);
  spinCountInterval2 = signal(0);
  spinCountInterval3 = signal(0);
  // Dropping Planner Settings
  dropInTimes1 = signal(1);
  dropInTimes2 = signal(1);
  dropInTimes3 = signal(1);
  dropInSybmolIntervals1 = signal(0);
  dropInSybmolIntervals2 = signal(0);
  dropInSybmolIntervals3 = signal(0);
  dropInReelIntervals1 = signal(0);
  dropInReelIntervals2 = signal(0);
  dropInReelIntervals3 = signal(0);
  dropOutTimes1 = signal(1);
  dropOutTimes2 = signal(1);
  dropOutTimes3 = signal(1);
  dropOutSymbolIntervals1 = signal(0);
  dropOutSymbolIntervals2 = signal(0);
  dropOutSymbolIntervals3 = signal(0);
  dropOutReelIntervals1 = signal(0);
  dropOutReelIntervals2 = signal(0);
  dropOutReelIntervals3 = signal(0);
  moveTimePerSymbol1 = signal(1);
  moveTimePerSymbol2 = signal(1);
  moveTimePerSymbol3 = signal(1);
  moveSymbolIntervals1 = signal(0);
  moveSymbolIntervals2 = signal(0);
  moveSymbolIntervals3 = signal(0);
  moveReelIntervals1 = signal(0);
  moveReelIntervals2 = signal(0);
  moveReelIntervals3 = signal(0);
  // Game Parameter Settings
  debugWinScore = signal(0);
  debugWinType = signal(0);
  // demo test case settings
  demoCaseName = signal<string | null>("null");

  tabs = signal<TabItem[]>([
  ]);
  selects = signal<ApSelectOption[]>([
    { value: '0', label: 'None' },
    { value: '4', label: 'BigWin' },
    { value: '5', label: 'SuperWin' },
    { value: '6', label: 'MegaWin' }
  ]);
  demoSelects = signal<ApSelectOption[]>([
    { value: 'null', label: 'None' },
    { value: 'demo1', label: 'Demo Case 1' },
    { value: 'demo2', label: 'Demo Case 2' },
    { value: 'demo3', label: 'Demo Case 3' }
  ]);



  formatNumberStr(val: any): number {
    return (Math.round(+val * 100) / 100);
  }

  constructor(protected game: GameIframeCtrlService, private logger: LoggerService) {
    // 初始化更新
    game.rollingSettings.forEach(this.updateRollingSetting.bind(this));
    game.droppingSettings.forEach(this.updateDroppingSetting.bind(this));
    
    this.tabs.set([...this.tabs(),
      { id: 'gameParameter', label: 'Parameter' },
      { id: 'demoTestCase', label: 'Demo' }
    ]);
    this.selectedTab.set('gameParameter');
  }

  ngOnInit(): void {
    // 收到message更新
    this.game.RollingSetting$
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.updateRollingSetting.bind(this));
    this.game.DroppingSetting$
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.updateDroppingSetting.bind(this));
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  /** 初始化或是收到message都要更新 Rolling Setting */
  updateRollingSetting(setting: rollingPlannerSetting) {
    this.setRollingData(setting);
    this.tabs.set([...this.tabs(),
      { id: 'rolling', label: 'Rolling' },
    ]);
    if(this.selectedTab() === 'default')
      this.selectedTab.set('rolling');
  }

  /** 初始化或是收到message都要更新 Dropping Setting */
  updateDroppingSetting(setting: droppingPlannerSetting) {
      this.setDroppingData(setting);
      this.tabs.set([...this.tabs(),
        { id: 'dropping', label: 'Dropping' },
      ]);
      if(this.selectedTab() === 'default')
        this.selectedTab.set('dropping');
  }

  setRollingData(settings: rollingPlannerSetting){
    this.symbolSpinTimes1.set(settings.symbolSpinTimes[0]);
    this.symbolSpinTimes2.set(settings.symbolSpinTimes[1]);
    this.symbolSpinTimes3.set(settings.symbolSpinTimes[2]);
    
    this.startUpTimes1.set(settings.startUpTimes[0]);
    this.startUpTimes2.set(settings.startUpTimes[1]);
    this.startUpTimes3.set(settings.startUpTimes[2]);
    
    this.startUpDistances1.set(settings.startUpDistances[0]);
    this.startUpDistances2.set(settings.startUpDistances[1]);
    this.startUpDistances3.set(settings.startUpDistances[2]);
    
    this.startDownTimes1.set(settings.startDownTimes[0]);
    this.startDownTimes2.set(settings.startDownTimes[1]);
    this.startDownTimes3.set(settings.startDownTimes[2]);
    
    this.startDelays1.set(settings.startDelays[0]);
    this.startDelays2.set(settings.startDelays[1]);
    this.startDelays3.set(settings.startDelays[2]);
    
    this.startDelayInterval1.set(settings.startDelayInterval[0]);
    this.startDelayInterval2.set(settings.startDelayInterval[1]);
    this.startDelayInterval3.set(settings.startDelayInterval[2]);
    
    this.endTimes1.set(settings.endTimes[0]);
    this.endTimes2.set(settings.endTimes[1]);
    this.endTimes3.set(settings.endTimes[2]);
    
    this.endUpTimes1.set(settings.endUpTimes[0]);
    this.endUpTimes2.set(settings.endUpTimes[1]);
    this.endUpTimes3.set(settings.endUpTimes[2]);
    
    this.endDownTimes1.set(settings.endDownTimes[0]);
    this.endDownTimes2.set(settings.endDownTimes[1]);
    this.endDownTimes3.set(settings.endDownTimes[2]);
    
    this.endBottomDistances1.set(settings.endBottomDistances[0]);
    this.endBottomDistances2.set(settings.endBottomDistances[1]);
    this.endBottomDistances3.set(settings.endBottomDistances[2]);
    
    this.endTopDistances1.set(settings.endTopDistances[0]);
    this.endTopDistances2.set(settings.endTopDistances[1]);
    this.endTopDistances3.set(settings.endTopDistances[2]);
    
    this.expectEndTime.set(settings.expectEndTime);
    this.expectEndUpTime.set(settings.expectEndUpTime);
    this.expectEndDownTime.set(settings.expectEndDownTime);
    this.expectEndBottomDistance.set(settings.expectEndBottomDistance);
    this.expectEndTopDistance.set(settings.expectEndTopDistance);
    
    this.nearMissDistance.set(settings.nearMissDistance);
    this.nearMissTime.set(settings.nearMissTime);
    
    this.luckyBreakDistance.set(settings.luckyBreakDistance);
    this.luckyBreakTime.set(settings.luckyBreakTime);
    
    this.spinCounts1.set(settings.spinCounts[0]);
    this.spinCounts2.set(settings.spinCounts[1]);
    this.spinCounts3.set(settings.spinCounts[2]);
    
    this.extraSpinCounts1.set(settings.extraSpinCounts[0]);
    this.extraSpinCounts2.set(settings.extraSpinCounts[1]);
    this.extraSpinCounts3.set(settings.extraSpinCounts[2]);
    
    this.spinCountInterval1.set(settings.spinCountInterval[0]);
    this.spinCountInterval2.set(settings.spinCountInterval[1]);
    this.spinCountInterval3.set(settings.spinCountInterval[2]);
  }

  setDroppingData(settings: droppingPlannerSetting){
    this.dropInTimes1.set(settings.dropInTimes[0]);
    this.dropInTimes2.set(settings.dropInTimes[1]);
    this.dropInTimes3.set(settings.dropInTimes[2]);
    
    this.dropInSybmolIntervals1.set(settings.dropInSybmolIntervals[0]);
    this.dropInSybmolIntervals2.set(settings.dropInSybmolIntervals[1]);
    this.dropInSybmolIntervals3.set(settings.dropInSybmolIntervals[2]);
    
    this.dropInReelIntervals1.set(settings.dropInReelIntervals[0]);
    this.dropInReelIntervals2.set(settings.dropInReelIntervals[1]);
    this.dropInReelIntervals3.set(settings.dropInReelIntervals[2]);
    
    this.dropOutTimes1.set(settings.dropOutTimes[0]);
    this.dropOutTimes2.set(settings.dropOutTimes[1]);
    this.dropOutTimes3.set(settings.dropOutTimes[2]);
    
    this.dropOutSymbolIntervals1.set(settings.dropOutSymbolIntervals[0]);
    this.dropOutSymbolIntervals2.set(settings.dropOutSymbolIntervals[1]);
    this.dropOutSymbolIntervals3.set(settings.dropOutSymbolIntervals[2]);
    
    this.dropOutReelIntervals1.set(settings.dropOutReelIntervals[0]);
    this.dropOutReelIntervals2.set(settings.dropOutReelIntervals[1]);
    this.dropOutReelIntervals3.set(settings.dropOutReelIntervals[2]);
    
    this.moveTimePerSymbol1.set(settings.moveTimePerSymbol[0]);
    this.moveTimePerSymbol2.set(settings.moveTimePerSymbol[1]);
    this.moveTimePerSymbol3.set(settings.moveTimePerSymbol[2]);
    
    this.moveReelIntervals1.set(settings.moveReelIntervals[0]);
    this.moveReelIntervals2.set(settings.moveReelIntervals[1]);
    this.moveReelIntervals3.set(settings.moveReelIntervals[2]);
  }

  onTabChange(tabId: string) {
    this.selectedTab.set(tabId);
  }

  onSelectChange(value: string) {
    this.debugWinType.set(+value);
  }

  onSelectDemoChange(value: string | null ) {
    if(value === 'null'){
      this.demoCaseName.set(null);
    }else{
      this.demoCaseName.set(value);
    }
  }

  localRollingSettings = computed<rollingPlannerSetting>(() => {
    return {
      symbolSpinTimes: [
        this.symbolSpinTimes1(), this.symbolSpinTimes2(), this.symbolSpinTimes3()],
      startUpTimes: [
        this.startUpTimes1(), this.startUpTimes2(), this.startUpTimes3()],
      startUpDistances: [
        this.startUpDistances1(), this.startUpDistances2(), this.startUpDistances3()],
      startDownTimes: [
        this.startDownTimes1(), this.startDownTimes2(), this.startDownTimes3()],
      startDelays: [
        this.startDelays1(), this.startDelays2(), this.startDelays3()],
      startDelayInterval: [
        this.startDelayInterval1(), this.startDelayInterval2(), this.startDelayInterval3()],
      endTimes: [
        this.endTimes1(), this.endTimes2(), this.endTimes3()],
      endUpTimes: [
        this.endUpTimes1(), this.endUpTimes2(), this.endUpTimes3()],
      endDownTimes: [
        this.endDownTimes1(), this.endDownTimes2(), this.endDownTimes3()],
      endBottomDistances: [
        this.endBottomDistances1(), this.endBottomDistances2(), this.endBottomDistances3()],
      endTopDistances: [
        this.endTopDistances1(), this.endTopDistances2(), this.endTopDistances3()],
      expectEndTime: this.expectEndTime(),
      expectEndUpTime: this.expectEndUpTime(),
      expectEndDownTime: this.expectEndDownTime(),
      expectEndBottomDistance: this.expectEndBottomDistance(),
      expectEndTopDistance: this.expectEndTopDistance(),
      nearMissDistance: this.nearMissDistance(),
      nearMissTime: this.nearMissTime(),
      luckyBreakDistance: this.luckyBreakDistance(),
      luckyBreakTime: this.luckyBreakTime(),
      spinCounts: [
        this.spinCounts1(), this.spinCounts2(), this.spinCounts3()],
      extraSpinCounts: [
        this.extraSpinCounts1(), this.extraSpinCounts2(), this.extraSpinCounts3()],
      spinCountInterval: [
        this.spinCountInterval1(), this.spinCountInterval2(), this.spinCountInterval3()]
    };
  });

  localRollingString = computed(() =>{
    return this.formatJsonWithInlineArrays(this.localRollingSettings())
  })
  

  applyRollingSettings() {
    this.game.send({ type: 'RollingSetting', content: this.localRollingSettings() });
  }

  updateRollingFromJson(event: Event) {
    try {
      const target = event.target as HTMLTextAreaElement;
      const settings = JSON.parse(target.value) as rollingPlannerSetting;
      this.setRollingData(settings);
    } catch (e) {
      this.logger.error('Invalid JSON for rolling settings', e);
    }
  }

  localDroppingSettings = computed<droppingPlannerSetting>(() => {
    return {
      dropInTimes: [
        this.dropInTimes1(), this.dropInTimes2(), this.dropInTimes3()],
      dropInSybmolIntervals: [
        this.dropInSybmolIntervals1(), this.dropInSybmolIntervals2(), this.dropInSybmolIntervals3()],
      dropInReelIntervals: [
        this.dropInReelIntervals1(), this.dropInReelIntervals2(), this.dropInReelIntervals3()],
      dropOutTimes: [
        this.dropOutTimes1(), this.dropOutTimes2(), this.dropOutTimes3()],
      dropOutSymbolIntervals: [
        this.dropOutSymbolIntervals1(), this.dropOutSymbolIntervals2(), this.dropOutSymbolIntervals3()],
      dropOutReelIntervals: [
        this.dropOutReelIntervals1(), this.dropOutReelIntervals2(), this.dropOutReelIntervals3()],
      moveTimePerSymbol: [
        this.moveTimePerSymbol1(), this.moveTimePerSymbol2(), this.moveTimePerSymbol3()],
      moveSymbolIntervals: [
        this.moveSymbolIntervals1(), this.moveSymbolIntervals2(), this.moveSymbolIntervals3()],
      moveReelIntervals: [
        this.moveReelIntervals1(), this.moveReelIntervals2(), this.moveReelIntervals3()]
    };
  });

  localDroppingString = computed(() =>{
    return this.formatJsonWithInlineArrays(this.localDroppingSettings())
  })

  applyDroppingSettings() {
    this.game.send({ type: 'DroppingSetting', content: this.localDroppingSettings() });
  }

  updateDroppingFromJson(event: Event) {
    try {
      const target = event.target as HTMLTextAreaElement;
      const settings = JSON.parse(target.value) as droppingPlannerSetting;
      this.setDroppingData(settings);
    } catch (e) {
      this.logger.error('Invalid JSON for dropping settings', e);
    }
  }

  private formatJsonWithInlineArrays(obj: any): string {
    const json = JSON.stringify(obj, null, 2);
    // 將陣列格式化為單行
    return json.replace(/\[\s+([^\]]+)\s+\]/g, (match, content) => {
      // 移除陣列內容中的換行和多餘空格
      const cleaned = content.replace(/\s+/g, ' ').trim();
      return `[${cleaned}]`;
    });
  }

  // Game Parameter Settings
  applyGameParameterSettings() {
    this.game.send({ type: 'GameParameterSetting', content: { debugWinScore: this.debugWinScore(), debugWinType: this.debugWinType() } });
  }

  // demo test case settings
  applyDemoTestCaseSettings() {
    this.game.send({ type: 'GameDemoTestCase', content: { demoTestCaseName: this.demoCaseName() } });
  }
}
