import styled from "styled-components";

export const TwoPartsContainer = styled.div`
  display: flex;
  height: 100dvh;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  flex: 3;
  height: calc(100dvh - 112px);
  padding: 56px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
`;

export const Main = styled.main``;

export const AppBody = styled.div``;

export const Title = styled.h1`
  font-family: "FiraGO";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin: 0 0 8px 0;
`;

export const SubTitle = styled.h2`
  color: #172b4d;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
`;

export const Flex = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;

  &.mobile {
    @media (max-width: 992px) {
      flex-direction: column;
      gap: 0px;
    }
  }
`;

export const Small = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const StandardDiv = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Center = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100dvw;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100dvh - 112px);
  padding: 56px 0;
`;

export const CompaniesContainer = styled.div`
  width: calc(100% - 112px);
  text-align: center;

  & > div {
    width: auto;
    min-height: 45vh;
  }
`;
