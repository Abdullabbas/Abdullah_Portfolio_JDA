/* =========================
   ELEMENTS
========================= */

const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const backToTop = document.getElementById("backToTop");

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section");

const revealElements = document.querySelectorAll(".reveal");

const year = document.getElementById("year");

/* =========================
   MOBILE MENU
========================= */
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}

/* Close menu after clicking a link */

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

/* =========================
   DARK / LIGHT MODE
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");

  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    if (isLight) {
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
}

/* =========================
   ACTIVE NAV LINK
========================= */

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =========================
   BACK TO TOP
========================= */

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
}

/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});

/* =========================
   FOOTER YEAR
========================= */

if (year) {
  year.textContent = new Date().getFullYear();
}
/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",

      block: "start",
    });
  });
});

/* =========================
   PROJECT DETAILS
========================= */

const projectData = {
  superstore: {
    image: "src/PJ1.png",
    tags: ["Excel", "Power Query"],
    github: "https://github.com/Abdullabbas",
    live: "#",
    showGithub: false,
    showLive: false,

    en: {
      title: "Superstore Sales Dashboard",

      description:
        "An interactive retail dashboard designed to help management understand sales, profitability, customer segments, categories, and regional performance.",

      goal: "Transform raw Superstore sales data into a clear business dashboard that makes important sales and profitability trends easy to understand.",

      process: [
        "Cleaned and transformed the raw dataset using Power Query.",
        "Handled missing values, duplicates, and data types.",
        "Created calculated columns and KPIs.",
        "Analyzed sales and profitability by region, category, and customer segment.",
        "Built interactive Pivot Tables, charts, and slicers.",
        "Designed a one-page interactive dashboard.",
      ],

      insights: [
        "Identified the strongest-performing regions.",
        "Compared profitability across product categories.",
        "Analyzed customer segment performance.",
        "Examined monthly sales trends.",
        "Created KPIs to monitor overall business performance.",
      ],
    },

    ar: {
      title: "لوحة تحكم مبيعات Superstore",

      description:
        "لوحة تحكم تفاعلية لقطاع التجزئة صُممت لمساعدة الإدارة على فهم المبيعات والربحية وشرائح العملاء والفئات والأداء الإقليمي.",

      goal: "تحويل بيانات مبيعات Superstore الخام إلى لوحة تحكم واضحة للأعمال تُسهّل فهم اتجاهات المبيعات والربحية المهمة.",

      process: [
        "تنظيف وتحويل البيانات الخام باستخدام Power Query.",
        "معالجة القيم المفقودة والتكرارات وأنواع البيانات.",
        "إنشاء أعمدة محسوبة ومؤشرات أداء رئيسية.",
        "تحليل المبيعات والربحية حسب المنطقة والفئة وشريحة العملاء.",
        "بناء جداول محورية وأشكال بيانية ومرشحات تفاعلية.",
        "تصميم لوحة تحكم تفاعلية من صفحة واحدة.",
      ],

      insights: [
        "تحديد المناطق الأعلى أداءً.",
        "مقارنة الربحية بين فئات المنتجات.",
        "تحليل أداء شرائح العملاء.",
        "دراسة اتجاهات المبيعات الشهرية.",
        "إنشاء مؤشرات أداء لمتابعة أداء الأعمال بشكل عام.",
      ],
    },
  },

  "marketing-campaigns": {
    image: "src/pj2 p1.png",
    images: [
      "src/pj2 p2.png",
      "src/pj2 p3.png",
      "src/pj2 p4.png",
      "src/pj2 p5.png",
      "src/pj2 p6.png",
      "src/pj2 p7.png",
    ],
    tags: ["Power BI", "Marketing Analytics"],
    github:
      "https://github.com/Abdullabbas/Abdullah_Projects/tree/main/Market%20Analysis%20Digitera%20Training%20Final%20Project",
    showGithub: true,

    en: {
      title: "Marketing Campaigns Analysis",

      description:
        "An interactive dashboard analyzing 800 marketing campaigns across 6 channels, uncovering top-performing channels and proposing a data-driven budget reallocation for next year.",

      goal: "Analyze past campaign performance to find what is working and what is not, and turn that into a clear budget recommendation for next year.",

      process: [
        "Built DAX measures for ROAS, CTR, CPC, CVR, CPA, and AOV.",
        "Compared channel performance by spend share vs revenue share.",
        "Analyzed campaign types and audiences to find the strongest combinations.",
        "Studied monthly trends across 2024 and 2025.",
        "Investigated campaign-level outliers to test whether they were real.",
        "Designed a 7-page Power BI dashboard, one page per key question.",
      ],

      insights: [
        "Email outperforms every paid channel by a wide margin, since it carries no media cost.",
        "LinkedIn takes the largest share of spend but returns the smallest share of revenue.",
        "Retargeting delivers the strongest return; Awareness the weakest despite the largest budget.",
        "The best-performing campaigns cluster at low spend, suggesting limited room to scale as-is.",
        "Proposed shifting budget from LinkedIn and Google Ads into TikTok and Email.",
      ],
    },

    ar: {
      title: "تحليل حملات التسويق",

      description:
        "لوحة تحكم تفاعلية لتحليل 800 حملة تسويقية عبر 6 قنوات، تكشف أفضل القنوات أداءً وتقترح إعادة توزيع الميزانية للعام القادم.",

      goal: "تحليل أداء الحملات السابقة لمعرفة ما ينجح وما لا ينجح، وتحويل ذلك إلى توصية واضحة لميزانية العام القادم.",

      process: [
        "بناء مقاييس DAX لـ ROAS و CTR و CPC و CVR و CPA و AOV.",
        "مقارنة أداء القنوات من خلال نسبة الإنفاق مقابل نسبة الإيراد.",
        "تحليل أنواع الحملات والجماهير لإيجاد أقوى التوليفات.",
        "دراسة الاتجاهات الشهرية عبر عامي 2024 و2025.",
        "فحص القيم الشاذة على مستوى الحملة لاختبار مدى واقعيتها.",
        "تصميم لوحة تحكم من 7 صفحات في Power BI، كل صفحة تجيب عن سؤال رئيسي.",
      ],

      insights: [
        "قناة البريد الإلكتروني تتفوق بفارق كبير على كل القنوات المدفوعة، لأنها بلا تكلفة إعلانية.",
        "LinkedIn تأخذ أكبر نسبة من الميزانية لكنها ترجع أقل نسبة من الإيراد.",
        "حملات الـ Retargeting تحقق أفضل عائد؛ وحملات الـ Awareness الأضعف رغم أكبر ميزانية.",
        "أفضل الحملات أداءً تتركز عند إنفاق منخفض، ما يشير لمساحة محدودة للتوسع بنفس الكفاءة.",
        "التوصية: تحويل جزء من ميزانية LinkedIn وGoogle Ads إلى TikTok والبريد الإلكتروني.",
      ],
    },
  },

  "hr-analysis": {
    image: "src/p3 1.png",
    images: ["src/p3 1.png", "src/p3 2.png", "src/p3 3.png", "src/p3 4.png"],
    tags: ["Power BI", "HR Analytics"],
    github:
      "https://github.com/Abdullabbas/Abdullah_Projects/tree/main/HR%20Analysis%20Dashboard%20DEPI%20Project",
    showGithub: true,

    en: {
      title: "HR Analysis Dashboard",

      description:
        "An interactive 4-page dashboard analyzing 6,500 employees, covering workforce, attrition, engagement and satisfaction, performance, attendance, and learning.",

      goal: "Give HR a clear view of the workforce, where and why people leave, how employees feel, and whether performance, attendance, and training are aligned.",

      process: [
        "Built a star-schema data model with a central HR fact table and dimension tables for date, department, job role, location, education, and employment status.",
        "Created DAX measures for headcount, attrition rate, average tenure, satisfaction scores, recommendation rate, attendance rate, and training completion rate.",
        "Designed a 4-page Power BI dashboard, one page per key HR question.",
        "Added slicers for department, year, region, tenure band, job level, and employment type.",
        "Added hover tooltips with key insights on every page.",
      ],

      insights: [
        "The company has 6,500 employees; 5,744 are active and 756 have left, an attrition rate of 11.63%.",
        "Engineering is the largest department (1,345 employees), followed by Sales (1,020).",
        "95.24% of exits are voluntary, so most attrition is a retention problem, not a performance one.",
        "Career Growth (198), Compensation (139), and Workload (138) are the top exit reasons; December has the most exits (89).",
        "Satisfaction is nearly identical across all departments (about 3.53), and 70.47% of employees would recommend the company.",
        "Attendance is strong at 96.06%, while training completion is lower at 77.49%.",
      ],
    },

    ar: {
      title: "تحليل الموارد البشرية",

      description:
        "لوحة تحكم تفاعلية من 4 صفحات لتحليل 6,500 موظف، تغطي القوى العاملة ومعدل ترك العمل والرضا الوظيفي والأداء والحضور والتدريب.",

      goal: "منح فريق الموارد البشرية رؤية واضحة عن القوى العاملة، وأين ولماذا يغادر الموظفون، وكيف يشعرون، وهل الأداء والحضور والتدريب متوافقة.",

      process: [
        "بناء نموذج بيانات نجمي بجدول حقائق مركزي للموارد البشرية وجداول أبعاد للتاريخ والقسم والوظيفة والموقع والتعليم وحالة التوظيف.",
        "إنشاء مقاييس DAX لعدد الموظفين ومعدل ترك العمل ومتوسط مدة الخدمة ودرجات الرضا ونسبة التوصية ونسبة الحضور ونسبة إكمال التدريب.",
        "تصميم لوحة تحكم من 4 صفحات في Power BI، كل صفحة تجيب عن سؤال رئيسي.",
        "إضافة فلاتر للقسم والسنة والمنطقة وفئة مدة الخدمة والمستوى الوظيفي ونوع التوظيف.",
        "إضافة نوافذ منبثقة عند التمرير تعرض أهم الرؤى في كل صفحة.",
      ],

      insights: [
        "يبلغ عدد الموظفين 6,500؛ منهم 5,744 على رأس العمل و756 غادروا، بمعدل ترك عمل 11.63%.",
        "قسم الهندسة هو الأكبر (1,345 موظف) يليه المبيعات (1,020).",
        "95.24% من حالات الخروج اختيارية، أي أن المشكلة في الاحتفاظ بالموظفين وليست في الأداء.",
        "فرص النمو الوظيفي (198) والتعويضات (139) وضغط العمل (138) أهم أسباب المغادرة؛ وشهر ديسمبر الأعلى خروجًا (89).",
        "الرضا الوظيفي متقارب جدًا بين كل الأقسام (حوالي 3.53)، و70.47% من الموظفين يوصون بالشركة.",
        "نسبة الحضور قوية (96.06%) بينما نسبة إكمال التدريب أقل (77.49%).",
      ],
    },
  },
  "bean-cafe": {
    image: "src/P4.png",
    tags: ["Tableau", "Sales Analytics"],
    github: "#",
    showGithub: false,
    live: "https://public.tableau.com/app/profile/abdullah.ahmed6826/viz/TablaeuDashboardAssignment/BeanCafeDashboard",
    showLive: true,

    en: {
      title: "Bean Cafe Sales Dashboard",

      description:
        "An interactive Tableau dashboard analyzing Bean Cafe sales across 3 branches, covering total revenue, total orders, the daily sales trend, and category, item, and branch performance.",

      goal: "Give the cafe a single, clear view of how much it sells, what sells best, and which branches drive the most revenue.",

      process: [
        "Connected and prepared the cafe sales data in Tableau.",
        "Built KPI sheets for total revenue and total orders.",
        "Created a line chart showing the daily sales trend from Oct 5 to Oct 11.",
        "Built a categories summary table with orders, unit price, and revenue for each item.",
        "Built a branches summary table comparing Alexandria, Cairo, and Giza.",
        "Combined all sheets into one dashboard.",
      ],

      insights: [
        "The cafe generated 8,315 EGP in revenue from 40 orders, an average of about 208 EGP per order.",
        "Alexandria is the top branch with 3,695 EGP (44% of revenue), followed by Giza (2,660) and Cairo (1,960).",
        "Latte (1,760) and Cheesecake (1,750) are the top items by revenue, almost tied.",
        "Drinks bring in the most revenue (4,040 EGP), followed by Desserts (3,190) and Bakery (1,085).",
        "Sales peaked on Oct 5 (1,735) and then settled between about 970 and 1,280 per day.",
      ],
    },

    ar: {
      title: "لوحة تحكم مبيعات Bean Cafe",

      description:
        "لوحة تحكم تفاعلية في Tableau لتحليل مبيعات مقهى Bean Cafe عبر 3 فروع، تغطي إجمالي الإيرادات والطلبات والاتجاه اليومي للمبيعات وأداء الفئات والأصناف والفروع.",

      goal: "منح المقهى رؤية واحدة واضحة عن حجم المبيعات، وأكثر الأصناف مبيعًا، والفروع الأعلى إيرادًا.",

      process: [
        "ربط بيانات مبيعات المقهى وتجهيزها في Tableau.",
        "بناء مؤشرات أداء لإجمالي الإيرادات وإجمالي الطلبات.",
        "إنشاء رسم خطي يوضح اتجاه المبيعات اليومي من 5 إلى 11 أكتوبر.",
        "بناء جدول ملخص الفئات يعرض الطلبات وسعر الوحدة والإيرادات لكل صنف.",
        "بناء جدول ملخص الفروع للمقارنة بين الإسكندرية والقاهرة والجيزة.",
        "دمج كل الأوراق في لوحة تحكم واحدة.",
      ],

      insights: [
        "حقق المقهى 8,315 جنيه إيرادات من 40 طلبًا، بمتوسط حوالي 208 جنيه للطلب.",
        "فرع الإسكندرية الأعلى بإيرادات 3,695 جنيه (44% من الإجمالي)، يليه الجيزة (2,660) ثم القاهرة (1,960).",
        "اللاتيه (1,760) والتشيز كيك (1,750) أعلى الأصناف إيرادًا بفارق بسيط.",
        "المشروبات الأعلى إيرادًا (4,040 جنيه)، تليها الحلويات (3,190) ثم المخبوزات (1,085).",
        "بلغت المبيعات ذروتها يوم 5 أكتوبر (1,735) ثم استقرت بين 970 و1,280 تقريبًا يوميًا.",
      ],
    },
  },
};

function getCurrentLang() {
  return window.currentLang === "ar" ? "ar" : "en";
}

/* =========================
   MODAL ELEMENTS
========================= */

const projectModal = document.getElementById("projectModal");

const modalClose = document.getElementById("modalClose");

const modalOverlay = document.getElementById("modalOverlay");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalTags = document.getElementById("modalTags");

const modalGoal = document.getElementById("modalGoal");

const modalProcess = document.getElementById("modalProcess");

const modalInsights = document.getElementById("modalInsights");

const modalGithub = document.getElementById("modalGithub");

const modalLive = document.getElementById("modalLive");

/* =========================
   OPEN PROJECT
========================= */

let activeProjectId = null;

let galleryIndex = 0;

function renderGallery(images, altText) {
  galleryIndex = 0;
  const modalImage = document.getElementById("modalImage");

  modalImage.innerHTML = `
    <div class="modal-gallery">
      <img src="${images[0]}" alt="${altText}" class="modal-gallery-img" />
      <button
        type="button"
        class="modal-gallery-arrow modal-gallery-prev"
        aria-label="Previous image"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button
        type="button"
        class="modal-gallery-arrow modal-gallery-next"
        aria-label="Next image"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <div class="modal-gallery-counter">1 / ${images.length}</div>
    </div>
  `;

  const imgEl = modalImage.querySelector(".modal-gallery-img");
  const counterEl = modalImage.querySelector(".modal-gallery-counter");
  const prevBtn = modalImage.querySelector(".modal-gallery-prev");
  const nextBtn = modalImage.querySelector(".modal-gallery-next");

  function updateGallery() {
    imgEl.src = images[galleryIndex];
    counterEl.textContent = `${galleryIndex + 1} / ${images.length}`;
  }

  prevBtn.addEventListener("click", () => {
    galleryIndex = (galleryIndex - 1 + images.length) % images.length;
    updateGallery();
  });

  nextBtn.addEventListener("click", () => {
    galleryIndex = (galleryIndex + 1) % images.length;
    updateGallery();
  });
}

function renderProjectModal(projectId) {
  const project = projectData[projectId];

  if (!project) return;

  const lang = getCurrentLang();
  const localized = project[lang] || project.en;

  /* Title */

  modalTitle.textContent = localized.title;

  /* Description */

  modalDescription.textContent = localized.description;

  const modalImage = document.getElementById("modalImage");

  if (project.images && project.images.length > 1) {
    renderGallery(project.images, localized.title);
  } else {
    modalImage.innerHTML = `<img src="${project.image}" alt="${localized.title}">`;
  }

  /* Tags */

  modalTags.innerHTML = "";

  project.tags.forEach((tag) => {
    const span = document.createElement("span");

    span.textContent = tag;

    modalTags.appendChild(span);
  });

  /* Goal */

  modalGoal.textContent = localized.goal;

  /* Process */

  modalProcess.innerHTML = "";

  localized.process.forEach((item) => {
    const li = document.createElement("li");

    li.textContent = item;

    modalProcess.appendChild(li);
  });

  /* Insights */

  modalInsights.innerHTML = "";

  localized.insights.forEach((item) => {
    const li = document.createElement("li");

    li.textContent = item;

    modalInsights.appendChild(li);
  });

  /* Links */

  if (project.showGithub) {
    modalGithub.style.display = "inline-flex";
    modalGithub.href = project.github;
  } else {
    modalGithub.style.display = "none";
  }

  if (project.showLive) {
    modalLive.style.display = "inline-flex";
    modalLive.href = project.live;
  } else {
    modalLive.style.display = "none";
  }
}

const projectButtons = document.querySelectorAll(".project-details-btn");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectId = button.dataset.project;

    if (!projectData[projectId]) return;

    activeProjectId = projectId;

    renderProjectModal(projectId);

    /* Open */

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

/* Re-render the open modal in the new language when the user switches EN/AR */

document.addEventListener("languagechange", () => {
  if (activeProjectId && projectModal.classList.contains("active")) {
    renderProjectModal(activeProjectId);
  }
});

/* =========================
   CLOSE MODAL
========================= */

function closeProjectModal() {
  projectModal.classList.remove("active");

  document.body.style.overflow = "";
}
if (modalClose) {
  modalClose.addEventListener("click", closeProjectModal);
}
if (modalOverlay) {
  modalOverlay.addEventListener("click", closeProjectModal);
}

/* ESC KEY */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal.classList.contains("active")) {
    closeProjectModal();
  }
});

/* =========================
   PROFILE MODAL
========================= */

const profileTrigger = document.getElementById("profileTrigger");

const profileModal = document.getElementById("profileModal");

const profileModalClose = document.getElementById("profileModalClose");

const profileModalOverlay = document.getElementById("profileModalOverlay");

const profileCloseBtn = document.getElementById("profileCloseBtn");

const profileProjectsBtn = document.getElementById("profileProjectsBtn");

/* =========================
   OPEN PROFILE
========================= */
if (profileTrigger) {
  profileTrigger.addEventListener("click", (event) => {
    event.preventDefault();

    profileModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
}

/* =========================
   CLOSE PROFILE
========================= */

function closeProfileModal() {
  profileModal.classList.remove("active");

  document.body.style.overflow = "";
}

if (profileModalClose) {
  profileModalClose.addEventListener("click", closeProfileModal);
}

if (profileModalOverlay) {
  profileModalOverlay.addEventListener("click", closeProfileModal);
}

if (profileCloseBtn) {
  profileCloseBtn.addEventListener("click", closeProfileModal);
}
/* =========================
   VIEW PROJECTS
========================= */
if (profileProjectsBtn) {
  profileProjectsBtn.addEventListener("click", () => {
    closeProfileModal();
  });
}

/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && profileModal.classList.contains("active")) {
    closeProfileModal();
  }
});
/* =========================
   LANGUAGE TOGGLE
========================= */

let currentLang = localStorage.getItem("language") || "en";
window.currentLang = currentLang;

function setLanguage(language) {
  currentLang = language;
  window.currentLang = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-ar]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  if (languageToggle) {
    languageToggle.querySelector("span:first-child").textContent =
      language === "en" ? "AR" : "EN";

    languageToggle.querySelector("span:last-child").textContent =
      language === "en" ? "EN" : "AR";
  }

  localStorage.setItem("language", language);

  document.dispatchEvent(new Event("languagechange"));
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "ar" : "en");
  });
}

setLanguage(currentLang);

/* =========================
   CURSOR SPOTLIGHT
   A soft glow that follows the pointer across the page,
   reacting to the "graph paper" grid instead of decorating
   over it. Disabled automatically for touch / reduced motion.
========================= */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const isTouchDevice = window.matchMedia("(hover: none)").matches;

if (!prefersReducedMotion && !isTouchDevice) {
  let spotlightRaf = null;

  window.addEventListener("pointermove", (event) => {
    if (spotlightRaf) return;

    spotlightRaf = requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
      spotlightRaf = null;
    });
  });
}

/* =========================
   HERO TERMINAL TILT
   Subtle 3D parallax on the hero card, following the pointer
   within its own bounds. Resets smoothly on mouse leave.
========================= */
const dashboardCard = document.querySelector(".dashboard-card");

if (dashboardCard && !prefersReducedMotion && !isTouchDevice) {
  let tiltRaf = null;

  dashboardCard.addEventListener("mousemove", (event) => {
    if (tiltRaf) return;

    tiltRaf = requestAnimationFrame(() => {
      const rect = dashboardCard.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      dashboardCard.style.transform = `perspective(1000px) rotateX(${(
        py * -8
      ).toFixed(
        2,
      )}deg) rotateY(${(px * 10).toFixed(2)}deg) scale3d(1.02,1.02,1.02)`;

      dashboardCard.style.setProperty("--glow-x", `${(px + 0.5) * 100}%`);
      dashboardCard.style.setProperty("--glow-y", `${(py + 0.5) * 100}%`);

      tiltRaf = null;
    });
  });

  dashboardCard.addEventListener("mouseleave", () => {
    dashboardCard.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  });
}


/* =========================
   HORIZONTAL SCROLLERS
========================= */
function initHScroll(selector, label, mobileOnly = false) {
  const track = document.querySelector(selector);
  if (!track) return;

  // wrap the existing grid
  const wrap = document.createElement("div");
  wrap.className = mobileOnly ? "hscroll hscroll-mobile" : "hscroll";
  track.parentNode.insertBefore(wrap, track);
  wrap.appendChild(track);

  if (!mobileOnly) {
    track.classList.add("hscroll-track");
    track.setAttribute("tabindex", "0");
    track.setAttribute("role", "region");
    track.setAttribute("aria-label", label);
  }

  // cards off-screen to the side never intersect vertically,
  // so show them right away instead of waiting for scroll-reveal
  track
    .querySelectorAll(".reveal")
    .forEach((el) => el.classList.add("visible"));

  // controls
  const controls = document.createElement("div");
  controls.className = "hscroll-controls";
  controls.innerHTML = `
    <div class="hscroll-progress"><div class="hscroll-thumb"></div></div>
    <div class="hscroll-buttons">
      <button class="hscroll-btn hscroll-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="hscroll-btn hscroll-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>
    </div>`;
  wrap.appendChild(controls);

  const prev = controls.querySelector(".hscroll-prev");
  const next = controls.querySelector(".hscroll-next");
  const thumb = controls.querySelector(".hscroll-thumb");

  const dir = () => (getComputedStyle(track).direction === "rtl" ? -1 : 1);
  const step = () => {
    const card = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return (
      (card ? card.getBoundingClientRect().width : track.clientWidth) + gap
    );
  };

  function update() {
    const max = track.scrollWidth - track.clientWidth;
    const pos = Math.abs(track.scrollLeft);
    const ratio = max > 0 ? pos / max : 0;
    const thumbW = Math.max(12, (track.clientWidth / track.scrollWidth) * 100);
    thumb.style.width = thumbW + "%";
    thumb.style.insetInlineStart = ratio * (100 - thumbW) + "%";
    prev.disabled = pos <= 2;
    next.disabled = pos >= max - 2;
    controls.style.display = max > 2 ? "" : "none";
  }

  prev.addEventListener("click", () =>
    track.scrollBy({ left: -step() * dir(), behavior: "smooth" }),
  );
  next.addEventListener("click", () =>
    track.scrollBy({ left: step() * dir(), behavior: "smooth" }),
  );

  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") (dir() === 1 ? next : prev).click();
    if (e.key === "ArrowLeft") (dir() === 1 ? prev : next).click();
  });

  // mouse drag (touch already scrolls natively) — desktop scrollers only
  if (!mobileOnly) {
  let startX = 0,
    startScroll = 0,
    down = false,
    moved = false;
  track.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    down = true;
    moved = false;
    startX = e.clientX;
    startScroll = track.scrollLeft;
  });
  window.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 5) {
      moved = true;
      track.classList.add("is-dragging");
      track.style.scrollSnapType = "none";
    }
    if (moved) track.scrollLeft = startScroll - dx;
  });
  window.addEventListener("pointerup", () => {
    if (!down) return;
    down = false;
    if (moved) {
      track.classList.remove("is-dragging");
      track.style.scrollSnapType = "";
    }
  });
  // don't trigger "View details" etc. after a drag
  track.addEventListener(
    "click",
    (e) => {
      if (moved) {
        e.stopPropagation();
        e.preventDefault();
        moved = false;
      }
    },
    true,
  );
  }

  update();
  // images/fonts change widths after load
  window.addEventListener("load", update);
}

initHScroll(".experience-timeline", "Experience and trainings");
initHScroll(".certifications-grid", "Certifications");
initHScroll(".projects-grid", "Projects");
// swipe rows that only exist on mobile (controls hidden on desktop via CSS)
initHScroll(".about-cards", "About highlights", true);
initHScroll(".services-grid", "Services", true);

