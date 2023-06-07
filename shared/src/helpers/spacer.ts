/**
 * spacer утилита чтобы добавить любому styled components margin и padding аттрибуты
 * export const SmallMuted = styled.small<SpacingAttr>`
    ${spacer}
   `;

   SpacingAttr - тип чтобы работала типизация
 */
import { TYPE_REPORT_LIGHT_THEME, space } from './theme';

// Создаём тип индексов для массива space 1 | 2 | .... | 12
export type SpacingIndex = Exclude<Partial<typeof space>['length'], typeof space['length']>;

export interface SpacingAttr {
  margin?: string;
  mt?: SpacingIndex;
  mr?: SpacingIndex;
  mb?: SpacingIndex;
  ml?: SpacingIndex;
  padding?: string;
  pt?: SpacingIndex;
  pr?: SpacingIndex;
  pb?: SpacingIndex;
  pl?: SpacingIndex;
}

export interface Props extends SpacingAttr {
  theme: TYPE_REPORT_LIGHT_THEME;
}

export const spacer = (props: Props) => ({
  margin: props.margin && `${props.margin}!important`,
  ...(props.mt !== undefined ? { 'margin-top': `${props.theme.space[props.mt]}!important` } : {}),
  ...(props.mr !== undefined ? { 'margin-right': `${props.theme.space[props.mr]}!important` } : {}),
  ...(props.mb !== undefined ? { 'margin-bottom': `${props.theme.space[props.mb]}!important` } : {}),
  ...(props.ml !== undefined ? { 'margin-left': `${props.theme.space[props.ml]}!important` } : {}),
  padding: props.padding && `${props.padding}!important`,
  ...(props.pt !== undefined ? { 'padding-top': `${props.theme.space[props.pt]}!important` } : {}),
  ...(props.pr !== undefined ? { 'padding-right': `${props.theme.space[props.pr]}!important` } : {}),
  ...(props.pb !== undefined ? { 'padding-bottom': `${props.theme.space[props.pb]}!important` } : {}),
  ...(props.pl !== undefined ? { 'padding-left': `${props.theme.space[props.pl]}!important` } : {}),
});
