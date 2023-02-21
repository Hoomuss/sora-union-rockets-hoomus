import { IRocket } from "@/models/rocket";
import { IUser } from "@/models/response";

export interface IAddFormProps {
  formData: IRocket;
  setFormData: Dispatch<SetStateAction<IRocket>>;
  additionalClass?: string;
  modalStateSetter: Dispatch<SetStateAction<boolean>>;
}
