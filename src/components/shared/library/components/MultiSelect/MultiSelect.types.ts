interface IOption {
  name: string;
  id?: string;
}

export default interface MultiSelectProps {
  value?: IOption[] | any[];
  label?: string;
  error?: any;
  message?: string;
  required?: boolean;
  options: IOption[];
  onChange: (value) => void;
  name?: string;
  disabled?: boolean;
  valueArg?: string;
}
