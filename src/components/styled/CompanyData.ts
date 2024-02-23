import styled from "styled-components";

import Bomag from "../../assets/img/Bomag.svg";
import FAYAT_Group from "../../assets/img/FAYAT Group.svg";
import Fendt from "../../assets/img/Fendt.svg";
import Goldoni from "../../assets/img/Goldoni.svg";
import Hell from "../../assets/img/Hell.svg";
import HINO from "../../assets/img/HINO.svg";
import JCB from "../../assets/img/JCB.svg";
import Komatsu from "../../assets/img/Komatsu.svg";
import Liebherr from "../../assets/img/Liebherr.svg";
import man from "../../assets/img/man.svg";
import MAN from "../../assets/img/man.svg";
import Marini from "../../assets/img/Marini.svg";
import Mazda from "../../assets/img/Mazda.svg";
import Mitsubishi_Fuso from "../../assets/img/Mitsubishi Fuso.svg";
import Porsche from "../../assets/img/Porsche.svg";
import Renault_Trucks from "../../assets/img/Renault Trucks.svg";
import TCE from "../../assets/img/TCE.svg";
import TCV from "../../assets/img/TCV.svg";
import Tegeta_Truck_Bus from "../../assets/img/Tegeta Truck&Bus.svg";
import Tegeta from "../../assets/img/Tegeta.svg";
import Temsa from "../../assets/img/Temsa.svg";
import TTB from "../../assets/img/TTB.svg";
import Valtra from "../../assets/img/Valtra.svg";
import XCMG from "../../assets/img/XCMG.svg";
import Zetor from "../../assets/img/Zetor.svg";

export const icons = {
  Bomag,
  FAYAT_Group,
  Fendt,
  Goldoni,
  Hell,
  HINO,
  JCB,
  Komatsu,
  Liebherr,
  man,
  MAN,
  Marini,
  Mazda,
  Mitsubishi_Fuso,
  Porsche,
  Renault_Trucks,
  TCE,
  TCV,
  Tegeta_Truck_Bus,
  Zetor,
  XCMG,
  Valtra,
  TTB,
  Tegeta,
  Temsa,
};

export const CompanyContainer = styled.div`
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
    color: #172b4d;
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
    color: #44546f;
    line-height: 22px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .checkbox {
    margin-left: auto;
  }

  /* Hide the default checkbox */
  .custom-checkbox input {
    display: none;
  }

  /* Create a custom checkbox */
  .custom-checkbox .checkmark {
    position: relative;
    height: 24px;
    width: 24px;
    background-color: #ff9602;
    display: inline-block;
    border-radius: 4px; /* Optional: for rounded corners */
  }

  .custom-checkbox .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-checkbox input:checked + .checkmark:after {
    display: block;
  }

  .custom-checkbox .checkmark:after {
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  section {
    display: flex;
    margin-top: 12px;
    gap: 16px;

    img {
      height: 30px;
      width: auto;
      max-width: 50px;
      object-fit: contain;
    }
  }

  @media (max-width: 992px) {
    display: block;
    position: relative;

    img {
      width: 56px;
      height: 56px;
    }

    .checkbox {
      position: absolute;
      right: 12px;
      top: 24px;
    }
  }
`;
