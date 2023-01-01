import { useState, useEffect, useRef } from "react";


import { useParams, useNavigate } from "react-router-dom";


import ArrowSets from "components/shared/BackButton/ArrowSets";
import Indicator from "components/shared/Indicator";
import { isValidV4UUID, reGroup } from "utils";

import { Success, Error } from "components/shared/Modal";
import useSendToAPI from "utils/hooks/useSendToApi";
import { useQuery } from "@tanstack/react-query";
import useForm, { hasError } from "utils/hooks/useForm";

const InformationTip = ({status, message,ref}) => (
<div className="centered box" ref={ref}>
  <h6 className="statusInfo">{status}</h6>
  <p className="messageInfo"> {message}</p>
</div>
)

function Home() {
  const navigate = useNavigate();


  const defaultErrorTitle = "Sample text creation failed";
  const defaultErrorMessage =
    "Sample text failed due to invalid inputs or your internet connection may be unstable.";
  const defaultSuccessTitle = "Sample text created";
  const defaultSuccessMessage =
    "You have successfully created an Sample text.";
  const { id, type } = useParams();
  const [editable, setEditable] = useState(false);
  const [headerLinks, setHeaderLinks] = useState([]);
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorTitle, setErrorTitle] = useState(defaultErrorTitle);
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);
  const [successTitle, setSuccessTitle] = useState(defaultSuccessTitle);
  const [successMessage, setSuccessMessage] = useState(defaultSuccessMessage);

  const [initialValues, setInitialValues] = useState({
    name: "",

  });

  const fakeApi =() =>{}



 




  return (
    <></>
  );
}

export default Home;
