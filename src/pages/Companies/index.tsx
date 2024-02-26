import { useNavigate } from "react-router-dom";
import Button from "../../components/styled/Button";
import {
  CompaniesContainer,
  Container,
  Title,
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

import Toyota from "../../assets/img/toyota.svg";
import Avtogallery from "../../assets/img/avtogallery.svg";
import Approved from "../../assets/img/approved.svg";
import avtomotivi from "../../assets/img/avtomotivi.svg";
import sairme from "../../assets/img/sairme.svg";
import Rent from "../../assets/img/eurocars.svg";

const Companies = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ICompany[]>([]);
  const [companiesId, setCompaniesIds] = useState<string[]>([]);

  const setIcon = (name: string) => {
    if (name.includes("საირმე")) {
      return sairme;
    }
    if (name.includes("ეფრუვდ")) {
      return Approved;
    }
    if (name.includes("ავტომოტივი")) {
      return avtomotivi;
    }
    if (name.includes("გალერი")) {
      return Avtogallery;
    }
    if (name.includes("რენთი")) {
      return Rent;
    }

    if (name.includes("თი-ბი-ეი") || name.includes("ტოიოტა")) {
      return Toyota;
    }
    return CompanyLogo;
  };

  useEffect(() => {
    axios.get(`${BackUrl}/companies`).then((res) => {
      const data = res?.data?.data.map((item: any) => {
        item.title = item.name;
        item.id = item.companyId;
        item.number = "ს/ნ: " + item.companyId;
        item.logo = setIcon(item.name);
        return item;
      });

      const ids = res?.data?.data.map((item: { companyId: any }) => {
        return item.companyId;
      });

      setCompaniesIds(ids);
      setData(data);
    });
  }, []);

  const updateCompanies = (id: string) => {
    let copyIds = companiesId;
    console.log(id);
    if (companiesId.includes(id)) {
      copyIds = copyIds.filter((cid) => cid !== id);
    } else {
      copyIds.push(id);
    }
    setCompaniesIds(copyIds);
  };

  const save = () => {
    localStorage.setItem("sms-companies", JSON.stringify(companiesId));
    navigate("/endstep1");
  };

  useEffect(() => {
    const smsVerify = localStorage.getItem('sms-id')
    if (!smsVerify) {
      navigate("/sms");
    }
  }, [navigate])

  return (
    <TwoPartsContainer>
      <Container>
        <Header />
        <CompaniesContainer>
          <Title>
            აირჩიეთ კომპანიები საიდანაც თანახმა ხართ მიიღოთ SMS შეტყობინებები
          </Title>
          <p>ნებაყოფლობით შესავსები ველი.</p>
          <EndContainerBox>
            {data.map((item, index) => (
              <Company
                key={index}
                {...item}
                onUpdate={(id) => updateCompanies(id)}
              />
            ))}
            <div className="shadow"></div>
          </EndContainerBox>
          <Button onClick={() => save()}>გაგრძელება</Button>
        </CompaniesContainer>
        <Footer active={5} />
      </Container>
      <Sidebar isCompany />
    </TwoPartsContainer>
  );
};

export default Companies;
