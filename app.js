const icons = {
  webDesign: "./assets/webDesign.svg",
  clickCollect: "./assets/clickCollect.svg",
  inTransit: "./assets/inTransit.svg",
  qrCode: "./assets/qrCode.svg",
  restaurantTable: "./assets/restaurantTable.svg",
  nfc: "./assets/nfc.svg",
  donate: "./assets/donate.svg",
  bankBuilding: "./assets/bankBuilding.svg",
  userGroups: "./assets/userGroups.svg",
  increase: "./assets/increase.svg",
  redeem: "./assets/redeem.svg",
  sendEmail: "./assets/sendEmail.svg",
  speed: "./assets/speed.svg",
  laptopMetrics: "./assets/laptopMetrics.svg",
  controlPanel: "./assets/controlPanel.svg",
  bestSeller: "./assets/bestSeller.svg",
  sparkling: "./assets/sparkling.svg",
  customerSupport: "./assets/customerSupport.svg",
  reservation: "./assets/reservation.svg",
  addNode: "./assets/addNode.svg",
  editNode: "./assets/editNode.svg",
  smartphone: "./assets/smartphone.svg",
  smartphone2: "./assets/smartphone2.svg",
  star: "./assets/star.svg",
  christmasGift: "./assets/christmasGift.svg",
  originalSize: "./assets/originalSize.svg",
  pushNotifications: "./assets/pushNotifications.svg",
  posTerminal: "./assets/posTerminal.svg",
  networkingManager: "./assets/networkingManager.svg",
  futures: "./assets/futures.svg",
  group: "./assets/group.svg",
  manager: "./assets/manager.svg",
  voiceId: "./assets/voiceId.svg",
  response: "./assets/response.svg",
  ai: "./assets/ai.svg"
};

let currentPeriod = "monthly";
let currentLocationMode = "single";
let currentChainTier = "loc3";
const expandedFeatureCards = new Set();

const chainDiscounts = {
  loc3: 10,
  loc5: 20,
  loc10: 30,
  loc20: 40
};

const chainTierLabels = {
  loc3: "3",
  loc5: "5+ locations",
  loc10: "10+ locations",
  loc20: "20+ locations"
};

const featureHints = {
  waiterTips: [
    "Guests can tip right in checkout.",
    "Tips go directly to your team.",
    "You control when it is shown."
  ],
  restaurantTips: [
    "Add a separate house tip option.",
    "Useful for shared team bonuses.",
    "Configured per location."
  ],
  collectionPoint: [
    "Unify aggregator pickups in one flow.",
    "One tablet for all pickup orders.",
    "Speeds up handoff at rush hour."
  ],
  marketplaceMenu: [
    "Edit marketplace menus from one place.",
    "Sync updates to connected channels.",
    "Reduce manual menu mismatches."
  ]
};

const plans = [
  {
    name: "Basic",
    descriptionStrong: "For small restaurants getting started online.",
    description: "Website + QR menu, ordering, payments, and essentials.",
    prices: {
      monthly: "Free",
      month12: "Free",
      month24: "Free"
    },
    priceClass: "free",
    ctaText: "Start for free",
    ctaClass: "light",
    fee: "3%",
    feeGreen: false,
    feeCondition: "Online payments only",
    featureTitle: "Everything what you need to start:",
    features: [
      { icon: "webDesign", title: "Website + Own domain" },
      { icon: "clickCollect", title: "Online Ordering", sub: "Delivery own + Takeaway" },
      { icon: "inTransit", title: "Integrations with curiers services", sub: "Last-Mile Aggregation" },
      { icon: "qrCode", title: "QR Menu" },
      { icon: "restaurantTable", title: "QR table ordering" },
      { icon: "nfc", title: "QR Payment at the table" },
      { icon: "donate", title: "Waitors tips", info: true, hintKey: "waiterTips" },
      { icon: "bankBuilding", title: "Restaurants tips", info: true, hintKey: "restaurantTips" },
      { icon: "userGroups", title: "Advanced Customer Database and CRM" },
      { icon: "increase", title: "Upsales features" },
      { icon: "redeem", title: "Loyalty: Promocodes" },
      { icon: "sendEmail", title: "Email Marketing", sub: "Automatited \\ retention notifications" },
      { icon: "speed", title: "SEO Optimization" },
      { icon: "laptopMetrics", title: "Marketing Analytics", sub: "Google tag, Facebook pixel Google integatreiton" },
      { icon: "controlPanel", title: "Dashboard with all chanels and clients overview" },
      { icon: "bestSeller", title: "Best seller analytics" },
      { icon: "sparkling", title: "AI Photo editor", sub: "20 generations/mo" },
      { icon: "customerSupport", title: "Support", sub: "Standard level" }
    ],
    offPlan: [
      { icon: "reservation", title: "Table reservations", sub: "Google integrations, calendar, managment tools", price: "\u20AC40" },
      { icon: "addNode", title: "Collection point", sub: "Wolt, Glovo, Bolt orders on 1 tablet", price: "\u20AC40" },
      { icon: "smartphone", title: "App for own curiers", sub: "Google integrations, calendar, managment tools", price: "\u20AC40" },
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, managment tools", price: "\u20AC40" }
    ]
  },
  {
    name: "Standard",
    descriptionStrong: "For busy places ready to grow sales.",
    description: "Add reservations, better tools, and more ways to convert guests.",
    prices: {
      monthly: 40,
      month12: 36,
      month24: 31
    },
    ctaText: "Start a free trial",
    ctaClass: "accent",
    fee: "3%",
    feeGreen: false,
    feeCondition: "Online payments only",
    featureTitle: "Everything in the Basic Plan, plus:",
    features: [
      { icon: "reservation", title: "Table reservations", sub: "Google integrations, calendar, managment tools" },
      { icon: "sparkling", title: "AI Photo editor", sub: "40 generations/mo" },
      { icon: "customerSupport", title: "Support", sub: "Standard level" }
    ],
    offPlan: [
      { icon: "addNode", title: "Collection point", sub: "Wolt, Glovo, Bolt orders on 1 tablet", price: "\u20AC40" },
      { icon: "smartphone", title: "App for own curiers", sub: "Google integrations, calendar, managment tools", price: "\u20AC40" },
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, managment tools", price: "\u20AC40" }
    ]
  },
  {
    name: "Smart",
    popular: true,
    descriptionStrong: "For restaurants focused on retention.",
    description: "Loyalty, gifts, SMS marketing, and advanced growth features.",
    prices: {
      monthly: 85,
      month12: 77,
      month24: 66
    },
    ctaText: "Start a free trial",
    ctaClass: "accent",
    fee: "0%",
    feeGreen: true,
    feeCondition: "Online payments & Cash",
    featureTitle: "Everything in the Standard Plan, plus:",
    features: [
      { icon: "addNode", title: "Collection point", sub: "Wolt, Glovo, Bolt orders on 1 tablet", info: true, hintKey: "collectionPoint" },
      { icon: "editNode", title: "Marketplaces Menu Management", info: true, hintKey: "marketplaceMenu" },
      { icon: "smartphone", title: "App for own curiers", sub: "Google integrations, calendar, managment tools" },
      { icon: "star", title: "Loyalty: Bonus points (Cashback)" },
      { icon: "christmasGift", title: "Loyalty: Presents (Gifts)" },
      { icon: "originalSize", title: "Loyalty: 1+1 bonus system (Happy hours)" },
      { icon: "pushNotifications", title: "SMS Marketing", sub: "Automatited \\ retention notifications" },
      { icon: "sparkling", title: "AI Photo editor", sub: "60 generations/mo" },
      { icon: "customerSupport", title: "Support", sub: "Priority level" }
    ],
    offPlan: [
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, managment tools", price: "\u20AC40" }
    ]
  },
  {
    name: "Pro",
    descriptionStrong: "For multi-location and advanced operations.",
    description: "POS, AI features, deeper analytics, and enterprise support.",
    prices: {
      monthly: 125,
      month12: 113,
      month24: 98
    },
    ctaText: "Start a free trial",
    ctaClass: "accent",
    fee: "0%",
    feeGreen: true,
    feeCondition: "Online payments & Cash",
    featureTitle: "Everything in the Smart Plan, plus:",
    features: [
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, managment tools" },
      { icon: "posTerminal", title: "POS Integration", sub: "Poster, Rkeeper, Dotykacka, etc" },
      { icon: "networkingManager", title: "Cross restaurants loalty program", sub: "Chains or Multibrand locations" },
      { icon: "futures", title: "Multi-location Analytics" },
      { icon: "group", title: "Best clients and lost clients overivew" },
      { icon: "sparkling", title: "AI Photo editor", sub: "200 generations/mo + expansion" },
      { icon: "sparkling", title: "AI Text edit and transaltions" },
      { icon: "manager", title: "Support", sub: "Dedicated key account manager (CSM)" }
    ],
    aiAssistants: [
      { icon: "voiceId", title: "Analytics assistant", sub: "Ask anything about your restaurant performance." },
      { icon: "response", title: "Review reply assistant", sub: "Generate replies to customer feedback." },
      { icon: "ai", title: "Marketing content generator", sub: "Create posts, campaigns, and promotions." }
    ],
    offPlan: []
  }
];

function icon(iconKey) {
  const src = icons[iconKey] || "";
  return `<img class="feature-icon" src="${src}" alt="" loading="lazy" />`;
}

function featureTitleHtml(item) {
  return `
    <p class="feature-text">
      ${item.title}
      ${item.info ? '<span class="feature-info" aria-hidden="true">i</span>' : ""}
    </p>
  `;
}

function featureTooltipHtml(item) {
  if (!item.info || !item.hintKey || !featureHints[item.hintKey]) return "";
  return `
    <div class="feature-tooltip" role="note" aria-hidden="true">
      ${featureHints[item.hintKey].map((line) => `<p>${line}</p>`).join("")}
    </div>
  `;
}

function featureHtml(item) {
  const itemClass = item.info && item.hintKey ? "feature-item has-info" : "feature-item";
  return `
    <li class="${itemClass}" ${item.hintKey ? `data-hint-key="${item.hintKey}" data-hint-title="${item.title}"` : ""}>
      ${icon(item.icon)}
      <div>
        ${featureTitleHtml(item)}
        ${item.sub ? `<p class="feature-sub">${item.sub}</p>` : ""}
        ${featureTooltipHtml(item)}
      </div>
    </li>
  `;
}

function offPlanHtml(item) {
  const itemClass = item.info && item.hintKey ? "feature-item has-info" : "feature-item";
  return `
    <li class="${itemClass}" ${item.hintKey ? `data-hint-key="${item.hintKey}" data-hint-title="${item.title}"` : ""}>
      ${icon(item.icon)}
      <div>
        ${featureTitleHtml(item)}
        ${item.price ? `<p class="feature-price">${item.price}</p>` : ""}
        ${item.sub ? `<p class="feature-sub">${item.sub}</p>` : ""}
        ${featureTooltipHtml(item)}
      </div>
    </li>
  `;
}

function formatPriceNumber(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function getPlanPriceLabel(plan) {
  const base = plan.prices[currentPeriod];
  if (typeof base !== "number") {
    return base || plan.prices.monthly;
  }

  const chainDiscount = currentLocationMode === "multi" ? (chainDiscounts[currentChainTier] || 0) : 0;
  const finalPrice = base * (1 - chainDiscount / 100);
  return `\u20AC${formatPriceNumber(finalPrice)}/mo`;
}

function getPlanNumericPrice(plan) {
  const base = plan.prices[currentPeriod];
  if (typeof base !== "number") return null;
  const chainDiscount = currentLocationMode === "multi" ? (chainDiscounts[currentChainTier] || 0) : 0;
  return base * (1 - chainDiscount / 100);
}

function getVisiblePlans() {
  if (currentLocationMode === "multi") {
    return plans.filter((plan) => plan.name !== "Basic");
  }
  return plans;
}

function getPlanByName(name) {
  return plans.find((plan) => plan.name === name);
}

function getEffectivePlan(plan) {
  if (currentLocationMode !== "multi" || plan.name !== "Standard") {
    return plan;
  }

  const basicPlan = getPlanByName("Basic");
  if (!basicPlan) {
    return plan;
  }

  const tableReservationsFeature = {
    icon: "reservation",
    title: "Table reservations",
    sub: "Google integrations, calendar, managment tools"
  };

  const transformedFeatures = basicPlan.features.map((feature) => {
    if (feature.title === "AI Photo editor") {
      return { ...feature, sub: "40 generations/mo" };
    }
    return { ...feature };
  });

  const customTipsIndex = transformedFeatures.findIndex((feature) => feature.title === "Waitors tips");
  if (customTipsIndex >= 0) {
    transformedFeatures.splice(customTipsIndex + 1, 0, tableReservationsFeature);
  } else {
    transformedFeatures.push(tableReservationsFeature);
  }

  return {
    ...plan,
    featureTitle: "Everything you need to start:",
    features: transformedFeatures
  };
}

function planHeader(plan) {
  const effectivePlan = getEffectivePlan(plan);
  const price = getPlanPriceLabel(plan);
  return `
    <article class="header-card">
      <div>
        <div class="plan-top">
          <p class="plan-name">${effectivePlan.name}</p>
          ${effectivePlan.popular ? '<p class="popular-tag">POPULAR</p>' : ""}
        </div>
        <p class="plan-desc"><strong>${effectivePlan.descriptionStrong}</strong> ${effectivePlan.description}</p>
        <p class="price ${effectivePlan.priceClass || ""}" data-plan-name="${effectivePlan.name}">${price}</p>
      </div>
      <button class="cta ${effectivePlan.ctaClass}">${effectivePlan.ctaText}</button>
    </article>
  `;
}

function feeBlock(plan) {
  return `
    <article class="fee-card block-card">
      <p class="fee-line">Delivery & Pickup orders: <span class="fee-value ${plan.feeGreen ? "good" : ""}">${plan.fee}</span></p>
      <p class="fee-condition">Condition: <strong>${plan.feeCondition}</strong></p>
    </article>
  `;
}

function colorizePlanName(title) {
  return title
    .replace("Standard", "<span>Standard</span>")
    .replace("Basic", "<span>Basic</span>")
    .replace("Smart", "<span>Smart</span>");
}

function isMobileFeatureCollapsible(plan) {
  return plan.name === "Basic" || (plan.name === "Standard" && currentLocationMode === "multi");
}

function getFeatureCardKey(plan) {
  return `${currentLocationMode}:${plan.name}`;
}

function featuresBlock(plan, options = {}) {
  const effectivePlan = getEffectivePlan(plan);
  const { collapsible = false, collapsed = false, featureKey = "" } = options;
  const cardClasses = [
    "features-card",
    "block-card",
    collapsible ? "is-collapsible" : "",
    collapsible && !collapsed ? "is-expanded" : ""
  ].filter(Boolean).join(" ");

  const collapsedToggle = collapsible
    ? `<div class="features-fade"><button class="feature-toggle-btn" type="button" data-feature-toggle="${featureKey}">Show more</button></div>`
    : "";

  const expandedToggle = collapsible
    ? `<div class="features-toggle-row"><button class="feature-toggle-btn" type="button" data-feature-toggle="${featureKey}">Show less</button></div>`
    : "";

  return `
    <article class="${cardClasses}" ${collapsible ? `data-feature-key="${featureKey}"` : ""}>
      <p class="group-title">${colorizePlanName(effectivePlan.featureTitle)}</p>
      <ul class="feature-list">
        ${effectivePlan.features.map(featureHtml).join("")}
      </ul>
      ${effectivePlan.aiAssistants ? `<p class="ai-label">AI assistants <span>NEW</span></p><ul class="feature-list">${effectivePlan.aiAssistants.map(featureHtml).join("")}</ul>` : ""}
      ${expandedToggle}
      ${collapsedToggle}
    </article>
  `;
}

function offPlanBlock(plan) {
  return `
    <article class="offplan-card block-card">
      <ul class="feature-list">
        ${plan.offPlan.map(offPlanHtml).join("")}
      </ul>
    </article>
  `;
}

function desktopLayout() {
  const visiblePlans = getVisiblePlans();
  const root = document.getElementById("desktopPricing");
  root.innerHTML = `
    <div class="grid-plans" style="--columns:${visiblePlans.length}">${visiblePlans.map((plan) => planHeader(plan)).join("")}</div>
    <p class="section-label">Order fee:</p>
    <div class="grid-plans" style="--columns:${visiblePlans.length}">${visiblePlans.map(feeBlock).join("")}</div>
    <p class="section-label">Features:</p>
    <div class="grid-plans" style="--columns:${visiblePlans.length}">${visiblePlans.map(featuresBlock).join("")}</div>
    <p class="section-label">Off-plan features upon request:</p>
    <div class="grid-plans" style="--columns:${visiblePlans.length}">${visiblePlans.map(offPlanBlock).join("")}</div>
  `;
}

function mobileCard(plan) {
  const hasOffPlan = Array.isArray(plan.offPlan) && plan.offPlan.length > 0;
  const collapsibleFeatures = isMobileFeatureCollapsible(plan);
  const featureKey = getFeatureCardKey(plan);
  const collapsedFeatures = collapsibleFeatures && !expandedFeatureCards.has(featureKey);
  return `
    <article class="mobile-card">
      ${planHeader(plan)}
      <p class="section-label">Order fee:</p>
      ${feeBlock(plan)}
      <p class="section-label">Features:</p>
      ${featuresBlock(plan, { collapsible: collapsibleFeatures, collapsed: collapsedFeatures, featureKey })}
      ${hasOffPlan ? `<p class="section-label">Off-plan features upon request:</p>${offPlanBlock(plan)}` : ""}
    </article>
  `;
}

function mobileLayout() {
  const visiblePlans = getVisiblePlans();
  const root = document.getElementById("mobilePricing");
  root.innerHTML = visiblePlans.map((plan) => mobileCard(plan)).join("");
}

function chainInfoLayout() {
  const root = document.getElementById("chainInfo");
  if (!root) return;

  if (currentLocationMode !== "multi") {
    root.classList.remove("visible");
    root.innerHTML = "";
    return;
  }

  const visiblePlans = plans.filter((plan) => plan.name !== "Basic");
  if (!visiblePlans.length) return;

  root.classList.add("visible");
  root.innerHTML = `
    <article class="chain-info-card">
      <div class="chain-info-top-image-wrap" aria-hidden="true">
        <img class="chain-info-top-image" src="https://www.figma.com/api/mcp/asset/c1ee5a72-eb62-427c-b5fa-65c1e0895702" alt="" />
      </div>
      <div class="chain-info-form">
        <div class="chain-info-brand">
          <img class="chain-info-brand-icon" src="https://www.figma.com/api/mcp/asset/cbef1060-bac3-4f91-a936-3fa48a9af1e1" alt="" />
          <p class="chain-info-brand-text">Choice for chains</p>
        </div>
        <h2 class="chain-info-title">Do you have 3+ locations?</h2>
        <p class="chain-info-text">Get individual quality and best price not available for public</p>
        <div class="chain-info-locations">
          <p class="chain-info-label">How many locations do you have?</p>
          <div class="chain-info-tabs" aria-label="Network size">
            <button class="chain-tab ${currentChainTier === "loc3" ? "active" : ""}" type="button" data-chain="loc3">3</button>
            <button class="chain-tab ${currentChainTier === "loc5" ? "active" : ""}" type="button" data-chain="loc5">5+</button>
            <button class="chain-tab ${currentChainTier === "loc10" ? "active" : ""}" type="button" data-chain="loc10">10+</button>
            <button class="chain-tab ${currentChainTier === "loc20" ? "active" : ""}" type="button" data-chain="loc20">20+</button>
          </div>
        </div>
        <button class="cta dark chain-info-cta" type="button">Contact sales</button>
      </div>
    </article>
  `;
}

function updatePriceTexts() {
  document.querySelectorAll(".price[data-plan-name]").forEach((node) => {
    const plan = getPlanByName(node.dataset.planName);
    if (!plan) return;
    node.textContent = getPlanPriceLabel(plan);
  });
}

function renderPricing() {
  chainInfoLayout();
  if (currentLocationMode === "multi") {
    const desktopRoot = document.getElementById("desktopPricing");
    const mobileRoot = document.getElementById("mobilePricing");
    if (desktopRoot) desktopRoot.innerHTML = "";
    if (mobileRoot) mobileRoot.innerHTML = "";
    return;
  }
  desktopLayout();
  mobileLayout();
}

function setPeriod(period) {
  currentPeriod = period;
  document.querySelectorAll(".tabs-right .tab[data-period]").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.period === period);
  });
  if (currentLocationMode === "multi") {
    renderPricing();
    return;
  }
  updatePriceTexts();
}

function initPeriodTabs() {
  document.querySelectorAll(".tabs-right .tab[data-period]").forEach((tab) => {
    tab.addEventListener("click", () => {
      setPeriod(tab.dataset.period);
    });
  });
}

function setChainTier(tier) {
  if (!chainDiscounts[tier]) return;
  currentChainTier = tier;

  document.querySelectorAll("[data-chain]").forEach((button) => {
    button.classList.toggle("active", button.dataset.chain === tier);
  });

  if (currentLocationMode === "multi") {
    return;
  }
  updatePriceTexts();
}

function setLocationMode(mode) {
  currentLocationMode = mode;

  document.querySelectorAll("[data-location-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.locationTab === mode);
  });

  const mobileSwitcher = document.querySelector(".mobile-location-switch");
  const periodTabs = document.querySelector(".tabs-right");
  const topTabs = document.querySelector(".top-tabs");
  if (mobileSwitcher) {
    mobileSwitcher.dataset.location = mode;
    mobileSwitcher.querySelectorAll(".pill[data-location]").forEach((button) => {
      button.classList.toggle("active", button.dataset.location === mode);
    });
  }
  if (periodTabs) {
    periodTabs.classList.toggle("is-hidden", mode === "multi");
  }
  if (topTabs) {
    topTabs.classList.toggle("is-multi-mode", mode === "multi");
  }

  renderPricing();
}

function initLocationControls() {
  document.querySelectorAll("[data-location-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      setLocationMode(button.dataset.locationTab);
    });
  });

  document.querySelectorAll(".mobile-location-switch .pill[data-location]").forEach((button) => {
    button.addEventListener("click", () => {
      setLocationMode(button.dataset.location);
    });
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-chain]");
    if (!button) return;
    setChainTier(button.dataset.chain);
  });

  setChainTier(currentChainTier);
  setLocationMode(currentLocationMode);
}

function initMobileFeatureToggle() {
  const root = document.getElementById("mobilePricing");
  if (!root || root.dataset.featureToggleBound === "1") return;

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-feature-toggle]");
    if (!button) return;

    const key = button.dataset.featureToggle;
    if (!key) return;

    const card = button.closest(".features-card.is-collapsible");
    if (!card) return;

    const isExpandedNow = card.classList.toggle("is-expanded");

    if (expandedFeatureCards.has(key)) {
      expandedFeatureCards.delete(key);
    }
    if (isExpandedNow) {
      expandedFeatureCards.add(key);
    }
  });

  root.dataset.featureToggleBound = "1";
}

function initFeatureHints() {
  const root = document.body;
  if (!root || root.dataset.featureHintsBound === "1") return;
  const mobileQuery = window.matchMedia("(max-width: 980px)");

  const modal = document.createElement("div");
  modal.className = "feature-hint-modal";
  modal.innerHTML = `
    <div class="feature-hint-backdrop" data-hint-close="backdrop"></div>
    <div class="feature-hint-sheet" role="dialog" aria-modal="true" aria-label="Feature hint">
      <button class="feature-hint-close" type="button" aria-label="Close hint" data-hint-close="button">&times;</button>
      <p class="feature-hint-title"></p>
      <div class="feature-hint-lines"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalTitle = modal.querySelector(".feature-hint-title");
  const modalLines = modal.querySelector(".feature-hint-lines");

  const closeHintModal = () => {
    modal.classList.remove("is-open");
    document.body.classList.remove("hint-modal-open");
  };

  const openHintModal = (title, hintKey) => {
    const lines = featureHints[hintKey] || [];
    if (!lines.length) return;
    modalTitle.textContent = title || "Hint";
    modalLines.innerHTML = lines.map((line) => `<p>${line}</p>`).join("");
    modal.classList.add("is-open");
    document.body.classList.add("hint-modal-open");
  };

  document.addEventListener("click", (event) => {
    const closeTrigger = event.target.closest("[data-hint-close]");
    if (closeTrigger) {
      closeHintModal();
      return;
    }

    const item = event.target.closest(".feature-item.has-info");
    if (!item || !mobileQuery.matches) {
      return;
    }

    const hintKey = item.dataset.hintKey;
    const hintTitle = item.dataset.hintTitle;
    if (!hintKey) return;
    event.preventDefault();
    openHintModal(hintTitle, hintKey);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeHintModal();
    }
  });

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", (event) => {
      if (!event.matches) {
        closeHintModal();
      }
    });
  }

  root.dataset.featureHintsBound = "1";
}

function initStickyTopTabs() {
  const tabs = document.querySelector(".top-tabs");
  const sentinel = document.querySelector(".tabs-sticky-sentinel");
  if (!tabs || !sentinel) return;

  const mobileQuery = window.matchMedia("(max-width: 980px)");
  let ticking = false;
  let isBound = false;

  const updateStickyState = () => {
    ticking = false;
    if (!mobileQuery.matches) {
      tabs.classList.remove("is-stuck");
      return;
    }
    const shouldStick = sentinel.getBoundingClientRect().top <= 0;
    tabs.classList.toggle("is-stuck", shouldStick);
  };

  const onScrollOrResize = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateStickyState);
  };

  const cleanup = () => {
    if (isBound) {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("orientationchange", onScrollOrResize);
      isBound = false;
    }
    tabs.classList.remove("is-stuck");
  };

  const setup = () => {
    cleanup();
    if (!mobileQuery.matches) return;
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("orientationchange", onScrollOrResize);
    isBound = true;
    updateStickyState();
  };

  setup();
  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", setup);
  } else {
    mobileQuery.addListener(setup);
  }
}

desktopLayout();
mobileLayout();
initPeriodTabs();
initLocationControls();
initMobileFeatureToggle();
initFeatureHints();
initStickyTopTabs();
