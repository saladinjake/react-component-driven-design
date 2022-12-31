import { SyntheticEvent } from "react";

export interface TextareaProps {
  value?: string;
  onChange?: (e: string) => void;
  onChangePure?: (e: SyntheticEvent) => void;
  label?: string;
  width?: string;
  placeholder?: string;
  resize?: "horizontal" | "vertical" | "none" | "both";
  required?: boolean;
  disabled?: boolean;
  cols?: number;
  rows?: number;
  error?: boolean;
  message?: string;
  name?: string;
}
