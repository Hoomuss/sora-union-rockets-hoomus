import { IRocket } from "@/models/rocket";

export interface IRocketProps {
  rocket: IRocket;
  editRocket: (formData: IRocket) => void;
}
