import { LoginWrapper, Title } from "./Login.styles";
import { Svg } from "assets/svg";
import Loader from "components/shared/Loader";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, GridItem, Heading, Flex } from "components/shared/library";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "context/AuthContext";


import { Input, Button } from "components/shared/library";
import validations from "./LoginTraditional/utilities/validations";
import useForm, { hasError } from "utils/hooks/useForm";
import useSendToAPI from "utils/hooks/useSendToApi";
import queryKeys from "./LoginTraditional/utilities/queryKeys";

function Login() {
  const authContext = useContext(AuthContext);
  const isLoading = authContext.isLoading;
  const isAuth = authContext.isAuth;

  const defaultErrorTitle = "Region creation failed";
  const defaultErrorMessage =
    "Branch creation failed due to invalid inputs or your internet connection may be unstable.";
  const defaultSuccessTitle = "Branch created";
  const defaultSuccessMessage =
    "You have successfully created a new branch on Nerve.";
  const { id } = useParams();
  const [editable, setEditable] = useState(false);
  const [headerLinks, setHeaderLinks] = useState([]);
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorTitle, setErrorTitle] = useState(defaultErrorTitle);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);
  const [successTitle, setSuccessTitle] = useState(defaultSuccessTitle);
  const [successMessage, setSuccessMessage] = useState(defaultSuccessMessage);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const { user } = useContext(AuthContext);

  const [initialValues, setInitialValues] = useState({
    name: "",
    password: "",
  });

  const { values, handleChange, handleSubmit, invalid, errors, touched } =
    useForm({
      initialValues,
      validations,
      onSubmit() {
        setShowInformationModal(true);
      },
    });

  const loginUser = () => {};

  const onCreateSuccess = (data) => {
    setShowInformationModal(false);
    setSuccessMessage(data.message);
    setShowSuccessModal(true);
  };

  const onCreateError = (error) => {
    setErrorMessage(error.message);
    setShowInformationModal(false);
    setShowErrorModal(true);
  };

  const { mutate: handleCreate, isLoading: isCreating } = useSendToAPI(
    loginUser,
    onCreateSuccess,
    onCreateError
  );

  const onUpdateSuccess = (data) => {
    setShowInformationModal(false);
    setSuccessTitle("Login Successful");
    setSuccessMessage(data.message);
    setShowSuccessModal(true);
  };

  const onUpdateError = (error) => {
    setErrorTitle("Login failed");
    setErrorMessage(error.message);
    setShowInformationModal(false);
    setShowErrorModal(true);
  };

  const handleSendToApi = () => {
    const payload = {
      ...values,
      isActive: values.isActive.toString() === "true",
    };

    if (id === "create") {
      return handleCreate({
        ...payload,
      });
    }
  };

  let navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate("/dashboard");
  }, [isAuth]);

  return (
    <Box border="none " height="100vh">
      <Flex justifyContent="center" pt="10">
        Sample UI
      </Flex>

      <Flex
        style={{ top: "10vmin" }}
        position="relative"
        justifyContent="between"
        alignItems="center"
        border="none"
      >
        <LoginWrapper>
          <Title>Welcome !</Title>
          <p style={{ color: "#545F7D" }}>Enter details to login</p>  

          <Input
            required
            width="100%"
            label="User Name"
            isLoading={false}
            name="name"
            value={values.name}
            onChangePure={handleChange}
            error={hasError("name", touched, errors)}
            message={hasError("name", touched, errors)}
            placeholder="Enter User Name"
          />

          <Input
            required
            width="100%"
            label="password"
            isLoading={false}
            type="password"
            name="password"
            value={values.password}
            onChangePure={handleChange}
            error={hasError("password", touched, errors)}
            message={hasError("password", touched, errors)}
            placeholder="Enter Password"
          />

<p style={{ color: "#39CDCC" }}>Forgot Password?</p>
          <Box ml="5">
            <Button
              width="100%"
              type="submit"
              disabled={invalid}
              onClick={() => navigate("/dashboard")}
            >
              {"Login"}
            </Button>
          </Box>

          <Flex justifyContent="center">
            {isLoading && (
              <Flex alignItems="center">
                <Loader variant={"purple"} />
              </Flex>
            )}
          </Flex>
        </LoginWrapper>
      </Flex>
    </Box>
  );
}

export default Login;
