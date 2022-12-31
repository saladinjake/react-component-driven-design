import { getUserData, getEncryptedUserIdentity } from "utils/tokenConfig";

const encryptedUserIdentity = getEncryptedUserIdentity();

export interface IAuditLogData {
  APPLICATIONID?: string;
  SUBJECTIDENTIFIER?: string;
  SYSTEMIDENTIFIER?: string;
  SYSTEMIPADDRESS?: string;
  SYSTEMMACADDRESS: string;
  SYSTEMNAME?: string;
  USERID: string;
  USERNAME: string;
}

export const AuditLogData: IAuditLogData = {
  APPLICATIONID: "2d50c5d6-76e3-49b7-9047-121956726c18",
  SUBJECTIDENTIFIER: "",
  SYSTEMIDENTIFIER: "",
  SYSTEMIPADDRESS: "",
  SYSTEMMACADDRESS: encryptedUserIdentity,
  SYSTEMNAME: "",
  USERID: getUserData().id,
  USERNAME: getUserData().userName,
};
