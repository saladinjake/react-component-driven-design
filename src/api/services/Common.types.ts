export type IResponse = {
  id?: string;
  isSuccessful: boolean;
  message: string;
  statusCode: string;
  totalRecordInStore?: number;
};
