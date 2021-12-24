// Get an Array of Past Seven Days
export const pastWeek = [...Array(7).keys()].map(
  (days) => new Date(Date.now() - 86400000 * days)
);

// Remove Duplicateds in an Array
export const removeDuplicates = (arr) => [...new Set(arr)];

// Get the Average of an Array of Number
export const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;

// Round Decimals to a Certain Number of Decimal Places
export const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);

// Generate a Random ID
/**
 * This simple function generates a random ID using Math.random().
 * Since Math.random() doesn’t guarantee that all the generated numbers are unique,
 * this method is not 100% secure to use in production.
 * But there’s no harm in using it during development to quickly get an ID to complete the implementation and test the app.
 */
export const randomID = () => "e" + Math.random().toString(36).substring(2);

// Check If the User has Scrolled to the Bottom of the Page
export const scrolledToBottom = () =>
  document.documentElement.clientHeight + window.scrollY >=
  document.documentElement.scrollHeight;

// Scroll to the Top of the Page
export const toTop = () => window.scrollTo(0, 0);

// Generate a Random Hex Color
export const hexColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");

// Strip HTML From Text
export const stripHtml = (html) =>
  new DOMParser().parseFromString(html, "text/html").body.textContent || "";

// Detect Dark Mode
// export const isDarkMode =
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;

// Clear All Cookies
// export const clearCookies = document.cookie
//   .split(";")
//   .forEach(
//     (cookie) =>
//       (document.cookie = cookie
//         .replace(/^ +/, "")
//         .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
//   );
