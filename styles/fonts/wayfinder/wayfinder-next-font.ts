import localFont from "@next/font/local";

export const wayfinder = localFont({
  src: [
    { path: "./WayFinderCF-Thin.eot", weight: "100" },
    { path: "./WayFinderCF-Thin.woff", weight: "100" },
    { path: "./WayFinderCF-Thin.woff2", weight: "100" },
    {
      path: "./WayFinderCF-Regular.eot",
      weight: "400",
    },
    {
      path: "./WayFinderCF-Regular.woff",
      weight: "400",
    },
    {
      path: "./WayFinderCF-Regular.woff2",
      weight: "400",
    },
    {
      path: "./WayFinderCF-DemiBold.eot",
      weight: "600",
    },
    {
      path: "./WayFinderCF-DemiBold.woff",
      weight: "600",
    },
    {
      path: "./WayFinderCF-DemiBold.woff2",
      weight: "600",
    },
    { path: "./WayFinderCF-Bold.eot", weight: "700" },
    { path: "./WayFinderCF-Bold.woff", weight: "700" },
    { path: "./WayFinderCF-Bold.woff2", weight: "700" },
    {
      path: "./WayFinderCF-ExtraBold.eot",
      weight: "800",
    },
    {
      path: "./WayFinderCF-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "./WayFinderCF-ExtraBold.woff2",
      weight: "800",
    },
    { path: "./WayFinderCF-Heavy.eot", weight: "900" },
    { path: "./WayFinderCF-Heavy.woff", weight: "900" },
    {
      path: "./WayFinderCF-Heavy.woff2",
      weight: "900",
    },
    { path: "./WayFinderCF-Light.eot", weight: "300" },
    { path: "./WayFinderCF-Light.woff", weight: "300" },
    {
      path: "./WayFinderCF-Light.woff2",
      weight: "300",
    },
  ],
  variable: "--wayfinder-font",
});
