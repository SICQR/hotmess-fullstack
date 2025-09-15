import type { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './flex.module.scss';

/**
 * Props for the Flex component.
 * Extends standard HTML div attributes and includes various flexbox CSS properties.
 */
export type FlexProps = {
  /**
   * The content to be rendered inside the flex container.
   */
  children?: ReactNode;

  /**
   * Additional class names to apply to the flex container.
   */
  className?: string;

  /**
   * Inline styles to apply to the flex container. These will be merged with the props-based styles.
   */
  style?: CSSProperties;

  /**
   * Sets the display behavior of the container.
   * 'flex' for a block-level flex container, 'inline-flex' for an inline-level one.
   * @default 'flex'
   */
  display?: 'flex' | 'inline-flex';

  /**
   * Defines the direction of the main axis, determining how flex items are placed in the flex container.
   */
  flexDirection?: CSSProperties['flexDirection'];

  /**
   * Aligns flex items along the main axis of the current line of the flex container.
   */
  justifyContent?: CSSProperties['justifyContent'];

  /**
   * Defines the default behavior for how flex items are laid out along the cross axis on the current line.
   */
  alignItems?: CSSProperties['alignItems'];

  /**
   * Controls whether flex items are forced onto one line or can wrap onto multiple lines.
   */
  flexWrap?: CSSProperties['flexWrap'];

  /**
   * Defines the gap between flex items. It can be a single value for both row and column gap, or two values for row and column gap respectively.
   */
  gap?: CSSProperties['gap'];

  /**
   * A shorthand property for `flex-grow`, `flex-shrink`, and `flex-basis`.
   */
  flex?: CSSProperties['flex'];

  /**
   * Defines the ability for a flex item to grow if necessary, specifying the proportion of available space it should take.
   */
  flexGrow?: CSSProperties['flexGrow'];

  /**
   * Defines the ability for a flex item to shrink if necessary.
   */
  flexShrink?: CSSProperties['flexShrink'];

  /**
   * Defines the default size of an element before the remaining space is distributed.
   */
  flexBasis?: CSSProperties['flexBasis'];

  /**
   * Allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.
   */
  alignSelf?: CSSProperties['alignSelf'];

  /**
   * Sets the order of a flex item relative to the rest of the flex items inside the same container.
   */
  order?: CSSProperties['order'];
} & HTMLAttributes<HTMLDivElement>;

/**
 * A flexible layout component based on CSS Flexbox.
 * It provides a powerful and convenient way to arrange, align, and distribute space among items in a container.
 */
export function Flex({
  children,
  className,
  style,
  display = 'flex',
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  order,
  ...rest
}: FlexProps) {
  const componentStyle: CSSProperties = {
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    alignSelf,
    order,
    ...style,
  };

  // Clean up the style object by removing any undefined properties.
  // This avoids adding empty rules to the element's inline styles.
  Object.keys(componentStyle).forEach((key) => {
    const styleKey = key as keyof CSSProperties;
    if (componentStyle[styleKey] === undefined) {
      delete componentStyle[styleKey];
    }
  });

  return (
    <div
      {...rest}
      style={componentStyle}
      className={classNames(
        {
          [styles.flex]: display === 'flex',
          [styles.inlineFlex]: display === 'inline-flex',
        },
        className
      )}
    >
      {children}
    </div>
  );
}