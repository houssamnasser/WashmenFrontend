import * as Yup from "yup";

export const rangeFormSchema = Yup.object().shape({
  range: Yup.number()
    .min(1, "Range must be greater than or equal to 1 Km")
    .label("Lattitude")
    .required("Range Is Required")
    .typeError("Please enter a valid number"),
});
