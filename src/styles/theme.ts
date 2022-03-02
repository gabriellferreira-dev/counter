import { DefaultTheme } from 'styled-components';

type Variant = {
  bg: string;
  color: string;
};

type Variants = {
  hovered: Variant;
  disabled: Variant;
  pressed: Variant;
};

type VariantsThemes = {
  primary: Variants;
  secondary: Variants;
};

type Palette = {
  primaryColor: string;
  secondaryColor: string;
  white: string;
  black: string;
  variants: VariantsThemes;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Palette;
  }
}

export const theme: DefaultTheme = {
  colors: {
    primaryColor: '#026C00',
    secondaryColor: '#F7C346',
    variants: {
      primary: {
        hovered: {
          bg: '#079504',
          color: '#fff',
        },
        disabled: {
          bg: '#B7D0B6',
          color: '#fff',
        },
        pressed: {
          bg: '#013C00',
          color: '#fff',
        },
      },
      secondary: {
        hovered: {
          bg: '#FFDF77',
          color: '#000',
        },
        disabled: {
          bg: '#FFE58D',
          color: '#fff',
        },
        pressed: {
          bg: '#DCAC0D',
          color: '#000',
        },
      },
    },
    white: '#fff',
    black: '#000',
  },
};
