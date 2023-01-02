import model from "utils/hooks/useForm/utilities/model";
import { IUser } from "api/services/User";

const validations = (values: IUser) => {
  const errors = {
    ...model("email")(values.email)("isRequired"),
    ...model("name")(values.firstName)("isRequired|min:2"),
    ...model("phone")(values.phoneNumber)("isRequired|min:2"),
  };

  return errors;
};

export default validations;
