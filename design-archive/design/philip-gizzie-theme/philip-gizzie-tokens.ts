/**
 * PhilipGizzieTheme tokens theme.
 * Include all tokens in this object.
 */
export function philipGizzieTokens() {
  const tokens = {
    /**
     * Color Palette
     */
    colors: {
      primary: {
        default: '#0A2540',
        hover: '#1E4270',
        active: '#061A2E',
      },
      secondary: {
        default: '#6B7280',
        hover: '#4B5563',
        active: '#374151',
      },
      surface: {
        background: '#F9FAFB',
        primary: '#FFFFFF',
        secondary: '#F3F4F6',
      },
      text: {
        primary: '#111827',
        secondary: '#6B7280',
        inverse: '#FFFFFF',
      },
      status: {
        positive: { default: '#10B981', subtle: '#D1FAE5' },
        negative: { default: '#EF4444', subtle: '#FEE2E2' },
        warning: { default: '#F59E0B', subtle: '#FEF3C7' },
        info: { default: '#3B82F6', subtle: '#DBEAFE' },
      },
      overlay: 'rgba(0, 0, 0, 0.6)',
    },

    borders: {
      default: {
        color: '#E5E7EB',
        width: '1px',
        style: 'solid',
      },
      focus: {
        color: '#3B82F6',
        width: '2px',
        style: 'solid',
        offset: '2px', 
      },
      radius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        circle: '50%',
      },
    },


    /**
     * Typography System
     */
    typography: {
      fontFamily: "'Anton', sans-serif",
      sizes: {
        display: { large: '96px', medium: '72px', small: '60px' },
        heading: {
          h1: '48px',
          h2: '40px',
          h3: '36px',
          h4: '30px',
          h5: '24px',
          h6: '20px',
        },
        body: { large: '18px', medium: '16px', default: '16px', small: '14px' },
        caption: { default: '12px', medium: '14px' },
      },
      lineHeight: {
        base: '1.5',
        heading: '1.1',
      },
      fontWeight: {
        regular: '400',
        bold: '400',
      },
      letterSpacing: {
        tight: '-0.025em',
        normal: '0',
        wide: '0.05em',
      },
    },

    /**
     * Spacing & Layout
     */
    spacing: {
      default: '8px',
      small: '4px',
      large: '16px',
      xl: '24px',
      x4: '32px',
    },

    layout: {
      /**
       * Maximum width size for pages
       */
      maxPageWidth: '1440px',

      /**
       * Spacing between columns or elements
       */
      gutter: '24px',
    },

    /**
     * Visual Effects
     */
    effects: {
      shadows: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        small: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xLarge: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        inset: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        raised: '0px 4px 12px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
      opacity: { disabled: '0.5', hover: '0.8', faint: '0.2', semiOpaque: '0.7' },
      gradients: {
        primary: 'linear-gradient(to right, #0A2540, #1E4270)',
        secondary: 'linear-gradient(to bottom, #F3F4F6, #E5E7EB)',
        radial: 'radial-gradient(circle, #0A2540, #061A2E)',
      },
      blur: {
        small: 'blur(4px)',
        medium: 'blur(8px)',
        large: 'blur(16px)',
      },
    },    

    /**
     * Interaction & Motion
     */
    interactions: {
      cursor: { pointer: 'pointer', disabled: 'not-allowed', text: 'text', grab: 'grab', grabbing: 'grabbing' },
      zIndex: { base: '1', modal: '100', tooltip: '200', overlay: '300', sticky: '50' },
      gradients: {
        primary: 'linear-gradient(135deg, #0A2540, #3B82F6)',
        secondary: 'linear-gradient(135deg, #4B5563, #9CA3AF)',
        subtle: 'linear-gradient(to bottom, rgba(249, 250, 251, 0.8), rgba(243, 244, 246, 0.6))',
        codeBlock: 'linear-gradient(to right, rgba(243, 244, 246, 1), rgba(229, 231, 235, 1))',
      },
      transitions: {
        duration: { fast: '0.15s', medium: '0.3s', slow: '0.5s', verySlow: '1s' },
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'ease-out',
          easeIn: 'ease-in',
          spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        },
        property: {
          all: 'all',
          transform: 'transform',
          opacity: 'opacity',
          color: 'color',
          shadow: 'box-shadow',
        },
      },
      hoverEffect: {
        scale: 'scale(1.02)',
        translateY: 'translateY(-2px)',
        shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  };

  return tokens;
}

// create a theme type schema to allow new theme to override
// or implement a different theme variation like dark theme.
// in case tokens are dynamically loaded from a json file, please declare this variable an an interface.
/**
 * Use tokens from this schema as css variables in your components.
 * For example, use `surfaceColor` as css variable `--surface-color`
 */
export type PhilipGizzieThemeSchema = ReturnType<typeof philipGizzieTokens>;