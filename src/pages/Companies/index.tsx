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
import axios from "axios";
import { BackUrl } from "../../const";

const Companies = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ICompany[]>([]);
  const [companiesId, setCompaniesIds] = useState<string[]>([])

  useEffect(() => {
    axios.get(`${BackUrl}/companies`).then((res) => {
      const data = res?.data?.data.map((item: any) => {
        item.title = item.name;
        item.id = item.companyId;
        item.number = "ს/ნ: " + item.companyId;
        item.logo = CompanyLogo;
        return item;
      })

      const ids = res?.data?.data.map((item: { companyId: any; }) => {
        return item.companyId;
      })

      setCompaniesIds(ids)
      setData(data)
    })
  }, []);

  const updateCompanies = (id: string) => {
    let copyIds = companiesId;
    console.log(id)
    if (companiesId.includes(id)) {
      copyIds = copyIds.filter(cid => cid !== id)
    } else {
      copyIds.push(id)
    }
    setCompaniesIds(copyIds)
  }

  const save = () => {
    localStorage.setItem("sms-companies", JSON.stringify(companiesId));
    navigate("/endstep1")
  }

  return (
    <TwoPartsContainer>
      <Container>
        <Header />
        <CompaniesContainer>
          <EndContainerBox>
            {data.map((item, index) => (
              <Company key={index} {...item} onUpdate={(id) => updateCompanies(id)}  />
            ))}
            <div className="shadow"></div>
          </EndContainerBox>
          <Button onClick={() => save()}>გაგრძელება</Button>
        </CompaniesContainer>
        <Footer active={5} />
      </Container>
      <Sidebar />
    </TwoPartsContainer>
  );
};

export default Companies;
