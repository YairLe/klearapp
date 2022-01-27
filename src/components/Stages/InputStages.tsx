import React from "react";

interface IProps {
  inputProp?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  inputInValid?: boolean;
  inputInValidText?: string;
}

const InputStages: React.FC<IProps> = (props: IProps) => {
  const { inputProp, inputInValid, inputInValidText } = props;
  return (
    <React.Fragment>
      <input
        placeholder={inputInValid ? inputInValidText : ""}
        {...inputProp}
      />
    </React.Fragment>
  );
};

export default InputStages;
