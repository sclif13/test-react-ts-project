import { LIGHT_THEME } from "@admiral-ds/react-ui";

/**
 * 1 rem = 16px - задаётся дефолтным размером шрифта
 */
export const space = [
  '0.25rem', // 0 - 4px
  '0.5rem', // 1 - 8px
  '0.75rem', // 2 - 12px
  '1rem', // 3 - 16 px
  '1.5rem', // 4 - 24px
  '2rem', // 5 - 32px
  '3rem', // 6 - 48px
  '4rem', // 7 - 64px
  '6rem', // 8 - 96px
  '8rem', // 9 - 128px
  '12rem', // 10 - 160px
  '16rem', // 11 - 176px
  '24rem',
] as const; // 12 - 192px

export const REPORT_LIGHT_THEME = {
  ...LIGHT_THEME,
  space,
};

export type TYPE_REPORT_LIGHT_THEME = typeof REPORT_LIGHT_THEME;