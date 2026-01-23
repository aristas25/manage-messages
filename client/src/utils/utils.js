import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import config from "../config";

export const tw = String.raw;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getBrandLogo = () => {
  return config.theme.logo;
};

export const shouldShowDownloadDialog = (brand) => {
  const key = `downloadDialogDismissed_${brand}`;
  return !localStorage.getItem(key);
};

export const markDownloadDialogDismissed = (brand) => {
  const key = `downloadDialogDismissed_${brand}`;
  localStorage.setItem(key, "true");
};
