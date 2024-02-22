import styled from "styled-components";
import Header from "../../components/layout/Header";
import { Center, Title } from "../../components/styled/Global";

const SuccessContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
  text-align: center;
`;

const Success = () => {
  return (
    <Center>
      <Header />
      <SuccessContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="148"
          height="148"
          viewBox="0 0 148 148"
          fill="none"
        >
          <path
            d="M74 13.875C62.1084 13.875 50.4839 17.4013 40.5964 24.0079C30.7089 30.6145 23.0025 40.0047 18.4518 50.9912C13.9011 61.9776 12.7104 74.0667 15.0303 85.7298C17.3502 97.3929 23.0766 108.106 31.4852 116.515C39.8939 124.923 50.6071 130.65 62.2702 132.97C73.9333 135.29 86.0225 134.099 97.0089 129.548C107.995 124.998 117.386 117.291 123.992 107.404C130.599 97.5162 134.125 85.8916 134.125 74C134.108 58.059 127.768 42.7758 116.496 31.5038C105.224 20.2318 89.941 13.8918 74 13.875ZM100.397 63.3972L68.0222 95.7722C67.5927 96.2022 67.0826 96.5433 66.5211 96.7761C65.9597 97.0088 65.3578 97.1286 64.75 97.1286C64.1422 97.1286 63.5404 97.0088 62.9789 96.7761C62.4175 96.5433 61.9074 96.2022 61.4778 95.7722L47.6028 81.8972C46.735 81.0294 46.2475 79.8523 46.2475 78.625C46.2475 77.3977 46.735 76.2206 47.6028 75.3528C48.4707 74.485 49.6477 73.9974 50.875 73.9974C52.1023 73.9974 53.2794 74.485 54.1472 75.3528L64.75 85.9614L93.8528 56.8528C94.2825 56.4231 94.7927 56.0822 95.3541 55.8497C95.9156 55.6171 96.5173 55.4974 97.125 55.4974C97.7327 55.4974 98.3345 55.6171 98.8959 55.8497C99.4574 56.0822 99.9675 56.4231 100.397 56.8528C100.827 57.2825 101.168 57.7927 101.4 58.3541C101.633 58.9155 101.753 59.5173 101.753 60.125C101.753 60.7327 101.633 61.3345 101.4 61.8959C101.168 62.4573 100.827 62.9675 100.397 63.3972Z"
            fill="#6A9A23"
          />
        </svg>
        <Title>თქვენ წარმატებით გაიარეთ</Title>
        <p>
          გაცნობებთ, რომ თანხმობის შემთხვევაში თქვენი მონაცემები დამუშავდება
          პირდაპირი
        </p>
      </SuccessContainer>
    </Center>
  );
};

export default Success;
