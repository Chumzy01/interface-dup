import { ReactNode } from 'react';

export interface IModalDrawer {
  isOpen?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
  onClose?: () => void;
}

export interface IModalDialog {
  isOpen?: boolean;
  children?: ReactNode;
  size?: string;
  showCloseButton?: boolean;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  isCentered?: boolean;
  onClose?: () => void;
  backgroundColor?: string;
  boxShadow?: string;
  overlayBgColor?: string;
  blockScrollOnMount?: boolean;
}
