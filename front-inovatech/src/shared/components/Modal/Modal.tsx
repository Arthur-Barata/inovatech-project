import { ModalContent, ModalStyle } from './styles';

function Modal(props: any) {
  return (
    <ModalStyle onClick={() => (props.onClose ? props.onClose() : '')}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        {props.children}
      </ModalContent>
    </ModalStyle>
  );
}

export default Modal;
