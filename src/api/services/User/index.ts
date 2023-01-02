import { AxiosResponse } from "axios";
import { IResponse } from "../Common.types";
import { postCall, getCall } from "../../apiCalls";

import endpoints from "./endpoints";

export const USER_URL = endpoints.USER_URL;
export const USERS_URL = endpoints.USERS_URL;

export interface IUser {
  tempClearPass: string;
  firstName: string;
  lastName: string;
  otherName: string;
  phoneNumber: string;
  email: string;
  employeeNumber: string;
  designation: string;
  branchID: string;
  userRoleID: string;
  canApprove: boolean;
  userName: string;
  password: string;
  lastLoginDate: string;
  retrialCount: number;
  isLockedOut: boolean;
  forcePasswordChange: boolean;
  accessLevel: number;
  isActive: boolean;
  id?: string;
  creationDate: string;
  lastModifiedDate: string;
  rowVersion: null;
}

export const getAllUsers = (
  data = { pageSize: 10, pageNumber: 1 },
  params = null,
  headerConfig = null
) =>
getCall(`${USERS_URL}`, data).then(
    (res) => res.data
  );

export const getUsersByFilter = (data, params = null, headerConfig = null) =>
  postCall(`${USERS_URL}`, data, params, headerConfig) as Promise<
    AxiosResponse<IResponse & { users: IUser[] }>
  >;


export const getUserById = (id) =>
  getCall(`${USER_URL}/${id}`, {}).then(
    (res) => res.data
  );
