import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 94%;
  max-width: 1120px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px 0;
  height: calc(100dvh - 112px - 160px);
  overflow: auto;
`;

export const AppBody = styled.div``;

export const Title = styled.h1`
  color: #172b4d;
  text-align: center;
  font-family: FiraGO;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin: 0 0 16px 0;
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
