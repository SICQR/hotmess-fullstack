import { DeepPartial } from '@bitdesign/sparks.sparks-theme';
import { PhilipGizzieThemeSchema } from "./philip-gizzie-tokens.js";

/**
 * override tokens for the dark theme.
 * overrides the default light theme tokens.
 */
export const darkThemeSchema: DeepPartial<PhilipGizzieThemeSchema> = {
  colors: {
    primary: {
      default: '#60A5FA',
      hover: '#93C5FD',
      active: '#3B82F6',
    },
    secondary: {
      default: '#9CA3AF',
      hover: '#D1D5DB',
      active: '#E5E7EB',
    },
    surface: {
      background: '#111827',
      primary: '#1F2937',
      secondary: '#374151',
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#9CA3AF',
      inverse: '#111827',
    },
    status: {
      positive: { default: '#34D399', subtle: '#064E3B' },
      negative: { default: '#F87171', subtle: '#991B1B' },
      warning: { default: '#FBBF24', subtle: '#92400E' },
      info: { default: '#60A5FA', subtle: '#1E40AF' },
    },
    overlay: 'rgba(0, 0, 0, 0.8)',
  },
  borders: {
    default: {
      color: '#374151',
    },
    focus: {
      color: '#60A5FA',
    },
  },
  effects: {
    gradients: {
      primary: 'linear-gradient(to right, #3B82F6, #60A5FA)',
      secondary: 'linear-gradient(to bottom, #1F2937, #374151)',
      radial: 'radial-gradient(circle, #3B82F6, #111827)',
    },
  },
  interactions: {
    gradients: {
      primary: 'linear-gradient(135deg, #3B82F6, #93C5FD)',
      secondary: 'linear-gradient(135deg, #9CA3AF, #E5E7EB)',
      subtle: 'linear-gradient(to bottom, rgba(31, 41, 55, 0.8), rgba(55, 65, 81, 0.6))',
      codeBlock: 'linear-gradient(to right, rgba(31, 41, 55, 1), rgba(55, 65, 81, 1))',
    },
  }
};