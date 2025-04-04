import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className='fixed inset-0 bg-[rgba(0,0,0,0.54)] overflow-y-auto pt-10 z-[9999] max-md:pt-0' onClick={onClose}>
      <div
        className='bg-[#0f1418] max-w-[80vw] mx-auto max-md:max-w-full min-h-full'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose} className='modal_btn rounded absolute top-[10px] right-[10px] z-50'></button>
      </div>
    </div>,
    document.getElementById('global-modal')!
  );
};

export default Modal;
