import {
  FormControlProps,
  FormGroupProps,
  FormLabelProps,
  FormSelectProps,
} from "react-bootstrap";
import { store } from "./context/formContext";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InputType = (inputProps: FormControlProps) => JSX.Element;
export type SelectType = (selectProps: FormSelectProps) => JSX.Element;
export type LabelProps = FormLabelProps & { text: string };

export type LabelType = (
  text: string,
  labelProps?: FormLabelProps
) => JSX.Element;
export type InputGroupType = (
  groupProps: FormGroupProps,
  labelProps: LabelProps,
  inputProps: FormControlProps
) => JSX.Element;
export type SelectGroupType = (
  groupProps: FormGroupProps,
  labelProps: LabelProps,
  selectProps: FormSelectProps
) => JSX.Element;
