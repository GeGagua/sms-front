import { FC } from "react";
import styled from "styled-components";

const CompanyContainer = styled.div`
  display: flex;
  padding: 8px 16px 4px 8px;
  align-items: center;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid rgba(9, 30, 66, 0.14);
  margin-bottom: 16px;
  text-align: left;

  h2 {
    color: #172b4d;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin: 4px 0;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #44546f;
    line-height: 22px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .checkbox {
    margin-left: auto;
  }

  /* Hide the default checkbox */
  .custom-checkbox input {
    display: none;
  }

  /* Create a custom checkbox */
  .custom-checkbox .checkmark {
    position: relative;
    height: 24px;
    width: 24px;
    background-color: #ff9602;
    display: inline-block;
    border-radius: 4px; /* Optional: for rounded corners */
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .custom-checkbox .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .custom-checkbox input:checked + .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .custom-checkbox .checkmark:after {
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export interface ICompany {
  number: string;
  title: string;
  address: string;
  logo: string;
}

const Company: FC<ICompany> = ({ number, title, address, logo }) => {
  return (
    <CompanyContainer>
      <div>
        <img src={logo} alt={title} />
      </div>
      <div>
        <p>{number}</p>
        <h2>{title}</h2>
        <p>{address}</p>
      </div>
      <div className="checkbox">
        <label className="custom-checkbox">
          <input checked type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </CompanyContainer>
  );
};

export default Company;
