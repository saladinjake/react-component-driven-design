import { postCall } from "../apiCalls";
import endpoints from "./User/endpoints";

const USER_URL = endpoints.USER_URL;

export const loginAttempt = (data) => {
  return postCall(`${USER_URL}/non-existing`, data, null, null);
};
