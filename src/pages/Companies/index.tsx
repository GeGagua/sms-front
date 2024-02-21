import { useNavigate } from "react-router-dom";
import Button from "../../components/styled/Button";
import {
  CompaniesContainer,
  Container,
  TwoPartsContainer,
} from "../../components/styled/Global";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import { EndContainerBox } from "../End/styled";
import { useEffect, useState } from "react";
import CompanyLogo from "../../assets/img/company.svg";
import Company, { ICompany } from "../../components/styled/Company";

const Companies = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ICompany[]>([]);

  useEffect(() => {
    const one = {
      number: "ს/ნ: 202177205",
      title: "შპს „თეგეტა მოტორსი“",
      address: "ქ. თბილისი, დავით აღმაშენებლის ხეივანი N129",
      logo: CompanyLogo,
    };
    setData(Array(10).fill(one));
  }, []);

  return (
    <TwoPartsContainer>
      <Container>
        <Header />
        <CompaniesContainer>
          <EndContainerBox>
            {data.map((item, index) => (
              <Company key={index} {...item} />
            ))}
            <div className="shadow"></div>
          </EndContainerBox>
          <Button onClick={() => navigate("/endstep1")}>გაგრძელება</Button>
        </CompaniesContainer>
        <Footer active={5} />
      </Container>
      <Sidebar />
    </TwoPartsContainer>
  );
};

export default Companies;
