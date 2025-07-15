document.addEventListener("DOMContentLoaded", function () {
  // Team tab functionality
  const teamTabBtns = document.querySelectorAll(".team-tab-btn");
  const teamTabPanes = document.querySelectorAll(".team-tab-pane");

  // Referee sub-tab functionality
  const refereeTabBtns = document.querySelectorAll(".referee-tab-btn");
  const refereeTabPanes = document.querySelectorAll(".referee-tab-pane");

  // Initialize first tab and referee sub-tab
  showTeamTab("red-team");
  showRefereeTab("cricket-referee");

  // Add event listeners for team tabs
  teamTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-team-tab");
      showTeamTab(tabId);
    });
  });

  // Add event listeners for referee sub-tabs
  refereeTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const refereeTabId = this.getAttribute("data-referee-tab");
      showRefereeTab(refereeTabId);
    });
  });

  // Show More functionality for team members
  const showMoreBtn = document.getElementById("show-more-btn");
  const teamMembersContainer = document.getElementById(
    "team-members-container"
  );

  // Initially hide members beyond the first 14
  const allMembers = teamMembersContainer.querySelectorAll(".bg-secondary-50");
  if (allMembers.length > 14) {
    for (let i = 14; i < allMembers.length; i++) {
      allMembers[i].style.display = "none";
    }
  } else {
    showMoreBtn.style.display = "none";
  }

  let showingAll = false;
  showMoreBtn.addEventListener("click", function () {
    if (showingAll) {
      // Show only first 14
      for (let i = 14; i < allMembers.length; i++) {
        allMembers[i].style.display = "none";
      }
      showMoreBtn.textContent = "Show All Team Members";
      showingAll = false;

      // Scroll to top of team section
      document.getElementById("team").scrollIntoView({ behavior: "smooth" });
    } else {
      // Show all
      for (let i = 14; i < allMembers.length; i++) {
        allMembers[i].style.display = "flex";
      }
      showMoreBtn.textContent = "Show Less";
      showingAll = true;
    }
  });

  // Function to show team tab content
  function showTeamTab(tabId) {
    // Update active state of tab buttons
    teamTabBtns.forEach((btn) => {
      if (btn.getAttribute("data-team-tab") === tabId) {
        btn.classList.add("active", "bg-primary", "text-white");
        btn.classList.remove("bg-white", "text-gray-700");
      } else {
        btn.classList.remove("active", "bg-primary", "text-white");
        btn.classList.add("bg-white", "text-gray-700");
      }
    });

    // Update active state of tab panes
    teamTabPanes.forEach((pane) => {
      if (pane.id === tabId) {
        pane.classList.add("active");
        pane.style.display = "block";

        setTimeout(() => {
          pane.style.opacity = "1";
          pane.style.transform = "translateY(0)";
        }, 10);
      } else {
        pane.style.opacity = "0";
        pane.style.transform = "translateY(10px)";

        setTimeout(() => {
          pane.classList.remove("active");
          pane.style.display = "none";
        }, 300);
      }
    });
  }

  // Function to show referee sub-tab content
  function showRefereeTab(refereeTabId) {
    // Update active state of referee tab buttons
    refereeTabBtns.forEach((btn) => {
      if (btn.getAttribute("data-referee-tab") === refereeTabId) {
        btn.classList.add("active", "bg-primary", "text-white");
        btn.classList.remove("bg-white", "text-gray-700");
      } else {
        btn.classList.remove("active", "bg-primary", "text-white");
        btn.classList.add("bg-white", "text-gray-700");
      }
    });

    // Update active state of referee tab panes
    refereeTabPanes.forEach((pane) => {
      if (pane.id === refereeTabId) {
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
});

// Load More functionality for team members
const loadMoreBtn = document.getElementById("load-more-btn");
const teamMembersContainer = document.getElementById("team-members-container");
const hiddenMembers = teamMembersContainer.querySelectorAll(".hidden-member");

// Initially hide members beyond the first 12 (plus owner/manager)
if (hiddenMembers.length > 0) {
  hiddenMembers.forEach((member) => {
    member.style.display = "none";
  });
} else {
  loadMoreBtn.style.display = "none";
}

let showingAll = false;
loadMoreBtn.addEventListener("click", function () {
  if (showingAll) {
    // Hide the additional members
    hiddenMembers.forEach((member) => {
      member.style.display = "none";
    });
    loadMoreBtn.textContent = "Load More";
    showingAll = false;

    // Scroll to top of team section
    document.getElementById("team").scrollIntoView({ behavior: "smooth" });
  } else {
    // Show all members
    hiddenMembers.forEach((member) => {
      member.style.display = "flex";
    });
    loadMoreBtn.textContent = "Show Less";
    showingAll = true;
  }
});
