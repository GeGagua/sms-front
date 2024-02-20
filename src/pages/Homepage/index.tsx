import { useNavigate } from "react-router-dom"
import Button from "../../components/styled/Button"
import { Container, Title } from "../../components/styled/Global"

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>ჩვენ გთავაზობთ საუკეთესო პირობებს</Title>
            <p>არ გადადო, მიიღე დაფინანსება რამდენიმე საათში</p>
            <Button onClick={() => navigate('status')}>დაწყება</Button>
        </Container>
    )
}

export default Homepage