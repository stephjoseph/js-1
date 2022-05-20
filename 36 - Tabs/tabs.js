const tabs = document.querySelector(".tabs");
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  tabButtons.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });

  e.currentTarget.setAttribute("aria-selected", true);

  const { id } = e.currentTarget;

  const showPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);

  showPanel.hidden = false;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", handleTabClick);
});
