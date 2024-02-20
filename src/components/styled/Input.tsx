import { FC } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    color: #172b4d;
  }

  input {
    width: 100%;
    font-size: 16px;
    max-width: 378px;
    border-radius: 8px;
    border: 1px solid rgba(9, 30, 66, 0.14);
    background: #fff;
    height: 54px;
    color: #44546F;
    padding: 0 12px;
  }

  ::placeholder {
    color: #44546F;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: #44546F;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* For Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: 992px) {
    input {
      max-width: 80vw;
    }
  }
`;

interface IProps {
  label: string;
  placeholder: string;
  value: string | number;
  onChange: (val: string | number) => void;
}

const Input: FC<IProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type="number"
      />
    </InputContainer>
  );
};

export default Input;
