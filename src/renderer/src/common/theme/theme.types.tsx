import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    name1: React.CSSProperties;
    name2: React.CSSProperties;
    message1: React.CSSProperties;
    messagetime1: React.CSSProperties;
    info1: React.CSSProperties;
    table: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    name1?: React.CSSProperties;
    name2?: React.CSSProperties;
    message1?: React.CSSProperties;
    messagetime1?: React.CSSProperties;
    info1?: React.CSSProperties;
    table?: React.CSSProperties;
    t1: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    name1: true;
    name2: true;
    message1: true;
    messagetime1: true;
    info1: true;
    table: true;
    t1: true,
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    main: true;
    mainOutlined: true;
    opposite: true;
    oppositeOutlined: true;
    additional: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    // if will more typography keys create type TypographyKey = 'k1' | 'k2' and use [key in] for DRY
    name1: CSSProperties;
    name2: CSSProperties;
    message1: CSSProperties;
    messagetime1: CSSProperties;
    info1: CSSProperties;
    table: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    name1?: CSSProperties;
    name2?: CSSProperties;
    message1?: CSSProperties;
    messagetime1?: CSSProperties;
    info1?: CSSProperties;
    table: CSSProperties;
  }

  interface Palette {
    opposite: Palette['primary'];
  }

  interface PaletteOptions {
    opposite?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    name1: true;
    name2: true;
    message1: true;
    messagetime1: true;
    info1: true;
    table: true;
  }
}