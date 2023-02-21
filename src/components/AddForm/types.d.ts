import { IRocket } from "@/models/rocket";
import { IUser } from "@/models/response";

export interface IAddFormProps extends React.ComponentPropsWithoutRef<"form"> {
  formData: IRocket;
  setFormData: Dispatch<SetStateAction<IRocket>>;
  additionalClass?: string;
  modalStateSetter: Dispatch<SetStateAction<boolean>>;
  mode?: "add" | "edit";
}
