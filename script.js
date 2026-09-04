/* =========================
   ELEMENTS
========================= */

const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");

const backToTop = document.getElementById("backToTop");

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section");

const revealElements = document.querySelectorAll(".reveal");

const year = document.getElementById("year");

/* =========================
   MOBILE MENU
========================= */

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

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

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

year.textContent = new Date().getFullYear();

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
    title: "Superstore Sales Dashboard",
    image: "src/Screenshot 2026-08-31 080354.png",
    tags: ["Excel", "Power Query"],

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

    github: "https://github.com/Abdullabbas",

    live: "#",

    showGithub: false,
    showLive: false,
  },

  "retail-model": {
    title: "Retail Data Model",
    image: "src/Screenshot 2026-08-31 090422.png",
    tags: ["Power BI", "Data Modeling"],

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

    github: "https://github.com/Abdullabbas",

    live: "#",

    showGithub: false,
    showLive: false,
  },
};

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

const projectButtons = document.querySelectorAll(".project-details-btn");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectId = button.dataset.project;

    const project = projectData[projectId];

    if (!project) return;

    /* Title */

    modalTitle.textContent = project.title;

    /* Description */

    modalDescription.textContent = project.description;

    // أضف الأسطر دي جوه زرار الفتح (projectButtons.forEach):
    const modalImage = document.getElementById("modalImage");
    modalImage.innerHTML = `<img src="${project.image}" alt="${project.title}">`;

    /* Tags */

    modalTags.innerHTML = "";

    project.tags.forEach((tag) => {
      const span = document.createElement("span");

      span.textContent = tag;

      modalTags.appendChild(span);
    });

    /* Goal */

    modalGoal.textContent = project.goal;

    /* Process */

    modalProcess.innerHTML = "";

    project.process.forEach((item) => {
      const li = document.createElement("li");

      li.textContent = item;

      modalProcess.appendChild(li);
    });

    /* Insights */

    modalInsights.innerHTML = "";

    project.insights.forEach((item) => {
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
    /* Open */

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

/* =========================
   CLOSE MODAL
========================= */

function closeProjectModal() {
  projectModal.classList.remove("active");

  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeProjectModal);

modalOverlay.addEventListener("click", closeProjectModal);

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

profileTrigger.addEventListener("click", (event) => {
  event.preventDefault();

  profileModal.classList.add("active");

  document.body.style.overflow = "hidden";
});

/* =========================
   CLOSE PROFILE
========================= */

function closeProfileModal() {
  profileModal.classList.remove("active");

  document.body.style.overflow = "";
}

profileModalClose.addEventListener("click", closeProfileModal);

profileModalOverlay.addEventListener("click", closeProfileModal);

profileCloseBtn.addEventListener("click", closeProfileModal);

/* =========================
   VIEW PROJECTS
========================= */

profileProjectsBtn.addEventListener("click", () => {
  closeProfileModal();
});

/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && profileModal.classList.contains("active")) {
    closeProfileModal();
  }
});
