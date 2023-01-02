import { useReducer, createContext, useContext, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import jwt_decode from "jwt-decode";
import * as authService from "api/services/Auth";
import { postRequest } from "api/apiCalls";

import {
  finishAuth,
  deleteToken,
  isSessionExpired,
  getToken,
  getUserData,
  getUserProfile,
} from "../utils/tokenConfig";

const initialState = {
  user: null,
  isAuth: getToken() ? true : false,
  isLoading: false,
  userProfile: null,
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null,
};

const AuthContext = createContext({
  user: null,
  isAuth: getToken() ? true : false,
  isLoading: false,
  userProfile: null,
  login: (response) => {},
  logout: () => {},
  loadAuthUser: () => {},
  modules: [],
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.user,
        isAuth: true,
        isLoading: false,
        userProfile: action.userProfile,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
        userProfile: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const [internalsState, setState] = useState(initialState);
  console.log(initialState);

  async function loadAuthUser() {
    try {
      if (!isSessionExpired()) {
        let token = getToken();
        let user = getUserData();
        let userProfile = getUserProfile();
        if (token && user) {
          dispatch({
            type: "LOGIN",
            user,
            userProfile,
          });
        } else {
          logout();
        }
      } else {
        logout();
      }
    } catch (error) {
      logout();
    }
  }

  interface IDecoded {
    email: string;
    family_name: string;
    given_name: string;
    name: string;
    picture: string;
    exp: string;
    designation?: string;
    employeeNumber?: string;
    firstName?: string;
    lastName?: string;
    userRoleID?: string;
    id?: string;
    userName?: string;
    password?: string;
    isSuccessful?: boolean;
  }

  const login = async (payload) => {
    console.log(payload);

    //fake solid login
    const apiResponseData = {
      credentials: "juwavictor",
      data: {
        email: "juwavictor@gmail.com",
        family_name: "victor",
        given_name: "victor",
        name: "victor",
        picture: "victor",
        exp: "",
        designation: "",
        employeeNumber: "1234",
        firstName: "victor",
        lastName: "victor",
        userRoleID: "Admin",
        id: "1",
        userName: "saladin",
        password: "saladin",
        isSuccessful: true,
      },
    };
    const decoded: IDecoded =  apiResponseData?.data;  //jwt_decode(apiResponseData.credentials);
    dispatch({ type: "LOGIN_START" });

    const userToken = apiResponseData.credentials;
    const userProfile = {
      email: decoded.email,
      family_name: decoded.family_name,
      given_name: decoded.given_name,
      name: decoded.name,
      picture: decoded.picture,
    };
    const tokenExpiry = decoded.exp;
    const fpPromise = await FingerprintJS.load();
    const fpPromiseGetResult = await fpPromise.get();
    const visitorId = fpPromiseGetResult.visitorId;

    const data = {
      userToken,
      auditLogData: {
        SYSTEMIDENTIFIER: "",
        SYSTEMIPADDRESS: "",
        SYSTEMMACADDRESS: visitorId,
        SYSTEMNAME: "",
        SUBJECTIDENTIFIER: "",
      },
    };

    try {
      const {
        email,
        designation,
        employeeNumber,
        firstName,
        lastName,
        userRoleID,
        id,
        userName,
        password,
      } = apiResponseData.data;

      let userRoleFunction = null;

      const user = {
        email,
        designation,
        employeeNumber,
        firstName,
        lastName,
        userRoleID,
        userRoleFunction,
        id,
        userName,
        password,
      };

      const ApiResponseStatus = apiResponseData.data.isSuccessful;

      if (ApiResponseStatus && payload?.password=="saladin") {
        //finishAuth(userToken, user, visitorId, tokenExpiry, userProfile);
        dispatch({
          type: "LOGIN",
          user,
          userProfile,
        });
      } else {
        logout();
      }
    } catch (error) {
      dispatch({ type: "LOGOUT" });
      alert("Login Failed, Pls try again");
    }
  };

  function logout() {
    deleteToken();
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        logout,
        isAuth: state.isAuth,
        isLoading: state.isLoading,
        loadAuthUser,
        userProfile: state.userProfile,
      }}
      {...props}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
