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
    color: #172B4D;
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
    color: #44546F;
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
        <input type="checkbox" />
      </div>
    </CompanyContainer>
  );
};

export default Company;
