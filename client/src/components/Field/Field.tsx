import { useState } from "react";
import { useStore, useUpdateStore } from "../../context/formContext";
import { useFunction } from "../../hooks/useFunction";
import Form from "react-bootstrap/Form";
import { InputGroupType, InputType, LabelType } from "../../types";

type Props = {
  name: string;
  value?: string;
  type?: string;
  rules?: string[];
  range?: number[];
  elementName: string;
  renderInput: InputType;
  renderLabel: LabelType;
  renderGroup: InputGroupType;
};

export const Field = ({
  name,
  value,
  type,
  rules,
  range,
  elementName,
  renderInput = Input,
  renderLabel = Label,
  renderGroup = Group,
  ...props
}: Props) => {
  const validator = useFunction(rules);
  const store = useStore();
  const [error, set] = useState("");
  const updateStore = useUpdateStore();
  const _elementName = `${elementName}-${store.currentForm}`;

  const handleBlur = (e: any) => {
    set("");
    if (validator) {
      const errorMessage = validator(e.target.value);
      if (errorMessage) {
        set(errorMessage);
        return updateStore("", _elementName);
      }
    }
    updateStore(e.target.value, _elementName);
  };

  const handleOnChange = (e: any) => {
    if (range instanceof Array && range.length > 0) {
      if (range[0] != null && range[0] > parseInt(e.target.value)) return;
      if (range[1] != null && range[1] < parseInt(e.target.value)) return;
    }
    updateStore(e.target.value, _elementName);
  };

  return renderGroup(
    { controlId: _elementName, ...props },
    { text: name },
    {
      // @ts-ignore
      value: store[_elementName],
      onChange: handleOnChange,
      onBlur: handleBlur,
      type,
    }
  );
};

const Input: InputType = (inputProps) => <Form.Control {...inputProps} />;

export const Label: LabelType = (text, labelProps) => (
  <Form.Label {...labelProps}>{text}</Form.Label>
);

const Group: InputGroupType = (groupProps, labelProps, inputProps) => (
  <Form.Group {...groupProps}>
    {Label(labelProps.text, labelProps)}
    {Input(inputProps)}
  </Form.Group>
);
