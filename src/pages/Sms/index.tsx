import { useNavigate } from "react-router-dom";
import Button from "../../components/styled/Button";
import {
  Container,
  StandardDiv,
  Title,
  TwoPartsContainer,
} from "../../components/styled/Global";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Input from "../../components/styled/Input";
import { useState } from "react";

const SMS = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | string>("");

  return (
    <TwoPartsContainer>
      <Container>
        <Header />
        <StandardDiv>
          <Title>ტელეფონზე მიღებული კოდი</Title>
          <p>კოდი 555****67-ზე გამოგიგზავნეთ</p>
          <Input
            label=""
            newCode
            value={value}
            onChange={(e) => setValue(e)}
            placeholder="SMS კოდი"
          />
          <Button onClick={() => navigate("/companies")}>გაგრძელება</Button>
        </StandardDiv>
        <Footer active={4} />
      </Container>
      <Sidebar />
    </TwoPartsContainer>
  );
};

export default SMS;
