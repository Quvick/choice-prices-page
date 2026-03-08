const icons = {
  webDesign: "./assets/webDesign.svg",
  inTransit: "./assets/inTransit.svg",
  qrCode: "./assets/qrCode.svg",
  nfc: "./assets/nfc.svg",
  donate: "./assets/donate.svg",
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
let currentChainTier = "loc2";

const chainDiscounts = {
  loc2: 10,
  loc5: 20,
  loc10: 30,
  loc20: 40
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
    featureTitle: "Everything you need to start:",
    features: [
      { icon: "webDesign", title: "Website + Own domain" },
      { icon: "inTransit", title: "Integrations with courier services", sub: "Wolt Drive, Foodora Go and others" },
      { icon: "qrCode", title: "QR Menu with Ordering" },
      { icon: "nfc", title: "QR Payment" },
      { icon: "donate", title: "Custom Tips features" },
      { icon: "userGroups", title: "Advanced Customer Database and CRM" },
      { icon: "increase", title: "Upsales features" },
      { icon: "redeem", title: "Promocodes" },
      { icon: "sendEmail", title: "Email Marketing", sub: "Automated retention notifications" },
      { icon: "speed", title: "SEO Optimization" },
      { icon: "laptopMetrics", title: "Marketing Analytics", sub: "Google tag, Facebook pixel Google integration" },
      { icon: "controlPanel", title: "Dashboard with all channels and clients overview" },
      { icon: "bestSeller", title: "Best seller analytics" },
      { icon: "sparkling", title: "AI Photo editor", sub: "20 generations/mo" },
      { icon: "customerSupport", title: "Support", sub: "Standard level" }
    ],
    offPlan: [
      { icon: "reservation", title: "Table reservations", sub: "Google integrations, calendar, management tools", price: "\u20AC40" },
      { icon: "addNode", title: "Collection point", sub: "Wolt, Glovo, Bolt orders on 1 tablet", price: "\u20AC40" },
      { icon: "smartphone", title: "App for own couriers", sub: "Google integrations, calendar, management tools", price: "\u20AC40" },
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, management tools", price: "\u20AC40" }
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
      { icon: "reservation", title: "Table reservations", sub: "Google integrations, calendar, management tools" },
      { icon: "sparkling", title: "AI Photo editor", sub: "40 generations/mo" },
      { icon: "customerSupport", title: "Support", sub: "Standard level" }
    ],
    offPlan: [
      { icon: "addNode", title: "Collection point", sub: "Wolt, Glovo, Bolt orders on 1 tablet", price: "\u20AC40" },
      { icon: "smartphone", title: "App for own couriers", sub: "Google integrations, calendar, management tools", price: "\u20AC40" },
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, management tools", price: "\u20AC40" }
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
      { icon: "addNode", title: "Collection point", sub: "Wolt, Glovo, Bolt orders on 1 tablet" },
      { icon: "smartphone", title: "App for own couriers", sub: "Google integrations, calendar, management tools" },
      { icon: "star", title: "Bonus points (Cashback)" },
      { icon: "christmasGift", title: "Presents (Gifts)" },
      { icon: "originalSize", title: "1+1 bonus system (Happy hours)" },
      { icon: "pushNotifications", title: "SMS Marketing", sub: "Automated retention notifications" },
      { icon: "sparkling", title: "AI Photo editor", sub: "60 generations/mo" },
      { icon: "customerSupport", title: "Support", sub: "Priority level" }
    ],
    offPlan: [
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, management tools", price: "\u20AC40" }
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
    ctaText: "Contact sales",
    ctaClass: "dark",
    fee: "0%",
    feeGreen: true,
    feeCondition: "Online payments & Cash",
    featureTitle: "Everything in the Smart Plan, plus:",
    features: [
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, management tools" },
      { icon: "posTerminal", title: "POS Integration", sub: "Poster, Rkeeper, Dotykacka, etc" },
      { icon: "networkingManager", title: "Cross-restaurant loyalty program", sub: "Chains or multibrand locations" },
      { icon: "futures", title: "Multi-location Analytics" },
      { icon: "group", title: "Best clients and lost client overview" },
      { icon: "sparkling", title: "AI Photo editor", sub: "200 generations/mo + expansion" },
      { icon: "sparkling", title: "AI text editing and translations" },
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

function featureHtml(item) {
  return `
    <li class="feature-item">
      ${icon(item.icon)}
      <div>
        <p class="feature-text">${item.title}</p>
        ${item.sub ? `<p class="feature-sub">${item.sub}</p>` : ""}
      </div>
    </li>
  `;
}

function offPlanHtml(item) {
  return `
    <li class="feature-item">
      ${icon(item.icon)}
      <div>
        <p class="feature-text">${item.title}</p>
        ${item.price ? `<p class="feature-price">${item.price}</p>` : ""}
        ${item.sub ? `<p class="feature-sub">${item.sub}</p>` : ""}
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
    sub: "Google integrations, calendar, management tools"
  };

  const transformedFeatures = basicPlan.features.map((feature) => {
    if (feature.title === "AI Photo editor") {
      return { ...feature, sub: "40 generations/mo" };
    }
    return { ...feature };
  });

  const customTipsIndex = transformedFeatures.findIndex((feature) => feature.title === "Custom Tips features");
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

function featuresBlock(plan) {
  const effectivePlan = getEffectivePlan(plan);
  return `
    <article class="features-card block-card">
      <p class="group-title">${colorizePlanName(effectivePlan.featureTitle)}</p>
      <ul class="feature-list">
        ${effectivePlan.features.map(featureHtml).join("")}
      </ul>
      ${effectivePlan.aiAssistants ? `<p class="ai-label">AI assistants <span>NEW</span></p><ul class="feature-list">${effectivePlan.aiAssistants.map(featureHtml).join("")}</ul>` : ""}
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
  return `
    <article class="mobile-card">
      ${planHeader(plan)}
      <p class="section-label">Order fee:</p>
      ${feeBlock(plan)}
      <p class="section-label">Features:</p>
      ${featuresBlock(plan)}
      ${hasOffPlan ? `<p class="section-label">Off-plan features upon request:</p>${offPlanBlock(plan)}` : ""}
    </article>
  `;
}

function mobileLayout() {
  const visiblePlans = getVisiblePlans();
  const root = document.getElementById("mobilePricing");
  root.innerHTML = visiblePlans.map((plan) => mobileCard(plan)).join("");
}

function updatePriceTexts() {
  document.querySelectorAll(".price[data-plan-name]").forEach((node) => {
    const plan = getPlanByName(node.dataset.planName);
    if (!plan) return;
    node.textContent = getPlanPriceLabel(plan);
  });
}

function renderPricing() {
  desktopLayout();
  mobileLayout();
}

function setPeriod(period) {
  currentPeriod = period;
  document.querySelectorAll(".tabs-right .tab[data-period]").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.period === period);
  });
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

  updatePriceTexts();
}

function setLocationMode(mode) {
  currentLocationMode = mode;

  document.querySelectorAll("[data-location-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.locationTab === mode);
  });

  const mobileSwitcher = document.querySelector(".mobile-location-switch");
  if (mobileSwitcher) {
    mobileSwitcher.dataset.location = mode;
    mobileSwitcher.querySelectorAll(".pill[data-location]").forEach((button) => {
      button.classList.toggle("active", button.dataset.location === mode);
    });
  }

  const showChain = mode === "multi";
  const desktopChainTabs = document.getElementById("desktopChainTabs");
  const mobileChainTabs = document.getElementById("mobileChainTabs");

  if (desktopChainTabs) {
    desktopChainTabs.classList.toggle("visible", showChain);
  }
  if (mobileChainTabs) {
    mobileChainTabs.classList.toggle("visible", showChain);
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

  document.querySelectorAll("[data-chain]").forEach((button) => {
    button.addEventListener("click", () => {
      setChainTier(button.dataset.chain);
    });
  });

  setChainTier(currentChainTier);
  setLocationMode(currentLocationMode);
}

function initStickyTopTabs() {
  const tabs = document.querySelector(".top-tabs");
  const sentinel = document.querySelector(".tabs-sticky-sentinel");
  if (!tabs || !sentinel) return;

  const mobileQuery = window.matchMedia("(max-width: 980px)");
  let observer = null;

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    tabs.classList.remove("is-stuck");
  };

  const setup = () => {
    cleanup();
    if (!mobileQuery.matches) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        tabs.classList.toggle("is-stuck", !entry.isIntersecting);
      },
      { threshold: [1] }
    );

    observer.observe(sentinel);
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
initStickyTopTabs();



