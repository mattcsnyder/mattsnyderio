// analytics.ts
// Always create a no-op shim first so calls never crash
if (typeof window !== "undefined" && typeof window.gtag !== "function") {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
}

const GA_ID = import.meta.env.VITE_GA_TRACKING_ID;

export const initGA = () => {
  if (!GA_ID || document.getElementById("ga-script")) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.id = "ga-script";
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
};

export const logPageView = (path = window.location.pathname) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", { page_path: path });
  }
};

export const logEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};
