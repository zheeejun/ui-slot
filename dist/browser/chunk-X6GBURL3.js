import {
  MoneyTextPipe
} from "./chunk-6XO7DG7K.js";
import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import {
  ApButtonComponent
} from "./chunk-3HIHH7J6.js";
import {
  ApIconComponent
} from "./chunk-YL37OG34.js";
import {
  ClientSessionService
} from "./chunk-B2M5HODU.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  isPlatformBrowser
} from "./chunk-FH2ESRL7.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  computed,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  isObservable,
  of,
  output,
  pairwise,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  takeUntil,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QGU3BS3L.js";

// node_modules/@angular/cdk/fesm2022/element.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/platform2.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  _platformId = inject(PLATFORM_ID);
  // We want to use the Angular platform check because if the Document is shimmed
  // without the navigator, the following checks will fail. This is preferred because
  // sometimes the Document may be shimmed without the user's knowledge or intention
  /** Whether the Angular application is being rendered in the browser. */
  isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
  /** Whether the current browser is Microsoft Edge. */
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  /** Whether the current rendering engine is Microsoft Trident. */
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
  /** Whether the current rendering engine is Blink. */
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
  // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
  // ensure that Webkit runs standalone and is not used as another engine's base.
  /** Whether the current rendering engine is WebKit. */
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  /** Whether the current platform is Apple iOS. */
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
  // It's difficult to detect the plain Gecko engine, because most of the browsers identify
  // them self as Gecko-like browsers and modify the userAgent's according to that.
  // Since we only cover one explicit Firefox case, we can simply check for Firefox
  // instead of having an unstable check for Gecko.
  /** Whether the current browser is Firefox. */
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  /** Whether the current platform is Android. */
  // Trident on mobile adds the android platform to the userAgent to trick detections.
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
  // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
  // Safari browser should also use Webkit as its layout engine.
  /** Whether the current browser is Safari. */
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  constructor() {
  }
  static \u0275fac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Platform,
    factory: _Platform.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/directionality.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  /** The current 'ltr' or 'rtl' value. */
  get value() {
    return this.valueSignal();
  }
  /**
   * The current 'ltr' or 'rtl' value.
   */
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Directionality,
    factory: _Directionality.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling2.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  /** Whether the `value` has been set to its initial value. */
  _isInitialized = false;
  /** Direction as passed in by the consumer. */
  _rawDir;
  /** Event emitted when the direction changes. */
  change = new EventEmitter();
  /** @docs-private */
  get dir() {
    return this.valueSignal();
  }
  set dir(value) {
    const previousValue = this.valueSignal();
    this.valueSignal.set(_resolveDirectionality(value));
    this._rawDir = value;
    if (previousValue !== this.valueSignal() && this._isInitialized) {
      this.change.emit(this.valueSignal());
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static \u0275fac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/data-source.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}

// node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy.mjs
var ArrayDataSource = class extends DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _RecycleViewRepeaterStrategy = class {
  /**
   * The size of the cache used to store unused views.
   * Setting the cache size to `0` will disable caching. Defaults to 20 views.
   */
  viewCacheSize = 20;
  /**
   * View cache that stores embedded view instances that have been previously stamped out,
   * but don't are not currently rendered. The view repeater will reuse these views rather than
   * creating brand new ones.
   *
   * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
   */
  _viewCache = [];
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  _scrolledIndexChange = new Subject();
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
  /** The attached viewport. */
  _viewport = null;
  /** The size of the items in the virtually scrolling list. */
  _itemSize;
  /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
  _minBufferPx;
  /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
  _maxBufferPx;
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  _itemSize = 20;
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  _minBufferPx = 100;
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  _maxBufferPx = 200;
  /** The scroll strategy used by this directive. */
  _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static \u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFixedSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
    inputs: {
      itemSize: "itemSize",
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: _fixedSizeVirtualScrollStrategyFactory,
      deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupGlobalListener;
  constructor() {
  }
  /** Subject for notifying that a registered scrollable reference element has been scrolled. */
  _scrolled = new Subject();
  /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
  _scrolledCount = 0;
  /**
   * Map of all the scrollable references that are registered with the service and their
   * scroll event subscriptions.
   */
  scrollContainers = /* @__PURE__ */ new Map();
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._cleanupGlobalListener) {
        this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._cleanupGlobalListener?.();
          this._cleanupGlobalListener = void 0;
        }
      };
    });
  }
  ngOnDestroy() {
    this._cleanupGlobalListener?.();
    this._cleanupGlobalListener = void 0;
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  static \u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollDispatcher,
    factory: _ScrollDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkScrollable = class _CdkScrollable {
  elementRef = inject(ElementRef);
  scrollDispatcher = inject(ScrollDispatcher);
  ngZone = inject(NgZone);
  dir = inject(Directionality, {
    optional: true
  });
  _scrollElement = this.elementRef.nativeElement;
  _destroyed = new Subject();
  _renderer = inject(Renderer2);
  _cleanupScroll;
  _elementScrolled = new Subject();
  constructor() {
  }
  ngOnInit() {
    this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this._cleanupScroll?.();
    this._elementScrolled.complete();
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static \u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkScrollable,
    selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]"
    }]
  }], () => [], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  _platform = inject(Platform);
  _listeners;
  /** Cached viewport dimensions. */
  _viewportSize;
  /** Stream of viewport change events. */
  _change = new Subject();
  /** Used to reference correct document/window */
  _document = inject(DOCUMENT);
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    ngZone.runOutsideAngular(() => {
      if (this._platform.isBrowser) {
        const changeListener = (event) => this._change.next(event);
        this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    this._listeners?.forEach((cleanup) => cleanup());
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output2 = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output2;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static \u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportRuler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ViewportRuler,
    factory: _ViewportRuler.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor() {
    super();
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static \u0275fac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollable,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
    optional: true
  });
  scrollable = inject(VIRTUAL_SCROLLABLE, {
    optional: true
  });
  _platform = inject(Platform);
  /** Emits when the viewport is detached from a CdkVirtualForOf. */
  _detachedSubject = new Subject();
  /** Emits when the rendered range changes. */
  _renderedRangeSubject = new Subject();
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  _orientation = "vertical";
  /**
   * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
   * will be removed.
   */
  appendOnly = false;
  // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
  // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
  // depending on how the strategy calculates the scrolled index, it may come at a cost to
  // performance.
  /** Emits when the index of the first element visible in the viewport changes. */
  scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
  /** The element that wraps the rendered content. */
  _contentWrapper;
  /** A stream that emits whenever the rendered range changes. */
  renderedRangeStream = this._renderedRangeSubject;
  /**
   * The total size of all content (in pixels), including content that is not currently rendered.
   */
  _totalContentSize = 0;
  /** A string representing the `style.width` property value to be used for the spacer element. */
  _totalContentWidth = signal("", ...ngDevMode ? [{
    debugName: "_totalContentWidth"
  }] : []);
  /** A string representing the `style.height` property value to be used for the spacer element. */
  _totalContentHeight = signal("", ...ngDevMode ? [{
    debugName: "_totalContentHeight"
  }] : []);
  /**
   * The CSS transform applied to the rendered subset of items so that they appear within the bounds
   * of the visible viewport.
   */
  _renderedContentTransform;
  /** The currently rendered range of indices. */
  _renderedRange = {
    start: 0,
    end: 0
  };
  /** The length of the data bound to this viewport (in number of items). */
  _dataLength = 0;
  /** The size of the viewport (in pixels). */
  _viewportSize = 0;
  /** the currently attached CdkVirtualScrollRepeater. */
  _forOf;
  /** The last rendered content offset that was set. */
  _renderedContentOffset = 0;
  /**
   * Whether the last rendered content offset was to the end of the content (and therefore needs to
   * be rewritten as an offset to the start of the content).
   */
  _renderedContentOffsetNeedsRewrite = false;
  _changeDetectionNeeded = signal(false, ...ngDevMode ? [{
    debugName: "_changeDetectionNeeded"
  }] : []);
  /** A list of functions to run after the next change detection cycle. */
  _runAfterChangeDetection = [];
  /** Subscription to changes in the viewport size. */
  _viewportChanges = Subscription.EMPTY;
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    const viewportRuler = inject(ViewportRuler);
    if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
    const ref = effect(() => {
      if (this._changeDetectionNeeded()) {
        this._doChangeDetection();
      }
    }, ...ngDevMode ? [{
      debugName: "ref",
      injector: inject(ApplicationRef).injector
    }] : [
      // Using ApplicationRef injector is important here because we want this to be a root
      // effect that runs before change detection of any application views (since we're depending on markForCheck marking parents dirty)
      {
        injector: inject(ApplicationRef).injector
      }
    ]);
    inject(DestroyRef).onDestroy(() => void ref.destroy());
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (untracked(this._changeDetectionNeeded)) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this.ngZone.run(() => {
          this._changeDetectionNeeded.set(true);
        });
      });
    });
  }
  /** Run change detection. */
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      afterNextRender(() => {
        this._changeDetectionNeeded.set(false);
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
    this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
  }
  static \u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkVirtualScrollViewport,
    selectors: [["cdk-virtual-scroll-viewport"]],
    viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t.first);
      }
    },
    hostAttrs: [1, "cdk-virtual-scroll-viewport"],
    hostVars: 4,
    hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
      }
    },
    inputs: {
      orientation: "orientation",
      appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
    },
    outputs: {
      scrolledIndexChange: "scrolledIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
      deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 4,
    consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
    template: function CdkVirtualScrollViewport_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
      }
    },
    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"]
    }]
  }], () => [], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  _viewContainerRef = inject(ViewContainerRef);
  _template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
  _viewport = inject(CdkVirtualScrollViewport, {
    skipSelf: true
  });
  /** Emits when the rendered view of the data changes. */
  viewChange = new Subject();
  /** Subject that emits when a new DataSource instance is given. */
  _dataSourceChanges = new Subject();
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  _cdkVirtualForOf;
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  _cdkVirtualForTrackBy;
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  /** Emits whenever the data in the current DataSource changes. */
  dataStream = this._dataSourceChanges.pipe(
    // Start off with null `DataSource`.
    startWith(null),
    // Bundle up the previous and current data sources so we can work with both.
    pairwise(),
    // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
    // Replay the last emitted data when someone subscribes.
    shareReplay(1)
  );
  /** The differ used to calculate changes to the data. */
  _differ = null;
  /** The most recent data emitted from the DataSource. */
  _data;
  /** The currently rendered items. */
  _renderedItems;
  /** The currently rendered range of indices. */
  _renderedRange;
  /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
  _needsUpdate = false;
  _destroyed = new Subject();
  constructor() {
    const ngZone = inject(NgZone);
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static \u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualForOf)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualForOf,
    selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
    inputs: {
      cdkVirtualForOf: "cdkVirtualForOf",
      cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
      cdkVirtualForTemplate: "cdkVirtualForTemplate",
      cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _RecycleViewRepeaterStrategy
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], () => [], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor() {
    super();
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static \u0275fac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableElement)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableElement,
    selectors: [["", "cdkVirtualScrollingElement", ""]],
    hostAttrs: [1, "cdk-virtual-scrollable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableElement
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor() {
    super();
    const document2 = inject(DOCUMENT);
    this.elementRef = new ElementRef(document2.documentElement);
    this._scrollElement = document2;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static \u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableWindow,
    selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableWindow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]
    }]
  }], () => [], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static \u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkScrollableModule,
    imports: [CdkScrollable],
    exports: [CdkScrollable]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static \u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollingModule,
    imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
    exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// src/app/components/ap-history-list/ap-history-list.component.ts
var _c02 = (a0, a1) => ({ "hover:text-yellow-200": a0, "hover:text-slate-400": a1 });
var _c12 = (a0, a1) => ({ "text-yellow-300/80": a0, "text-slate-300": a1 });
var _c2 = () => ({ addSpace: false });
function ApHistoryListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "col", 4);
  }
}
function ApHistoryListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "col", 5);
  }
}
function ApHistoryListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeLabel(), " ");
  }
}
function ApHistoryListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.otherLabel(), " ");
  }
}
function ApHistoryListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "time", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c12, ctx_r1.accentColor() === "yellow", ctx_r1.accentColor() === "slate"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.historyDateRange(), " ");
  }
}
function ApHistoryListComponent_Conditional_29_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "col", 4);
  }
}
function ApHistoryListComponent_Conditional_29_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "col", 5);
  }
}
function ApHistoryListComponent_Conditional_29_tr_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 30);
  }
  if (rf & 2) {
    \u0275\u0275property("name", "star");
  }
}
function ApHistoryListComponent_Conditional_29_tr_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 31);
  }
  if (rf & 2) {
    \u0275\u0275property("name", "trophy");
  }
}
function ApHistoryListComponent_Conditional_29_tr_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Conditional_11_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r9 = \u0275\u0275nextContext();
      const item_r6 = ctx_r9.$implicit;
      const i_r7 = ctx_r9.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.emitDetail(item_r6, i_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(item_r6), " ");
  }
}
function ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Conditional_2_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const item_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReplay(item_r6, $event));
    });
    \u0275\u0275element(2, "ap-icon", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Conditional_2_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const item_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReplay(item_r6, $event));
    });
    \u0275\u0275element(4, "ap-icon", 41);
    \u0275\u0275elementEnd();
  }
}
function ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Conditional_3_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const item_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onShare(item_r6, $event));
    });
    \u0275\u0275element(2, "ap-icon", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Conditional_3_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const item_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onShare(item_r6, $event));
    });
    \u0275\u0275element(4, "ap-icon", 44);
    \u0275\u0275elementEnd();
  }
}
function ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 15);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r9 = \u0275\u0275nextContext();
      const item_r6 = ctx_r9.$implicit;
      const i_r7 = ctx_r9.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.emitDetail(item_r6, i_r7));
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275conditionalCreate(2, ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Conditional_2_Template, 5, 0);
    \u0275\u0275conditionalCreate(3, ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Conditional_3_Template, 5, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showReplayButton(item_r6) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showShareButton(item_r6) ? 3 : -1);
  }
}
function ApHistoryListComponent_Conditional_29_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 27)(1, "td", 28);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Template_td_click_1_listener() {
      const ctx_r4 = \u0275\u0275restoreView(_r4);
      const item_r6 = ctx_r4.$implicit;
      const i_r7 = ctx_r4.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.emitDetail(item_r6, i_r7));
    });
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275conditionalCreate(3, ApHistoryListComponent_Conditional_29_tr_10_Conditional_3_Template, 1, 1, "ap-icon", 30);
    \u0275\u0275conditionalCreate(4, ApHistoryListComponent_Conditional_29_tr_10_Conditional_4_Template, 1, 1, "ap-icon", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Template_td_click_5_listener() {
      const ctx_r7 = \u0275\u0275restoreView(_r4);
      const item_r6 = ctx_r7.$implicit;
      const i_r7 = ctx_r7.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.emitDetail(item_r6, i_r7));
    });
    \u0275\u0275elementStart(6, "div", 32)(7, "div", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, ApHistoryListComponent_Conditional_29_tr_10_Conditional_11_Template, 2, 1, "td", 13);
    \u0275\u0275elementStart(12, "td", 15);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Template_td_click_12_listener() {
      const ctx_r10 = \u0275\u0275restoreView(_r4);
      const item_r6 = ctx_r10.$implicit;
      const i_r7 = ctx_r10.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.emitDetail(item_r6, i_r7));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "moneyText");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 35);
    \u0275\u0275listener("click", function ApHistoryListComponent_Conditional_29_tr_10_Template_td_click_15_listener() {
      const ctx_r11 = \u0275\u0275restoreView(_r4);
      const item_r6 = ctx_r11.$implicit;
      const i_r7 = ctx_r11.index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.emitDetail(item_r6, i_r7));
    });
    \u0275\u0275elementStart(16, "div", 36)(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "moneyText");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(20, ApHistoryListComponent_Conditional_29_tr_10_Conditional_20_Template, 4, 2, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", i_r7 % 2 === 1 ? "bg-zinc-900 hover:bg-zinc-300/15" : "bg-zinc-800 hover:bg-zinc-300/15");
    \u0275\u0275attribute("data-testid", "history-list-item-" + i_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r6.isTrnHighlight ? i_r7 % 2 === 0 ? "border-l-3 border-yellow-300" : "border-l-3  border-yellow-500" : item_r6.isCashDropHighlight ? i_r7 % 2 === 0 ? "border-l-3 border-lime-400" : "border-l-3 border-lime-600" : item_r6.isCampaignHighlight ? i_r7 % 2 === 0 ? "border-l-3 border-purple-400" : "border-l-3 border-purple-600" : "");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r6.isStarred ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r6.isTrophy ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTypeColumn() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-testid", "history-list-item-" + i_r7 + "-bet");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 14, item_r6.bet, \u0275\u0275pureFunction0(20, _c2)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r6.isWin ? "text-emerald-400 hover:text-emerald-300" : "");
    \u0275\u0275attribute("data-testid", "history-list-item-" + i_r7 + "-win");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 17, item_r6.win, \u0275\u0275pureFunction0(21, _c2)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showOtherColumn() ? 20 : -1);
  }
}
function ApHistoryListComponent_Conditional_29_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementStart(2, "label", 46);
    \u0275\u0275text(3, "Loading more...");
    \u0275\u0275elementEnd()();
  }
}
function ApHistoryListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 21);
    \u0275\u0275listener("scroll", function ApHistoryListComponent_Conditional_29_Template_cdk_virtual_scroll_viewport_scroll_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewportScroll());
    });
    \u0275\u0275elementStart(1, "table", 22)(2, "colgroup");
    \u0275\u0275element(3, "col", 23)(4, "col");
    \u0275\u0275conditionalCreate(5, ApHistoryListComponent_Conditional_29_Conditional_5_Template, 1, 0, "col", 4);
    \u0275\u0275element(6, "col")(7, "col");
    \u0275\u0275conditionalCreate(8, ApHistoryListComponent_Conditional_29_Conditional_8_Template, 1, 0, "col", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "tbody", 24);
    \u0275\u0275template(10, ApHistoryListComponent_Conditional_29_tr_10_Template, 21, 22, "tr", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, ApHistoryListComponent_Conditional_29_Conditional_11_Template, 4, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("itemSize", 52);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.showTypeColumn() ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showOtherColumn() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("cdkVirtualForOf", ctx_r1.sortedList());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoadingMore() ? 11 : -1);
  }
}
function ApHistoryListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 47)(2, "div", 48);
    \u0275\u0275element(3, "ap-icon", 49);
    \u0275\u0275elementStart(4, "time");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("name", "x-mark");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.emptyStateLabel());
  }
}
var ApHistoryListComponent = class _ApHistoryListComponent {
  i18n = inject(AppI18nService);
  session = inject(ClientSessionService);
  isGhana = computed(() => this.session.isGhanaUI);
  accentColor = input("yellow");
  list = input([]);
  isLoadingMore = input(false);
  showTypeColumn = input(true);
  showOtherColumn = input(true);
  /** EX: GMT+08:00 */
  zoneString = signal("GMT+08:00");
  dateLabel = this.i18n.computed("history_date", "DATE");
  betLabel = this.i18n.computed(this.isGhana() ? "og_bet_info_stake" : "history_bet", "BET");
  typeLabel = this.i18n.computed("history_type", "TYPE");
  otherLabel = this.i18n.computed("history_others", "OTHERS");
  emptyStateLabel = this.i18n.computed("history_no_records_text", "No records available.");
  maxPayoutLabel = this.i18n.computed("og_maxPayout", "Max Payout");
  winLabelText = this.i18n.computed("history_win", "WIN");
  loseLabelText = this.i18n.computed("history_lose", "LOSE");
  winLoseLabelText = this.i18n.computed("history_win_lose", "WIN/LOSE");
  winLoseLabel = computed(() => {
    const filter2 = this.filterWinLose();
    if (filter2 === "win")
      return this.winLabelText();
    if (filter2 === "lose")
      return this.loseLabelText();
    return this.winLoseLabelText();
  });
  forcedReplayButton = input(false);
  forcedShareButton = input(false);
  serverReplayEnabled = input(true);
  share = output();
  replay = output();
  detail = output();
  openCalendar = output();
  //dateRangeChange = output<DateRange | null>();
  winLoseLabelClick = output();
  scrollNearEnd = output();
  // 新增：滚动接近底部时触发
  historyDateRange = input("");
  viewport;
  sortDirection = signal("desc");
  sortType = signal("date");
  filterWinLose = signal("winlose");
  //showCalendar = signal<boolean>(false);
  //selectedDateRange = signal<DateRange | null>(null);
  copyTransaction = output();
  /* 取消GMT */
  constructor() {
    const offsetMinutes = (/* @__PURE__ */ new Date()).getTimezoneOffset();
    const offsetHours = -offsetMinutes / 60;
    const sign = offsetHours >= 0 ? "+" : "-";
    const absOffsetHours = Math.abs(offsetHours);
    const hours = Math.floor(absOffsetHours);
    const minutes = (absOffsetHours - hours) * 60;
    this.zoneString.set(`GMT${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);
  }
  onViewportScroll() {
    if (!this.viewport || this.isLoadingMore())
      return;
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    if (end >= total - 5) {
      this.scrollNearEnd.emit();
    }
  }
  onReplay(item, event) {
    event?.stopPropagation();
    this.replay.emit(item);
  }
  onShare(item, event) {
    event?.stopPropagation();
    this.share.emit(item);
  }
  onClickCopyTransaction(item, event) {
    event?.stopPropagation();
    this.copyTransaction.emit(item.transaction);
  }
  emitDetail(item, index) {
    this.detail.emit(__spreadProps(__spreadValues({}, item), {
      detailTheme: index % 2 === 1 ? "dark" : "gray"
      // 以 index 奇偶性決定 detailTheme，確保相鄰項目有不同的背景色,
    }));
  }
  showReplayButton(item) {
    if (this.forcedReplayButton())
      return true;
    return this.serverReplayEnabled() && item.replay;
  }
  showShareButton(item) {
    if (this.forcedShareButton())
      return true;
    return this.serverReplayEnabled() && item.replay;
  }
  getDateSortIcon() {
    if (this.sortType() !== "date") {
      return "bars-arrow-down";
    }
    return this.sortDirection() === "asc" ? "bars-arrow-up" : "bars-arrow-down";
  }
  getBetSortIcon() {
    if (this.sortType() !== "bet") {
      return "bars-arrow-down";
    }
    return this.sortDirection() === "asc" ? "bars-arrow-up" : "bars-arrow-down";
  }
  onWinLoseFilterClick() {
    const current = this.filterWinLose();
    if (current === "winlose") {
      this.filterWinLose.set("win");
    } else if (current === "win") {
      this.filterWinLose.set("lose");
    } else {
      this.filterWinLose.set("winlose");
    }
    this.winLoseLabelClick.emit(this.filterWinLose());
  }
  getWinLoseTitle() {
    const filter2 = this.filterWinLose();
    if (filter2 === "win")
      return "WIN";
    if (filter2 === "lose")
      return "LOSE";
    return "WIN/LOSE";
  }
  // Display Label
  campaignRewardLabel = this.i18n.computed("history_bonus_withdraw", "Bonus Withdraw");
  cashDropRewardLabel = this.i18n.computed("cashdrop_D1_1", "CashDrop Reward");
  normalGamelabel = this.i18n.computed("history_normal_game", "normal game");
  freeGameLabel = this.i18n.computed("history_free_game", "free games");
  defaultDoubleChanceLabel = this.i18n.computed("history_double_chance", "Double Chance");
  defaultBuyFeatureLabel = this.i18n.computed("BuyFeature_EventCenter_Tab", "Buy Feature");
  getTypeLabel(item) {
    if (item.rewardType === "CashDrop Reward")
      return this.cashDropRewardLabel();
    if (item.rewardType === "Bonus Withdraw")
      return this.campaignRewardLabel();
    if (item.isDoubleChance) {
      return this.i18n.instantGame(`buyfeature_${item.buyFeatureMode}_title`, this.defaultDoubleChanceLabel());
    }
    ;
    if (item.isBuyFeature) {
      return this.defaultBuyFeatureLabel();
    }
    ;
    return this.normalGamelabel();
  }
  sortedList = computed(() => {
    let items = [...this.list()];
    const direction = this.sortDirection();
    const sortType = this.sortType();
    return items.sort((a, b) => {
      if (sortType === "date") {
        const dateTimeA = this.parseItemDateTime(a.date, a.time);
        const dateTimeB = this.parseItemDateTime(b.date, b.time);
        if (direction === "asc") {
          return dateTimeA.getTime() - dateTimeB.getTime();
        } else {
          return dateTimeB.getTime() - dateTimeA.getTime();
        }
      } else if (sortType === "bet") {
        const betA = a.bet;
        const betB = b.bet;
        if (direction === "asc") {
          return betA - betB;
        } else {
          return betB - betA;
        }
      }
      return 0;
    });
  });
  parseItemDateTime(date, time) {
    const isoString = `${(date || "").trim()}T${(time || "").trim()}`;
    const parsed = new Date(isoString);
    return isNaN(parsed.getTime()) ? new Date(date) : parsed;
  }
  toggleCalendar(event) {
    event?.stopPropagation();
    this.openCalendar.emit();
  }
  static \u0275fac = function ApHistoryListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApHistoryListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApHistoryListComponent, selectors: [["ap-history-list"]], viewQuery: function ApHistoryListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(CdkVirtualScrollViewport, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewport = _t.first);
    }
  }, inputs: { accentColor: [1, "accentColor"], list: [1, "list"], isLoadingMore: [1, "isLoadingMore"], showTypeColumn: [1, "showTypeColumn"], showOtherColumn: [1, "showOtherColumn"], forcedReplayButton: [1, "forcedReplayButton"], forcedShareButton: [1, "forcedShareButton"], serverReplayEnabled: [1, "serverReplayEnabled"], historyDateRange: [1, "historyDateRange"] }, outputs: { share: "share", replay: "replay", detail: "detail", openCalendar: "openCalendar", winLoseLabelClick: "winLoseLabelClick", scrollNearEnd: "scrollNearEnd", copyTransaction: "copyTransaction" }, decls: 31, vars: 18, consts: [["calendarButtonDesktop", ""], [1, "relative", "h-full", "flex", "flex-col", "min-h-0"], [1, "w-full", "table-fixed", "text-white", "shrink-0"], [1, "w-8", "sm:w-10"], [1, "hidden", "sm:table-column"], [1, "w-18", "sm:w-28"], [1, "sticky", "z-sticky", "top-0", "bg-zinc-900", "text-zinc-400", "h-10", "sm:h-8"], [1, "uppercase", "text-left", "sm:border-0", 2, "border-bottom", "2px solid rgb(113, 113, 123, 0.6)"], [1, "flex", "items-center", "justify-start", "gap-1", "transition-colors", 3, "ngClass"], [1, "flex", "cursor-pointer", "items-center", "z-modal", "uppercase", "leading-none", "space-x-1", 3, "click"], [1, "flex-col", "leading-none", "gap-1", "underline", "underline-offset-1"], [1, "relative"], [1, "flex", "items-center", "gap-1", "hover:text-white", "cursor-pointer", "transition-colors"], [1, "hidden", "sm:table-cell"], [1, "flex", "items-center", "gap-1", "uppercase"], [3, "click"], [1, "transition-colors", "underline", "underline-offset-2", "cursor-pointer", 3, "ngClass"], [1, "uppercase"], [1, "p-1", "text-center", "bg-zinc-950", 2, "border-bottom", "1px solid #52525b", 3, "ngClass"], [1, "flex-1", "min-h-0", "overflow-auto", "scroll-smooth", 2, "scroll-behavior", "smooth", "-webkit-overflow-scrolling", "touch", 3, "itemSize"], [1, "w-full", "border-b", "border-zinc-700", "text-white"], [1, "flex-1", "min-h-0", "overflow-auto", "scroll-smooth", 2, "scroll-behavior", "smooth", "-webkit-overflow-scrolling", "touch", 3, "scroll", "itemSize"], [1, "w-full", "table-fixed", "text-white"], [1, "w-10", "sm:w-10"], [1, "text-sm", "cursor-pointer"], ["class", "border-b border-zinc-700 animate-fade-down animate-duration-500 h-15", 3, "ngClass", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "flex", "justify-center", "items-center", "py-4", "text-zinc-400"], [1, "border-b", "border-zinc-700", "animate-fade-down", "animate-duration-500", "h-15", 3, "ngClass"], [1, "h-15", 3, "click"], [1, "relative", "h-full", "flex", "flex-col", "sm:flex-row", "gap-1", "sm:gap-2", "items-center", "justify-center", "sm:justify-start", "sm:pl-2", "pl-0", 3, "ngClass"], [1, "size-4", "text-yellow-400", 3, "name"], [1, "size-4", "text-zinc-300", 3, "name"], [1, "inline-flex", "flex-col"], [1, "text-white", "text-center"], [1, "text-zinc-400", "text-center"], [1, "font-medium", 3, "click", "ngClass"], [1, "flex", "flex-col"], [1, "hidden", "sm:table-cell", 3, "click"], [1, "flex", "items-center", "gap-4", "sm:gap-3"], [1, "hidden", "sm:block"], [1, "flex", "items-center", "justify-center", "cursor-pointer", "text-yellow-400", 3, "click"], ["name", "play-circle", 1, "size-6"], [1, "flex", "items-center", "justify-center", "cursor-pointer", "text-yellow-400", "sm:hidden", 3, "click"], ["name", "share", 1, "size-6"], ["name", "share", 1, "sm:size-6", "size-5"], [1, "animate-spin", "rounded-full", "h-6", "w-6", "border-b-2", "border-white"], [1, "ml-2"], [1, "w-full", "p-1", "sm:p-3.5", "bg-zinc-800", "animate-fade-down", "animate-duration-500"], [1, "flex", "items-center", "justify-center", "gap-1", "sm:gap-2"], [1, "sm:size-5", "size-4", 3, "name"]], template: function ApHistoryListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "table", 2)(2, "colgroup");
      \u0275\u0275element(3, "col", 3)(4, "col");
      \u0275\u0275conditionalCreate(5, ApHistoryListComponent_Conditional_5_Template, 1, 0, "col", 4);
      \u0275\u0275element(6, "col")(7, "col");
      \u0275\u0275conditionalCreate(8, ApHistoryListComponent_Conditional_8_Template, 1, 0, "col", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "thead", 6)(10, "tr", 7);
      \u0275\u0275element(11, "th");
      \u0275\u0275elementStart(12, "th")(13, "div", 8)(14, "button", 9, 0);
      \u0275\u0275listener("click", function ApHistoryListComponent_Template_button_click_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleCalendar($event));
      });
      \u0275\u0275elementStart(16, "div", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275element(19, "button", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(20, ApHistoryListComponent_Conditional_20_Template, 2, 1, "th", 13);
      \u0275\u0275elementStart(21, "th")(22, "button", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "th", 15);
      \u0275\u0275listener("click", function ApHistoryListComponent_Template_th_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWinLoseFilterClick());
      });
      \u0275\u0275elementStart(25, "button", 16);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(27, ApHistoryListComponent_Conditional_27_Template, 2, 1, "th", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(28, ApHistoryListComponent_Conditional_28_Template, 2, 5, "time", 18);
      \u0275\u0275conditionalCreate(29, ApHistoryListComponent_Conditional_29_Template, 12, 5, "cdk-virtual-scroll-viewport", 19);
      \u0275\u0275conditionalCreate(30, ApHistoryListComponent_Conditional_30_Template, 6, 2, "div", 20);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.showTypeColumn() ? 5 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showOtherColumn() ? 8 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c02, ctx.accentColor() === "yellow", ctx.accentColor() === "slate"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.dateLabel(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showTypeColumn() ? 20 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.betLabel(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(15, _c02, ctx.accentColor() === "yellow", ctx.accentColor() === "slate"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.winLoseLabel(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showOtherColumn() ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.historyDateRange() ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.sortedList().length ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.sortedList().length && !ctx.isLoadingMore() ? 30 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent, ScrollingModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, MoneyTextPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApHistoryListComponent, [{
    type: Component,
    args: [{ selector: "ap-history-list", imports: [CommonModule, ApIconComponent, ScrollingModule, MoneyTextPipe], template: `<!-- table view -->
<div class="relative h-full flex flex-col min-h-0">
  <table class="w-full table-fixed text-white shrink-0">
    <colgroup>
      <col class="w-8 sm:w-10" />
      <col />
      @if (showTypeColumn()) {
        <col class="hidden sm:table-column" />
      }
      <col />
      <col />
      @if (showOtherColumn()) {
        <col class="w-18 sm:w-28" />
      }
    </colgroup>
    <thead class="sticky z-sticky top-0 bg-zinc-900 text-zinc-400 h-10 sm:h-8">
      <tr
        class="uppercase text-left sm:border-0"
        style="border-bottom: 2px solid rgb(113, 113, 123, 0.6)"
      >
        <th></th>
        <th>
          <div
            class="flex items-center justify-start gap-1 transition-colors"
            [ngClass]="{
              'hover:text-yellow-200': accentColor() === 'yellow',
              'hover:text-slate-400': accentColor() === 'slate',
            }"
          >
            <button
              #calendarButtonDesktop
              (click)="toggleCalendar($event)"
              class="flex cursor-pointer items-center z-modal uppercase leading-none space-x-1"
            >
              <div
                class="flex-col leading-none gap-1 underline underline-offset-1"
              >
                {{ dateLabel() }}
              </div>
            </button>

            <div class="relative">
              <button
                class="flex items-center gap-1 hover:text-white cursor-pointer transition-colors"
              ></button>
            </div>
          </div>
        </th>
        @if (showTypeColumn()) {
          <th class="hidden sm:table-cell">
            {{ typeLabel() }}
          </th>
        }
        <th>
          <button class="flex items-center gap-1 uppercase">
            {{ betLabel() }}
          </button>
        </th>
        <th (click)="onWinLoseFilterClick()">
          <button
            class="transition-colors underline underline-offset-2 cursor-pointer"
            [ngClass]="{
              'hover:text-yellow-200': accentColor() === 'yellow',
              'hover:text-slate-400': accentColor() === 'slate',
            }"
          >
            {{ winLoseLabel() }}
          </button>
        </th>
        @if (showOtherColumn()) {
          <th class="uppercase">
            {{ otherLabel() }}
          </th>
        }
      </tr>
    </thead>
  </table>
  @if (historyDateRange()) {
    <time
      class="p-1 text-center bg-zinc-950"
      style="border-bottom: 1px solid #52525b"
      [ngClass]="{
        'text-yellow-300/80': accentColor() === 'yellow',
        'text-slate-300': accentColor() === 'slate',
      }"
    >
      {{ historyDateRange() }}
    </time>
  }

  <!-- Virtual Scroll Viewport -->
  @if (sortedList().length) {
    <cdk-virtual-scroll-viewport
      [itemSize]="52"
      class="flex-1 min-h-0 overflow-auto scroll-smooth"
      style="scroll-behavior: smooth; -webkit-overflow-scrolling: touch"
      (scroll)="onViewportScroll()"
    >
      <table class="w-full table-fixed text-white">
        <colgroup>
          <col class="w-10 sm:w-10" />
          <col />
          @if (showTypeColumn()) {
            <col class="hidden sm:table-column" />
          }
          <col />
          <col />
          @if (showOtherColumn()) {
            <col class="w-18 sm:w-28" />
          }
        </colgroup>
        <tbody class="text-sm cursor-pointer">
          <tr
            [attr.data-testid]="'history-list-item-' + i"
            *cdkVirtualFor="let item of sortedList(); let i = index"
            class="border-b border-zinc-700 animate-fade-down animate-duration-500 h-15"
            [ngClass]="
              i % 2 === 1
                ? 'bg-zinc-900 hover:bg-zinc-300/15'
                : 'bg-zinc-800 hover:bg-zinc-300/15'
            "
          >
            <!-- Icon -->
            <td (click)="emitDetail(item, i)" class="h-15">
              <div
                class="relative h-full flex flex-col sm:flex-row gap-1 sm:gap-2 items-center justify-center sm:justify-start sm:pl-2 pl-0"
                [ngClass]="
                  item.isTrnHighlight
                    ? i % 2 === 0
                      ? 'border-l-3 border-yellow-300'
                      : 'border-l-3  border-yellow-500'
                    : item.isCashDropHighlight
                      ? i % 2 === 0
                        ? 'border-l-3 border-lime-400'
                        : 'border-l-3 border-lime-600'
                      : item.isCampaignHighlight
                        ? i % 2 === 0
                          ? 'border-l-3 border-purple-400'
                          : 'border-l-3 border-purple-600'
                        : ''
                "
              >
                @if (item.isStarred) {
                  <ap-icon [name]="'star'" class="size-4 text-yellow-400" />
                }
                @if (item.isTrophy) {
                  <ap-icon [name]="'trophy'" class="size-4 text-zinc-300" />
                }
              </div>
            </td>
            <!-- Date -->
            <td (click)="emitDetail(item, i)">
              <div class="inline-flex flex-col">
                <div class="text-white text-center">{{ item.time }}</div>
                <div class="text-zinc-400 text-center">{{ item.date }}</div>
              </div>
            </td>
            <!-- Type -->
            @if (showTypeColumn()) {
              <td (click)="emitDetail(item, i)" class="hidden sm:table-cell">
                {{ getTypeLabel(item) }}
              </td>
            }
            <!-- Bet -->
            <td
              [attr.data-testid]="'history-list-item-' + i + '-bet'"
              (click)="emitDetail(item, i)"
            >
              {{ item.bet | moneyText: { addSpace: false } }}
            </td>
            <!-- Win/Lose -->
            <td
              [attr.data-testid]="'history-list-item-' + i + '-win'"
              (click)="emitDetail(item, i)"
              class="font-medium"
              [ngClass]="
                item.isWin ? 'text-emerald-400 hover:text-emerald-300' : ''
              "
            >
              <div class="flex flex-col">
                <div>{{ item.win | moneyText: { addSpace: false } }}</div>
                <!-- \u66AB\u6642\u4E0D\u7528\u6700\u5927\u8CE0\u4ED8
                @if (item.maxPayout) {
                  <div class="text-xs">{{ maxPayoutLabel() }}</div>
                } -->
              </div>
            </td>
            <!-- Others -->
            @if (showOtherColumn()) {
              <td (click)="emitDetail(item, i)">
                <div class="flex items-center gap-4 sm:gap-3">
                  @if (showReplayButton(item)) {
                    <div class="hidden sm:block">
                      <button
                        class="flex items-center justify-center cursor-pointer text-yellow-400"
                        (click)="onReplay(item, $event)"
                      >
                        <ap-icon name="play-circle" class="size-6" />
                      </button>
                    </div>

                    <button
                      class="flex items-center justify-center cursor-pointer text-yellow-400 sm:hidden"
                      (click)="onReplay(item, $event)"
                    >
                      <ap-icon name="play-circle" class="size-6" />
                    </button>
                  }

                  @if (showShareButton(item)) {
                    <div class="hidden sm:block">
                      <button
                        class="flex items-center justify-center cursor-pointer text-yellow-400"
                        (click)="onShare(item, $event)"
                      >
                        <ap-icon name="share" class="size-6" />
                      </button>
                    </div>

                    <button
                      class="flex items-center justify-center cursor-pointer text-yellow-400 sm:hidden"
                      (click)="onShare(item, $event)"
                    >
                      <ap-icon name="share" class="sm:size-6 size-5" />
                    </button>
                  }

                  <!--<div class="hidden sm:block invisible">
                    <button
                      class="flex items-center justify-center cursor-pointer text-yellow-400 "
                      (click)="onClickCopyTransaction(item, $event)"
                    >
                      <ap-icon name="copy" class="sm:size-6 size-5" />
                    </button>
                  </div>-->

                  <!--<button
                    class="flex items-center justify-center cursor-pointer text-yellow-400 sm:hidden invisible"
                    (click)="onClickCopyTransaction(item, $event)"
                  >
                    <ap-icon name="copy" class="sm:size-6 size-5" />
                  </button>-->
                </div>
              </td>
            }
          </tr>
        </tbody>
      </table>

      <!-- Loading More Indicator for Desktop -->
      @if (isLoadingMore()) {
        <div class="flex justify-center items-center py-4 text-zinc-400">
          <div
            class="animate-spin rounded-full h-6 w-6 border-b-2 border-white"
          ></div>
          <label class="ml-2">Loading more...</label>
        </div>
      }
    </cdk-virtual-scroll-viewport>
  }

  <!-- None Data -->
  @if (!sortedList().length && !isLoadingMore()) {
    <div class="w-full border-b border-zinc-700 text-white">
      <div
        class="w-full p-1 sm:p-3.5 bg-zinc-800 animate-fade-down animate-duration-500"
      >
        <div class="flex items-center justify-center gap-1 sm:gap-2">
          <ap-icon [name]="'x-mark'" class="sm:size-5 size-4" />
          <time>{{ emptyStateLabel() }}</time>
        </div>
      </div>
    </div>
  }
</div>
` }]
  }], () => [], { viewport: [{
    type: ViewChild,
    args: [CdkVirtualScrollViewport]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApHistoryListComponent, { className: "ApHistoryListComponent", filePath: "src/app/components/ap-history-list/ap-history-list.component.ts", lineNumber: 17 });
})();

// src/app/components/ap-history-calender/ap-history-calender.component.ts
var _c03 = (a0, a1, a2, a3) => ({ "text-yellow-400": a0, "text-purple-400": a1, "text-zinc-400": a2, "text-slate-400": a3 });
var _c13 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) => ({ "text-zinc-600 opacity-40 cursor-not-allowed": a0, "text-zinc-600": a1, "bg-yellow-400": a2, "bg-purple-400": a3, "bg-zinc-400": a4, "bg-slate-400": a5, "text-zinc-950": a6, "bg-yellow-400/10": a7, "bg-purple-400/10": a8, "bg-zinc-400/10": a9, "bg-slate-400/10": a10, "text-yellow-400": a11, "text-purple-400": a12, "text-zinc-400": a13, "text-slate-300": a14, "rounded-l-md": a15, "rounded-r-md": a16 });
function ApHistoryCalenderComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ApHistoryCalenderComponent_button_29_Template_button_click_0_listener() {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateClick(day_r2));
    });
    \u0275\u0275elementStart(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border", day_r2.isToday ? "1px solid " + ctx_r2.borderColorSolid() : "none");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunctionV(7, _c13, [day_r2.isDisabled, !day_r2.isCurrentMonth && !day_r2.isDisabled, day_r2.isSelected && ctx_r2.accentColor() === "yellow", day_r2.isSelected && ctx_r2.accentColor() === "purple", day_r2.isSelected && ctx_r2.accentColor() === "zinc", day_r2.isSelected && ctx_r2.accentColor() === "slate", day_r2.isSelected, day_r2.isInRange && !day_r2.isSelected && ctx_r2.accentColor() === "yellow", day_r2.isInRange && !day_r2.isSelected && ctx_r2.accentColor() === "purple", day_r2.isInRange && !day_r2.isSelected && ctx_r2.accentColor() === "zinc", day_r2.isInRange && !day_r2.isSelected && ctx_r2.accentColor() === "slate", day_r2.isInRange && !day_r2.isSelected && ctx_r2.accentColor() === "yellow", day_r2.isInRange && !day_r2.isSelected && ctx_r2.accentColor() === "purple", day_r2.isInRange && !day_r2.isSelected && ctx_r2.accentColor() === "zinc", day_r2.isInRange && !day_r2.isSelected && ctx_r2.accentColor() === "slate", day_r2.isRangeStart, day_r2.isRangeEnd]))("disabled", day_r2.isDisabled);
    \u0275\u0275advance();
    \u0275\u0275classProp("font-bold", day_r2.isSelected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r2.day);
  }
}
function ApHistoryCalenderComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ApHistoryCalenderComponent_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFromDate());
    });
    \u0275\u0275elementEnd();
  }
}
function ApHistoryCalenderComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ApHistoryCalenderComponent_button_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearToDate());
    });
    \u0275\u0275elementEnd();
  }
}
var ApHistoryCalenderComponent = class _ApHistoryCalenderComponent {
  i18n = inject(AppI18nService);
  accentColor = input("yellow");
  maxDayRange = input(7);
  /** 起始日期往前面限制(與今天的天數差) */
  startDayBeforeRestriction = input(null);
  /** 起始日期往後面限制(與今天的天數差) */
  startDayAfterRestriction = input(null);
  allLabel = this.i18n.computed("history_all", "ALL");
  todayLabel = this.i18n.computed("history_today", "TODAY");
  dayLabel = this.i18n.computed("history_last_seven_days", "Last 7 days");
  customLabel = this.i18n.computed("history_custom", "CUSTOM");
  getConfirmButtonText = this.i18n.computed("Confirm_Btn", "Confirm");
  accentColorRgb = {
    yellow: "250, 204, 21",
    purple: "192, 132, 252",
    zinc: "161, 161, 170",
    slate: "148, 163, 184"
  };
  /** iOS15 不支援 Tailwind v4 border-color 透明度語法(color-mix)，改用 style 提供 rgba border-color */
  borderColorSoft = computed(() => `rgba(${this.accentColorRgb[this.accentColor()]}, 0.6)`);
  borderColorMedium = computed(() => `rgba(${this.accentColorRgb[this.accentColor()]}, 0.7)`);
  borderColorSolid = computed(() => `rgb(${this.accentColorRgb[this.accentColor()]})`);
  selectedOption = signal("today");
  currentMonth = signal(/* @__PURE__ */ new Date());
  fromDate = signal(null);
  toDate = signal(null);
  selectingFrom = signal(true);
  showCustom = signal(false);
  onConfirm = output();
  monthName = computed(() => {
    const date = this.currentMonth();
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });
  });
  calendarDays = computed(() => {
    const month = this.currentMonth();
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const firstDayOfMonth = new Date(year, monthIndex, 1);
    const lastDayOfMonth = new Date(year, monthIndex + 1, 0);
    const firstDayWeekday = firstDayOfMonth.getDay();
    const days = [];
    const prevMonthLastDay = new Date(year, monthIndex, 0).getDate();
    for (let i = firstDayWeekday - 1; i >= 0; i--) {
      const day = prevMonthLastDay - i;
      const date = new Date(year, monthIndex - 1, day);
      days.push(this.createCalendarDay(date, false));
    }
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const date = new Date(year, monthIndex, day);
      days.push(this.createCalendarDay(date, true));
    }
    const remainingDays = 35 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, monthIndex + 1, day);
      days.push(this.createCalendarDay(date, false));
    }
    return days;
  });
  formattedFromDate = computed(() => {
    const date = this.fromDate();
    return date ? this.formatDate(date) : "";
  });
  formattedToDate = computed(() => {
    const date = this.toDate();
    return date ? this.formatDate(date) : "";
  });
  createCalendarDay(date, isCurrentMonth) {
    const from = this.fromDate();
    const to = this.toDate();
    const maxDays = this.maxDayRange();
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const beforeRestriction = this.startDayBeforeRestriction();
    const afterRestriction = this.startDayAfterRestriction();
    let minDate = null;
    let maxDate = null;
    if (beforeRestriction !== null) {
      minDate = new Date(today);
      minDate.setDate(today.getDate() - beforeRestriction);
      minDate.setHours(0, 0, 0, 0);
    }
    if (afterRestriction !== null) {
      maxDate = new Date(today);
      maxDate.setDate(today.getDate() + afterRestriction);
      maxDate.setHours(0, 0, 0, 0);
    }
    let isSelected = false;
    let isInRange = false;
    let isRangeStart = false;
    let isRangeEnd = false;
    let isDisabled = false;
    if (from) {
      const normalizedFrom = new Date(from);
      normalizedFrom.setHours(0, 0, 0, 0);
      isRangeStart = normalizedDate.getTime() === normalizedFrom.getTime();
      isSelected = isRangeStart;
      if (maxDays !== null && !this.selectingFrom()) {
        const diffDays = Math.abs((normalizedDate.getTime() - normalizedFrom.getTime()) / 864e5);
        if (diffDays >= maxDays) {
          isDisabled = true;
        }
      }
    }
    if (to) {
      const normalizedTo = new Date(to);
      normalizedTo.setHours(0, 0, 0, 0);
      isRangeEnd = normalizedDate.getTime() === normalizedTo.getTime();
      isSelected = isSelected || isRangeEnd;
    }
    if (from && to) {
      const normalizedFrom = new Date(from);
      const normalizedTo = new Date(to);
      normalizedFrom.setHours(0, 0, 0, 0);
      normalizedTo.setHours(0, 0, 0, 0);
      isInRange = normalizedDate > normalizedFrom && normalizedDate < normalizedTo;
    }
    if (minDate && normalizedDate < minDate) {
      isDisabled = true;
    }
    if (maxDate && normalizedDate > maxDate) {
      isDisabled = true;
    }
    return {
      date: normalizedDate,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      isCurrentMonth,
      isSelected,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isToday: normalizedDate.getTime() === today.getTime(),
      isDisabled
    };
  }
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  isOutOfRestriction(date) {
    const beforeRestriction = this.startDayBeforeRestriction();
    const afterRestriction = this.startDayAfterRestriction();
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    let minDate = null;
    let maxDate = null;
    if (beforeRestriction !== null) {
      minDate = new Date(today);
      minDate.setDate(today.getDate() - beforeRestriction);
      minDate.setHours(0, 0, 0, 0);
    }
    if (afterRestriction !== null) {
      maxDate = new Date(today);
      maxDate.setDate(today.getDate() + afterRestriction);
      maxDate.setHours(0, 0, 0, 0);
    }
    if (minDate && date < minDate) {
      return true;
    }
    if (maxDate && date > maxDate) {
      return true;
    }
    return false;
  }
  selectOption(option) {
    if (option === "custom") {
      const next = !this.showCustom();
      this.showCustom.set(next);
      if (next) {
        this.selectedOption.set("custom");
        if (!this.fromDate() || !this.toDate()) {
          this.fromDate.set(null);
          this.toDate.set(null);
          this.selectingFrom.set(true);
        }
      }
      return;
    }
    this.showCustom.set(false);
    this.selectedOption.set(option);
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (option === "today") {
      this.fromDate.set(new Date(today));
      this.toDate.set(new Date(today));
      this.confirm("today");
    } else if (option === "last7days") {
      const lastWeek = new Date(today);
      lastWeek.setDate(lastWeek.getDate() - 6);
      this.fromDate.set(lastWeek);
      this.toDate.set(new Date(today));
      this.confirm("last7days");
    } else if (option === "all") {
      this.fromDate.set(null);
      this.toDate.set(null);
      this.selectingFrom.set(true);
      this.confirm("all");
    } else {
      if (!this.fromDate() || !this.toDate()) {
        this.fromDate.set(null);
        this.toDate.set(null);
        this.selectingFrom.set(true);
      }
    }
  }
  onDateClick(day) {
    if (!day.isCurrentMonth)
      return;
    if (day.isDisabled)
      return;
    const selectedDate = new Date(day.date);
    if (this.selectingFrom()) {
      this.fromDate.set(selectedDate);
      this.toDate.set(null);
      this.selectingFrom.set(false);
    } else {
      const from = this.fromDate();
      if (from && selectedDate < from) {
        this.fromDate.set(selectedDate);
        this.toDate.set(from);
      } else {
        this.toDate.set(selectedDate);
      }
      this.selectingFrom.set(true);
    }
  }
  previousMonth() {
    const current = this.currentMonth();
    const prev = new Date(current.getFullYear(), current.getMonth() - 1, 1);
    this.currentMonth.set(prev);
  }
  nextMonth() {
    const current = this.currentMonth();
    const next = new Date(current.getFullYear(), current.getMonth() + 1, 1);
    this.currentMonth.set(next);
  }
  confirm(type = "custom") {
    this.onConfirm.emit({
      from: this.fromDate(),
      to: this.toDate(),
      type
    });
  }
  clearFromDate() {
    this.fromDate.set(null);
    this.selectingFrom.set(true);
  }
  clearToDate() {
    this.toDate.set(null);
  }
  onFromInput(value) {
    let parsed = this.parseInputDate(value);
    if (parsed && this.isOutOfRestriction(parsed)) {
      parsed = null;
    }
    this.selectedOption.set("custom");
    this.showCustom.set(true);
    this.fromDate.set(parsed);
    this.selectingFrom.set(!parsed);
    if (parsed && this.toDate() && parsed > this.toDate()) {
      this.toDate.set(null);
    }
  }
  onToInput(value) {
    let parsed = this.parseInputDate(value);
    if (parsed && this.isOutOfRestriction(parsed)) {
      parsed = null;
    }
    this.selectedOption.set("custom");
    this.showCustom.set(true);
    let clamped = parsed;
    const maxDays = this.maxDayRange();
    if (clamped && maxDays !== null) {
      const from = this.fromDate();
      if (from) {
        const diff = Math.abs((clamped.getTime() - from.getTime()) / 864e5);
        if (diff >= maxDays) {
          clamped = null;
        }
      }
    }
    this.toDate.set(clamped);
    if (clamped && this.fromDate() && clamped < this.fromDate()) {
      this.fromDate.set(clamped);
    }
  }
  parseInputDate(value) {
    if (!value)
      return null;
    const parts = value.trim().split("-");
    if (parts.length !== 3)
      return null;
    const [y, m, d] = parts.map(Number);
    if (!y || !m || !d)
      return null;
    const date = new Date(y, m - 1, d);
    if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) {
      return null;
    }
    return date;
  }
  static \u0275fac = function ApHistoryCalenderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApHistoryCalenderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApHistoryCalenderComponent, selectors: [["ap-history-calender"]], inputs: { accentColor: [1, "accentColor"], maxDayRange: [1, "maxDayRange"], startDayBeforeRestriction: [1, "startDayBeforeRestriction"], startDayAfterRestriction: [1, "startDayAfterRestriction"] }, outputs: { onConfirm: "onConfirm" }, decls: 45, vars: 36, consts: [[1, "rounded-lg", "p-2", "w-[20rem]", 2, "background-color", "rgba(0, 0, 0, 0.85)", "border", "1px solid"], [1, "flex", "flex-col", "space-y-4", "overflow-y-auto"], [1, "w-full", "[&>button]:w-full", 3, "click", "size", "label", "variant", "accentColor"], [1, "p-1", "space-y-2"], [1, "bg-zinc-800", "rounded-lg", "p-3", "border"], [1, "flex", "items-center", "justify-between", "pb-1", "text-zinc-300"], [1, "aspect-square", "flex", "items-center", "justify-center", "p-1", "hover:bg-zinc-700", "rounded", "transition-colors", "cursor-pointer", 3, "click"], ["name", "chevron-left", 1, "size-4"], [1, "text-white", "font-medium"], [1, "aspect-square", "flex", "items-center", "justify-center", "p-1", "hover:bg-zinc-700", "rounded", "transition-colors", "text-zinc-300", "cursor-pointer", 3, "click"], ["name", "chevron-right", 1, "size-4"], [1, "grid", "grid-cols-7", "text-center", "text-zinc-400", "gap-1"], [1, "py-1"], [1, "grid", "grid-cols-7", "gap-1"], ["class", "aspect-square flex items-center justify-center rounded-md transition-all duration-200 text-white cursor-pointer", 3, "ngClass", "border", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "space-y-2"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "bg-zinc-800", "rounded-lg", "border"], [3, "ngClass"], ["name", "calendar", 1, "size-4", "text-zinc-400"], ["type", "text", "placeholder", "YYYY-MM-DD", 1, "flex-1", "bg-transparent", "text-white", "text-sm", "font-normal", "outline-none", 3, "input", "value"], ["class", "aspect-square flex items-center justify-center p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-white cursor-pointer", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "bg-zinc-800", "border", "rounded-lg"], ["name", "calendar", 1, "size-4", "text-zinc-400", "ml-4"], ["type", "text", "placeholder", "YYYY-MM-DD", 1, "flex-1", "text-white", "outline-none", "font-normal", 3, "input", "value"], ["class", "p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-white", 3, "click", 4, "ngIf"], [1, "w-full", "[&>button]:w-full", "mt-2", 3, "clicked", "label", "accentColor"], [1, "aspect-square", "flex", "items-center", "justify-center", "rounded-md", "transition-all", "duration-200", "text-white", "cursor-pointer", 3, "click", "ngClass", "disabled"], [1, "aspect-square", "flex", "items-center", "justify-center", "p-1", "hover:bg-zinc-700", "rounded", "transition-colors", "text-zinc-400", "hover:text-white", "cursor-pointer", 3, "click"], [1, "p-1", "hover:bg-zinc-700", "rounded", "transition-colors", "text-zinc-400", "hover:text-white", 3, "click"]], template: function ApHistoryCalenderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ap-button", 2);
      \u0275\u0275listener("click", function ApHistoryCalenderComponent_Template_ap_button_click_2_listener() {
        return ctx.selectOption("today");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ap-button", 2);
      \u0275\u0275listener("click", function ApHistoryCalenderComponent_Template_ap_button_click_3_listener() {
        return ctx.selectOption("last7days");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "button", 6);
      \u0275\u0275listener("click", function ApHistoryCalenderComponent_Template_button_click_7_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275element(8, "ap-icon", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h5", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function ApHistoryCalenderComponent_Template_button_click_11_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275element(12, "ap-icon", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "span", 12);
      \u0275\u0275text(15, "Su");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17, "Mo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19, "Tu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 12);
      \u0275\u0275text(21, "We");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 12);
      \u0275\u0275text(23, "Th");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 12);
      \u0275\u0275text(25, "Fr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 12);
      \u0275\u0275text(27, "Sa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 13);
      \u0275\u0275template(29, ApHistoryCalenderComponent_button_29_Template, 3, 25, "button", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 15)(31, "div", 16)(32, "label", 17);
      \u0275\u0275text(33, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "ap-icon", 18);
      \u0275\u0275elementStart(35, "input", 19);
      \u0275\u0275listener("input", function ApHistoryCalenderComponent_Template_input_input_35_listener($event) {
        return ctx.onFromInput($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, ApHistoryCalenderComponent_button_36_Template, 1, 0, "button", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 15)(38, "div", 21)(39, "label", 17);
      \u0275\u0275text(40, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "ap-icon", 22);
      \u0275\u0275elementStart(42, "input", 23);
      \u0275\u0275listener("input", function ApHistoryCalenderComponent_Template_input_input_42_listener($event) {
        return ctx.onToInput($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, ApHistoryCalenderComponent_button_43_Template, 1, 0, "button", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "ap-button", 25);
      \u0275\u0275listener("clicked", function ApHistoryCalenderComponent_Template_ap_button_clicked_44_listener() {
        return ctx.confirm();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("border-color", ctx.borderColorSoft());
      \u0275\u0275advance(2);
      \u0275\u0275property("size", "small")("label", ctx.todayLabel())("variant", "text")("accentColor", ctx.accentColor());
      \u0275\u0275advance();
      \u0275\u0275property("size", "small")("label", ctx.dayLabel())("variant", "text")("accentColor", ctx.accentColor());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("border-color", ctx.borderColorMedium());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.monthName());
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.calendarDays());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("border-color", ctx.borderColorMedium());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(26, _c03, ctx.accentColor() === "yellow", ctx.accentColor() === "purple", ctx.accentColor() === "zinc", ctx.accentColor() === "slate"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.formattedFromDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.fromDate());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("border-color", ctx.borderColorMedium());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(31, _c03, ctx.accentColor() === "yellow", ctx.accentColor() === "purple", ctx.accentColor() === "zinc", ctx.accentColor() === "slate"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.formattedToDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toDate());
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.getConfirmButtonText())("accentColor", ctx.accentColor());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ApButtonComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApHistoryCalenderComponent, [{
    type: Component,
    args: [{ selector: "ap-history-calender", imports: [CommonModule, ApButtonComponent, ApIconComponent], template: `<div
  class="rounded-lg p-2 w-[20rem]"
  style="background-color: rgba(0, 0, 0, 0.85); border: 1px solid"
  [style.border-color]="borderColorSoft()"
>
  <!-- Options: Today, Last 7 days, Custom -->
  <div class="flex flex-col space-y-4 overflow-y-auto">
    <ap-button
      class="w-full [&>button]:w-full"
      [size]="'small'"
      [label]="todayLabel()"
      [variant]="'text'"
      [accentColor]="accentColor()"
      (click)="selectOption('today')"
    />
    <ap-button
      class="w-full [&>button]:w-full"
      [size]="'small'"
      [label]="dayLabel()"
      [variant]="'text'"
      [accentColor]="accentColor()"
      (click)="selectOption('last7days')"
    />
    <div class="p-1 space-y-2">
      <!-- Calendar -->
      <div
        class="bg-zinc-800 rounded-lg p-3 border"
        [style.border-color]="borderColorMedium()"
      >
        <!-- Month Navigation -->
        <div class="flex items-center justify-between pb-1 text-zinc-300">
          <button
            class="aspect-square flex items-center justify-center p-1 hover:bg-zinc-700 rounded transition-colors cursor-pointer"
            (click)="previousMonth()"
          >
            <ap-icon name="chevron-left" class="size-4" />
          </button>
          <h5 class="text-white font-medium">{{ monthName() }}</h5>
          <button
            class="aspect-square flex items-center justify-center p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-300 cursor-pointer"
            (click)="nextMonth()"
          >
            <ap-icon name="chevron-right" class="size-4" />
          </button>
        </div>

        <!-- \u661F\u671F -->
        <div class="grid grid-cols-7 text-center text-zinc-400 gap-1">
          <span class="py-1">Su</span>
          <span class="py-1">Mo</span>
          <span class="py-1">Tu</span>
          <span class="py-1">We</span>
          <span class="py-1">Th</span>
          <span class="py-1">Fr</span>
          <span class="py-1">Sa</span>
        </div>

        <!-- \u65E5\u671F -->
        <div class="grid grid-cols-7 gap-1">
          <button
            *ngFor="let day of calendarDays()"
            class="aspect-square flex items-center justify-center rounded-md transition-all duration-200 text-white cursor-pointer"
            [ngClass]="{
              'text-zinc-600 opacity-40 cursor-not-allowed': day.isDisabled,
              'text-zinc-600': !day.isCurrentMonth && !day.isDisabled,
              'bg-yellow-400': day.isSelected && accentColor() === 'yellow',
              'bg-purple-400': day.isSelected && accentColor() === 'purple',
              'bg-zinc-400': day.isSelected && accentColor() === 'zinc',
              'bg-slate-400': day.isSelected && accentColor() === 'slate',
              'text-zinc-950': day.isSelected,
              'bg-yellow-400/10':
                day.isInRange && !day.isSelected && accentColor() === 'yellow',
              'bg-purple-400/10':
                day.isInRange && !day.isSelected && accentColor() === 'purple',
              'bg-zinc-400/10':
                day.isInRange && !day.isSelected && accentColor() === 'zinc',
              'bg-slate-400/10':
                day.isInRange && !day.isSelected && accentColor() === 'slate',
              'text-yellow-400':
                day.isInRange && !day.isSelected && accentColor() === 'yellow',
              'text-purple-400':
                day.isInRange && !day.isSelected && accentColor() === 'purple',
              'text-zinc-400':
                day.isInRange && !day.isSelected && accentColor() === 'zinc',
              'text-slate-300':
                day.isInRange && !day.isSelected && accentColor() === 'slate',
              'rounded-l-md': day.isRangeStart,
              'rounded-r-md': day.isRangeEnd,
            }"
            [style.border]="
              day.isToday ? '1px solid ' + borderColorSolid() : 'none'
            "
            [disabled]="day.isDisabled"
            (click)="onDateClick(day)"
          >
            <h5 [class.font-bold]="day.isSelected">{{ day.day }}</h5>
          </button>
        </div>
      </div>
      <!-- From Date -->
      <div class="space-y-2">
        <div
          class="flex items-center gap-2 px-3 py-2 bg-zinc-800 rounded-lg border"
          [style.border-color]="borderColorMedium()"
        >
          <label
            [ngClass]="{
              'text-yellow-400': accentColor() === 'yellow',
              'text-purple-400': accentColor() === 'purple',
              'text-zinc-400': accentColor() === 'zinc',
              'text-slate-400': accentColor() === 'slate',
            }"
            >From</label
          >
          <ap-icon name="calendar" class="size-4 text-zinc-400" />
          <input
            type="text"
            class="flex-1 bg-transparent text-white text-sm font-normal outline-none"
            [value]="formattedFromDate()"
            (input)="onFromInput($any($event.target).value)"
            placeholder="YYYY-MM-DD"
          />
          <button
            *ngIf="fromDate()"
            class="aspect-square flex items-center justify-center p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-white cursor-pointer"
            (click)="clearFromDate()"
          ></button>
        </div>
      </div>

      <!-- To Date -->
      <div class="space-y-2">
        <div
          class="flex items-center gap-2 px-3 py-2 bg-zinc-800 border rounded-lg"
          [style.border-color]="borderColorMedium()"
        >
          <label
            [ngClass]="{
              'text-yellow-400': accentColor() === 'yellow',
              'text-purple-400': accentColor() === 'purple',
              'text-zinc-400': accentColor() === 'zinc',
              'text-slate-400': accentColor() === 'slate',
            }"
            >To</label
          >
          <ap-icon name="calendar" class="size-4 text-zinc-400 ml-4" />
          <input
            type="text"
            class="flex-1 text-white outline-none font-normal"
            [value]="formattedToDate()"
            (input)="onToInput($any($event.target).value)"
            placeholder="YYYY-MM-DD"
          />
          <button
            *ngIf="toDate()"
            class="p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-white"
            (click)="clearToDate()"
          ></button>
        </div>
      </div>

      <ap-button
        class="w-full [&>button]:w-full mt-2"
        [label]="getConfirmButtonText()"
        [accentColor]="accentColor()"
        (clicked)="confirm()"
      />
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApHistoryCalenderComponent, { className: "ApHistoryCalenderComponent", filePath: "src/app/components/ap-history-calender/ap-history-calender.component.ts", lineNumber: 18 });
})();

export {
  ApHistoryListComponent,
  ApHistoryCalenderComponent
};
//# sourceMappingURL=chunk-X6GBURL3.js.map
