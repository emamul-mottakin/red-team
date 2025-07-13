document.addEventListener("DOMContentLoaded", function () {
  // Tab functionality
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  // Sports sub-tab functionality
  const sportsTabBtns = document.querySelectorAll(".sports-tab-btn");
  const sportsTabPanes = document.querySelectorAll(".sports-tab-pane");

  // Initialize first tab and sports sub-tab
  showTab("sports");
  showSportsTab("all");

  // Add event listeners for main tabs
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");
      showTab(tabId);
    });
  });

  // Add event listeners for sports sub-tabs
  sportsTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const sportsTabId = this.getAttribute("data-sports-tab");
      showSportsTab(sportsTabId);
    });
  });

  // Function to show main tab content
  function showTab(tabId) {
    // Update active state of tab buttons
    tabBtns.forEach((btn) => {
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active", "bg-primary", "text-white");
        btn.classList.remove("bg-white", "text-gray-700");
      } else {
        btn.classList.remove("active", "bg-primary", "text-white");
        btn.classList.add("bg-white", "text-gray-700");
      }
    });

    // Update active state of tab panes
    tabPanes.forEach((pane) => {
      if (pane.id === tabId) {
        pane.classList.add("active");
        pane.style.display = "block";

        // Trigger reflow to enable animation
        setTimeout(() => {
          pane.style.opacity = "1";
          pane.style.transform = "translateY(0)";
        }, 10);

        // Animate charts if sports tab is active
        if (tabId === "sports") {
          setTimeout(() => {
            document.querySelectorAll(".chart-bar").forEach((bar) => {
              const width = bar.getAttribute("data-width");
              bar.style.width = width + "%";
            });
          }, 300);
        }
      } else {
        pane.style.opacity = "0";
        pane.style.transform = "translateY(10px)";

        // Wait for animation to complete before hiding
        setTimeout(() => {
          pane.classList.remove("active");
          pane.style.display = "none";
        }, 300);
      }
    });
  }

  // Function to show sports sub-tab content
  function showSportsTab(sportsTabId) {
    // Update active state of sports tab buttons
    sportsTabBtns.forEach((btn) => {
      if (btn.getAttribute("data-sports-tab") === sportsTabId) {
        btn.classList.add("active", "bg-primary", "text-white");
        btn.classList.remove("bg-white", "text-gray-700");
      } else {
        btn.classList.remove("active", "bg-primary", "text-white");
        btn.classList.add("bg-white", "text-gray-700");
      }
    });

    // Update active state of sports tab panes
    sportsTabPanes.forEach((pane) => {
      if (pane.id === sportsTabId) {
        pane.classList.add("active");
        pane.style.display = "block";

        // Trigger reflow to enable animation
        setTimeout(() => {
          pane.style.opacity = "1";
          pane.style.transform = "translateX(0)";
        }, 10);

        // Animate charts for the "All" sports tab
        if (sportsTabId === "all") {
          setTimeout(() => {
            document.querySelectorAll(".chart-bar").forEach((bar) => {
              const width = bar.getAttribute("data-width");
              bar.style.width = width + "%";
            });
          }, 300);
        }
      } else {
        pane.style.opacity = "0";
        pane.style.transform = "translateX(20px)";

        // Wait for animation to complete before hiding
        setTimeout(() => {
          pane.classList.remove("active");
          pane.style.display = "none";
        }, 300);
      }
    });
  }
  // Add food tab functionality (same pattern as sports tabs)
  const foodTabBtns = document.querySelectorAll(".food-tab-btn");
  const foodTabPanes = document.querySelectorAll(".food-tab-pane");

  function showFoodTab(foodTabId) {
    // Update active state of food tab buttons
    foodTabBtns.forEach((btn) => {
      if (btn.getAttribute("data-food-tab") === foodTabId) {
        btn.classList.add("active", "bg-primary", "text-white");
        btn.classList.remove("bg-white", "text-gray-700");
      } else {
        btn.classList.remove("active", "bg-primary", "text-white");
        btn.classList.add("bg-white", "text-gray-700");
      }
    });

    // Update active state of food tab panes
    foodTabPanes.forEach((pane) => {
      if (pane.id === foodTabId) {
        pane.classList.add("active");
        pane.style.display = "block";
        setTimeout(() => {
          pane.style.opacity = "1";
          pane.style.transform = "translateX(0)";
        }, 10);
      } else {
        pane.style.opacity = "0";
        pane.style.transform = "translateX(20px)";
        setTimeout(() => {
          pane.classList.remove("active");
          pane.style.display = "none";
        }, 300);
      }
    });
  }

  // Initialize first food sub-tab
  showFoodTab("breakfast");

  // Add event listeners for food sub-tabs
  foodTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const foodTabId = this.getAttribute("data-food-tab");
      showFoodTab(foodTabId);
    });
  });
});
