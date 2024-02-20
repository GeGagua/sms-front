import { useNavigate } from "react-router-dom";
import Button from "../../components/styled/Button";
import { Container, Flex, Title } from "../../components/styled/Global";

const Status = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Title>აირჩიე სტატუსი</Title>
      <Flex className="mobile">
        <Button onClick={() => navigate('/rules')} style={{ padding: '24px 38px' }}>ფიზიკური პირი</Button>
        <Button onClick={() => navigate('/rules?isLegal=1')} style={{ padding: '24px 27px' }}>იურიდიული პირი</Button>
      </Flex>
    </Container>
  );
};

export default Status;
