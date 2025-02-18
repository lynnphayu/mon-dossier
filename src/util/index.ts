
export function updateActiveStates(
  root: HTMLElement,
  themeButtons: NodeListOf<HTMLButtonElement>,
  colorButtons: NodeListOf<HTMLButtonElement>
) {
  const isDark = root.classList.contains("dark");
  const currentColor = localStorage.getItem("accent-color");

  themeButtons.forEach((btn) => {
    const isActive = (btn.dataset.theme === "dark") === isDark;
    btn.classList.toggle("ring-2", isActive);
    btn.classList.toggle("ring-offset-2", isActive);
    btn.classList.toggle("ring-accent-light", isActive);
  });

  colorButtons.forEach((btn) => {
    const isActive = btn.dataset.color === currentColor;
    btn.classList.toggle("ring-2", isActive);
    btn.classList.toggle("ring-offset-2", isActive);
    btn.classList.toggle("ring-accent-light", isActive);
  });
}


export function adjustColor(color: string, amount: number): string {
  const hex = color.replace("#", "");
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export const hide = (element: HTMLElement) => {
  element.classList.remove("scale-100", "opacity-100");
  element.classList.add("scale-0", "opacity-0");
};

export const show = (element: HTMLElement) => {
  element.classList.remove("scale-0", "opacity-0");
  element.classList.add("scale-100", "opacity-100");
};

export const switchTheme = (root: HTMLElement, theme: "dark" | "light") => {
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
};

export const switchAccent = (root: HTMLElement, color: string) => {
  root.style.setProperty("--accent-light", color);
  root.style.setProperty("--accent-dark", adjustColor(color, 20));
  localStorage.setItem("accent-color", color);
};