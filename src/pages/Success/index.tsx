import Button from "../../components/styled/Button";
import {
  Container,
  Flex,
  Small,
  SubTitle,
} from "../../components/styled/Global";
import Check from "../../assets/img/check.svg";
import styled from "styled-components";
import Copy from "../../components/styled/Copy";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SuccessContainer = styled.div`
  text-align: left;

  div:first-child {
    gap: 12px;
    justify-content: left;
    align-items: center;
    margin-bottom: 16px;
  }

  h4 {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin: 0 0 16px 0;
  }

  button {
    margin: 0 0 48px 0;
  }
`;

const Success = () => {
  const [isLegal, setIslegal] = useState(false);
  const [value, setValue] = useState('');
  const [legalValue, setLegalValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URL(window.location.href);
    const isLegalProps = urlParams.searchParams.get("isLegal");
    const valueProp = urlParams.searchParams.get("value");
    setValue(valueProp + '');
    const legalValueProps = urlParams.searchParams.get("legalValue");
    setLegalValue(legalValueProps + '');
    if (isLegalProps) {
      setIslegal(true);
    }
  }, []);

  return (
    <Container>
      <SuccessContainer>
        <Flex>
          <img src={Check} alt="Tegeta Leasing" />
          <SubTitle>თქვენი განცხადება მიღებულია</SubTitle>
        </Flex>
        <Small>
          {isLegal ? "იურიდიული პირის საიდენთიფიკაციო ნომერი" : "პირადი ნომერი"}
        </Small>
        <h4>{value}</h4>

        {isLegal && (
          <>
            <Small>უფლებამოსილი პირის პირადი ნომერი</Small>
            <h4>{legalValue}</h4>
          </>
        )}

        <Button onClick={() => navigate("/")} small light>
          უკან
        </Button>

        <div>
          <Copy />
        </div>
        <p>
          საკრედიტო ისტორიის გადასამოწმებლად საჭიროა 0.01 ლარის ან სხვა
          სიმბოლური თანხის გადარიცხვა მითითებულ ანგარიშის ნომერზე. ლიზინგის
          სისტემა მოახდენს მომხმარებლის მიერ განაცხადში და საგადახდო დავალებაში
          მითითებული პირადი ინფორმაციის შედარებას და მონაცემების თანხვედრის
          შემთხვევაში, ინფორმაცია დასამუშავებლად კრედიტ ინფოში გაიგზავნება.
        </p>
      </SuccessContainer>
    </Container>
  );
};

export default Success;
