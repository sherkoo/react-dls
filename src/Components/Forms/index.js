import React from "react";
import {
  FormTextLabelStyle,
  FormTextStyle,
  FormTextInput,
} from "./forms.style";

/**
 *
 * @param {props.type}
 * @returns text, password, email
 */

function FormTextLabel(props) {
  return <FormTextLabelStyle htmlFor="">{props.label}</FormTextLabelStyle>;
}

function FormText(props) {
  return (
    <FormTextStyle>
      <FormTextLabel label="Form Label" />
      <FormTextInput width={props.full} type={props.type} />
    </FormTextStyle>
  );
}

export { FormText };
