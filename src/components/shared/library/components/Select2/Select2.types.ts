type IOption = {
  name: string;
  value?: string;
};

export default interface ISelectProps {
  value?: any;
  label?: string;
  error?: any;
  message?: string;
  required?: boolean;
  options: any;
  onChange: (value) => void;
  name?: string;
  disabled?: boolean;
  valueArg?: string;
}
