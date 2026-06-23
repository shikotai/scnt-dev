import ru from "./ru";
import en from "./en";
import kk from "./kk";

export type Lang = "ru" | "en" | "kk";
export const translations = { ru, en, kk } as const;
