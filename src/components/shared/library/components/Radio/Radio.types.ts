export interface RadioProps {
  disabled?: boolean;
  radioButtonColor?: string;
  label?: string;
  value?: string;
  name?: string;
  labelFontSize?: string;
  checked?: boolean;
  onChange?: (eventObject: React.ChangeEvent<HTMLInputElement>) => void;
}
