import { utils, writeFile } from "xlsx";

const useExportToExcel = (
  data: Record<string, string>[],
  fileName: string = "sample.xlsx"
) => {
  const handleClick = () => {
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet);
    writeFile(workbook, fileName);
  };

  return {
    handleClick,
  };
};

export default useExportToExcel;
