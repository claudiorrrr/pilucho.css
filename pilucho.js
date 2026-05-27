// pilucho.js | MIT License
// Optional companion to pilucho.css. Wires up the interactive ARIA
// patterns the stylesheet already styles statically.
// Drop in: <script src="pilucho.js" defer></script>

(() => {
  const isDisabled = (el) =>
    el.disabled || el.getAttribute("aria-disabled") === "true";

  // aria-expanded: toggle the attribute and the `hidden` state of aria-controls
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[aria-expanded]");
    if (!trigger || trigger.matches('[role="tab"]')) return;
    if (isDisabled(trigger)) return;

    const expanded = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!expanded));

    const id = trigger.getAttribute("aria-controls");
    if (id) {
      const panel = document.getElementById(id);
      if (panel) panel.hidden = expanded;
    }
  });

  // aria-pressed: toggle the attribute on click
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[aria-pressed]");
    if (!trigger || isDisabled(trigger)) return;

    const pressed = trigger.getAttribute("aria-pressed") === "true";
    trigger.setAttribute("aria-pressed", String(!pressed));
  });

  // role="tab": click to select; arrow keys move between tabs in the list
  const selectTab = (tab) => {
    const tablist = tab.closest('[role="tablist"]');
    if (!tablist) return;

    for (const t of tablist.querySelectorAll('[role="tab"]')) {
      const isMe = t === tab;
      t.setAttribute("aria-selected", String(isMe));
      t.tabIndex = isMe ? 0 : -1;

      const id = t.getAttribute("aria-controls");
      if (id) {
        const panel = document.getElementById(id);
        if (panel) panel.hidden = !isMe;
      }
    }
    tab.focus();
  };

  document.addEventListener("click", (e) => {
    const tab = e.target.closest('[role="tab"]');
    if (tab) selectTab(tab);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const tab = e.target.closest('[role="tab"]');
    if (!tab) return;

    const tabs = [...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')];
    const i = tabs.indexOf(tab);
    const next =
      e.key === "ArrowRight"
        ? tabs[(i + 1) % tabs.length]
        : tabs[(i - 1 + tabs.length) % tabs.length];
    selectTab(next);
    e.preventDefault();
  });
})();
