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
      { icon: "reservation", title: "Table reservations", sub: "Google integrations, calendar, management tools", price: "EUR40" },
      { icon: "addNode", title: "Collection point", sub: "Wolt, Glovo, Bolt orders on 1 tablet", price: "EUR40" },
      { icon: "smartphone", title: "App for own couriers", sub: "Google integrations, calendar, management tools", price: "EUR40" },
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, management tools", price: "EUR40" }
    ]
  },
  {
    name: "Standard",
    descriptionStrong: "For busy places ready to grow sales.",
    description: "Add reservations, better tools, and more ways to convert guests.",
    prices: {
      monthly: "\u20AC40/mo",
      month12: "\u20AC36/mo",
      month24: "\u20AC31/mo"
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
      { icon: "addNode", title: "Collection point", sub: "Wolt, Glovo, Bolt orders on 1 tablet", price: "EUR40" },
      { icon: "smartphone", title: "App for own couriers", sub: "Google integrations, calendar, management tools", price: "EUR40" },
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, management tools", price: "EUR40" }
    ]
  },
  {
    name: "Smart",
    popular: true,
    descriptionStrong: "For restaurants focused on retention.",
    description: "Loyalty, gifts, SMS marketing, and advanced growth features.",
    prices: {
      monthly: "\u20AC85/mo",
      month12: "\u20AC77/mo",
      month24: "\u20AC66/mo"
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
      { icon: "smartphone2", title: "Own restaurant app", sub: "Google integrations, calendar, management tools", price: "EUR40" }
    ]
  },
  {
    name: "Pro",
    descriptionStrong: "For multi-location and advanced operations.",
    description: "POS, AI features, deeper analytics, and enterprise support.",
    prices: {
      monthly: "\u20AC125/mo",
      month12: "\u20AC113/mo",
      month24: "\u20AC98/mo"
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

function planHeader(plan, index) {
  const price = plan.prices[currentPeriod] || plan.prices.monthly;
  return `
    <article class="header-card">
      <div>
        <div class="plan-top">
          <p class="plan-name">${plan.name}</p>
          ${plan.popular ? '<p class="popular-tag">POPULAR</p>' : ""}
        </div>
        <p class="plan-desc"><strong>${plan.descriptionStrong}</strong> ${plan.description}</p>
        <p class="price ${plan.priceClass || ""}" data-plan-index="${index}">${price}</p>
      </div>
      <button class="cta ${plan.ctaClass}">${plan.ctaText}</button>
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
  return `
    <article class="features-card block-card">
      <p class="group-title">${colorizePlanName(plan.featureTitle)}</p>
      <ul class="feature-list">
        ${plan.features.map(featureHtml).join("")}
      </ul>
      ${plan.aiAssistants ? `<p class="ai-label">AI assistants <span>NEW</span></p><ul class="feature-list">${plan.aiAssistants.map(featureHtml).join("")}</ul>` : ""}
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
  const root = document.getElementById("desktopPricing");
  root.innerHTML = `
    <div class="grid-4">${plans.map((plan, index) => planHeader(plan, index)).join("")}</div>
    <p class="section-label">Order fee:</p>
    <div class="grid-4">${plans.map(feeBlock).join("")}</div>
    <p class="section-label">Features:</p>
    <div class="grid-4">${plans.map(featuresBlock).join("")}</div>
    <p class="section-label">Off-plan features upon request:</p>
    <div class="grid-4">${plans.map(offPlanBlock).join("")}</div>
  `;
}

function mobileCard(plan, index) {
  const hasOffPlan = Array.isArray(plan.offPlan) && plan.offPlan.length > 0;
  return `
    <article class="mobile-card">
      ${planHeader(plan, index)}
      <p class="section-label">Order fee:</p>
      ${feeBlock(plan)}
      <p class="section-label">Features:</p>
      ${featuresBlock(plan)}
      ${hasOffPlan ? `<p class="section-label">Off-plan features upon request:</p>${offPlanBlock(plan)}` : ""}
    </article>
  `;
}

function mobileLayout() {
  const root = document.getElementById("mobilePricing");
  root.innerHTML = plans.map((plan, index) => mobileCard(plan, index)).join("");
}

function updatePriceTexts() {
  document.querySelectorAll(".price[data-plan-index]").forEach((node) => {
    const index = Number(node.dataset.planIndex);
    const plan = plans[index];
    if (!plan) return;
    const price = plan.prices[currentPeriod] || plan.prices.monthly;
    node.textContent = price;
  });
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

function initMobileLocationSwitch() {
  const switcher = document.querySelector(".mobile-location-switch");
  if (!switcher) return;

  const buttons = switcher.querySelectorAll(".pill[data-location]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.location;
      switcher.dataset.location = mode;
      buttons.forEach((item) => item.classList.toggle("active", item.dataset.location === mode));
    });
  });
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
initMobileLocationSwitch();
initStickyTopTabs();


