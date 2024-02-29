import { ChangeEvent } from "react";

export interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  type?: string;
  disabled?: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
