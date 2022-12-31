import { useReducer, createContext, useContext } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import jwt_decode from "jwt-decode";
import * as authService from "api/services/Auth";
import { getUserRoleFunctionWithId } from "api/services/UserRoleFunction";
import {
  finishAuth,
  deleteToken,
  isSessionExpired,
  getToken,
  getUserData,
  getGoogleProfile,
} from "../utils/tokenConfig";

const initialState = {
  user: null,
  isAuth: getToken() ? true : false,
  isLoading: false,
  googleProfile: null,
};

const AuthContext = createContext({
  user: null,
  isAuth: getToken() ? true : false,
  isLoading: false,
  googleProfile: null,
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
        googleProfile: action.googleProfile,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
        googleProfile: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  async function loadAuthUser() {
    try {
      if (!isSessionExpired()) {
        let token = getToken();
        let user = getUserData();
        let googleProfile = getGoogleProfile();
        if (token && user) {
          dispatch({
            type: "LOGIN",
            user,
            googleProfile,
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

  const login = async (googleResponse) => {
    const decoded: any = jwt_decode(googleResponse.credential);
    dispatch({ type: "LOGIN_START" });

    const googleToken = googleResponse.credential;
    const googleProfile = {
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
      googleToken,
      auditLogData: {
        SYSTEMIDENTIFIER: "",
        SYSTEMIPADDRESS: "",
        SYSTEMMACADDRESS: visitorId,
        SYSTEMNAME: "",
        SUBJECTIDENTIFIER: "",
      },
    };

    try {
      const kudaApiResponse = await authService.loginWithGoogle(data);
      if (!kudaApiResponse.data.isSuccessful) {
        throw new Error(kudaApiResponse.data.message);
      }

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
      } = kudaApiResponse.data.user;

      const kudaApiUserRoleFunctionResponse = await getUserRoleFunctionWithId(
        userRoleID
      );

      let userRoleFunction = null;

      if (kudaApiUserRoleFunctionResponse.data.isSuccessful) {
        userRoleFunction =
          kudaApiUserRoleFunctionResponse.data.userRoleFunctions;
      } else {
        throw new Error("Get function unsuccessful");
      }

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

      const kudaApiResponseStatus = kudaApiResponse.data.isSuccessful;

      if (kudaApiResponseStatus) {
        finishAuth(googleToken, user, visitorId, tokenExpiry, googleProfile);
        dispatch({
          type: "LOGIN",
          user,
          googleProfile,
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
        googleProfile: state.googleProfile,
      }}
      {...props}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
