import model from "utils/hooks/useForm/utilities/model";

const validations = (values: {name:string,password:string}) => {
  const errors = {
    ...model("password")(values.password)("isRequired"),
    ...model("name")(values.name)("isRequired|min:2"),
   
  };

  return errors;
};

export default validations;
