const trimString = (value: string, maxStringLength: number): string => {
  if (!value) return "";
  return value.length > maxStringLength
    ? `${value.substring(0, maxStringLength)}...`
    : value;
};

export default trimString;
