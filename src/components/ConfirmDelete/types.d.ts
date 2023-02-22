export interface IConfirmDeleteProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  submitFunction: () => void;
  title: string;
}
