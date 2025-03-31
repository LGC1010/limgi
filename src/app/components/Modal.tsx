import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className='fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.54)] z-10'>
      <div className='bg-[#0f1418] relative flex items-center justify-center w-[100%] h-[100%]'>
        {children}
        <button onClick={onClose} className='modal_btn rounded absolute top-[10px] right-[10px] z-50'></button>
      </div>
    </div>,
    document.getElementById('global-modal')!
  );
};

export default Modal;
