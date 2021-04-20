import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-186673049-3", {
    debug: true,
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
};

export const PageView = () => {
  ReactGA.pageview(window.location.pathname);
};

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
