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

const Email = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | string>("");

  const validate = () => {
    localStorage.setItem('sms-email', `${value}`)
    navigate("/sms");
  };

  return (
    <TwoPartsContainer>
      <Container>
        <Header />
        <StandardDiv>
          <Title>შეიყვანეთ ელ. ფოსტა</Title>
          <p>გაიგეთ ბოლო სიახლეები პირველმა (არარის აუცილებელი)</p>
          <Input
            label=""
            value={value}
            onChange={(e) => setValue(e)}
            placeholder="ელ. ფოსტის მისამართი"
          />
          <Button onClick={() => validate()}>დაწყება</Button>
        </StandardDiv>
        <Footer active={3} />
      </Container>
      <Sidebar />
    </TwoPartsContainer>
  );
};

export default Email;
