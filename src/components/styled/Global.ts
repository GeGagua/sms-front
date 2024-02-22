import styled from "styled-components";

export const TwoPartsContainer = styled.div`
  display: flex;
  height: 100dvh;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    display: block;
    height: auto;
  }
`;

export const Container = styled.div`
  flex: 3;
  height: calc(100dvh - 12px);
  padding: 56px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;

  @media (max-width: 992px) {
    height: auto;
    min-height: 60vh;
  }
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

  @media (max-width: 992px) {
    font-size: 16px;
    margin: 0 16px 8px 16px;
  }
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

  &.full-mobile {
    button {
      padding: 12px 24px;
      width: auto;

      &:nth-child(2) {
        flex: 1;
      }
    }

    @media (max-width: 992px) {
      width: 90vw;
      & > button {
        flex: 1;
        width: 45%;
        padding: 12px;
      }
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
  background: #fff;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100dvw;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100dvh - 12px);
  padding: 56px 0;

  @media (max-width: 992px) {
    padding: 16px;
    width: auto;
    height: calc(100dvh - 32px);
    overflow: hidden;
  }
`;

export const CompaniesContainer = styled.div`
  width: calc(100% - 112px);
  text-align: center;

  & > div {
    width: auto;
    min-height: 45vh;
  }

  @media (max-width: 992px) {
    width: calc(100% - 12px);
    margin-bottom: 48px;
  }
`;
