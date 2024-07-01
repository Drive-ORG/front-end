import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface NavbarItemProps {
  /**
   * Title of the item
   */
  title: string;
  /**
   * The link which is navigated to on click.
   */
  link: string;
  /**
   * The icon which is used before text.
   */
  children?: ReactNode;
  /**
   * Should open the link in parent, self, top or new tab?
   */
  target?: HTMLAttributeAnchorTarget;
}
