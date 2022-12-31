export interface AuditLogData {
  AuditLogData: {
    USERID: string;
    USERNAME: string;
    APPLICATIONID: string;
    SYSTEMIDENTIFIER: string;
    SYSTEMIPADDRESS: string;
    SYSTEMMACADDRESS: string;
    SYSTEMNAME: string;
    SUBJECTIDENTIFIER: string;
  };
}

export interface CreateUserData extends AuditLogData {
  branchID: string;
  canApprove: boolean;
  designation: string;
  email: string;
  employeeNumber: string;
  firstName: string;
  lastName: string;
  otherName: string;
  phoneNumber: string;
  userName: string;
  userRoleID: string;
  accessLevel: number;
}

export interface UpdateUserData extends AuditLogData {
  branchID: string;
  designation: string;
  email: string;
  isLockedOut: boolean;
  lastName: string;
  otherName: string;
  phoneNumber: string;
  userRoleID: string;
  id: string;
  firstName: string;
  employeeNumber: string;
  accessLevel: number;
  password: string;
  UserName: string;
}

export interface DisableUserData extends AuditLogData {
  isActive: boolean;
  id: string;
}

export interface ResetPasswordData extends AuditLogData {
  userName: string;
}
