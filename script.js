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
    image: "src/Screenshot 2026-08-31 080354.png",
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

  "retail-model": {
    image: "src/Screenshot 2026-08-31 090422.png",
    tags: ["Power BI", "Data Modeling"],
    github: "https://github.com/Abdullabbas",
    live: "#",
    showGithub: false,
    showLive: false,

    en: {
      title: "Retail Data Model",

      description:
        "A structured retail data model designed to organize business data and provide a reliable foundation for analysis and reporting.",

      goal: "Create a clean and scalable data model that connects customers, products, orders, and dates for efficient business analysis.",

      process: [
        "Identified the main fact table and dimension tables.",
        "Created Customer, Product, and Date dimensions.",
        "Defined relationships between tables.",
        "Structured the model using a star-schema approach.",
        "Prepared the model for Power BI reporting.",
        "Created measures for business analysis.",
      ],

      insights: [
        "Improved data organization and consistency.",
        "Created a reusable model for different reports.",
        "Made filtering and analysis more efficient.",
        "Prepared the dataset for interactive Power BI dashboards.",
      ],
    },

    ar: {
      title: "نموذج بيانات التجزئة",

      description:
        "نموذج بيانات منظّم لقطاع التجزئة صُمم لتنظيم بيانات الأعمال وتوفير أساس موثوق للتحليل وإعداد التقارير.",

      goal: "إنشاء نموذج بيانات نظيف وقابل للتوسع يربط بين العملاء والمنتجات والطلبات والتواريخ لتحليل أعمال فعّال.",

      process: [
        "تحديد جدول الحقائق الرئيسي وجداول الأبعاد.",
        "إنشاء أبعاد العميل والمنتج والتاريخ.",
        "تحديد العلاقات بين الجداول.",
        "هيكلة النموذج باستخدام نهج المخطط النجمي (Star Schema).",
        "تجهيز النموذج لإعداد التقارير في Power BI.",
        "إنشاء مقاييس لتحليل الأعمال.",
      ],

      insights: [
        "تحسين تنظيم البيانات واتساقها.",
        "إنشاء نموذج قابل لإعادة الاستخدام في تقارير مختلفة.",
        "جعل عمليات التصفية والتحليل أكثر كفاءة.",
        "تجهيز البيانات للوحات تحكم Power BI التفاعلية.",
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
  modalImage.innerHTML = `<img src="${project.image}" alt="${localized.title}">`;

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
