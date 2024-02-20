import { FC } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  gap: 16px;
  width: calc(100% - 112px);
  justify-content: center;

  &.fullWidth {
    width: 100%;
  }

  section {
    flex: 1;

    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      margin: 0 0 8px 0;
    }

    div {
        width: 100%;
        display: flex;
        gap: 8px;

        span {
            background: rgba(9, 30, 66, 0.06);
            height: 4px;
            border-radius: 8px;
            flex: 1;
            

            &.active,
            &:hover {
                background: #FFCF51;
            }
        }
    }
  }
`;

interface IProps {
    active: number
    fullWidth?: boolean
}

const Footer: FC<IProps> = ({ active, fullWidth }) => {
  return (
    <FooterContainer className={fullWidth ? 'fullWidth' : ''}>
      <section>
        <p>იდენტიფიკაცია</p>
        <div>
          <span className={active >= 1 ? 'active' : ''} />
        </div>
      </section>
      <section>
        <p>ვერიფიკაცია</p>
        <div>
          <span className={active >= 2 ? 'active' : ''} />
          <span className={active >= 3 ? 'active' : ''} />
          <span className={active >= 4 ? 'active' : ''} />
        </div>
      </section>
      <section>
        <p>კომპანიები</p>
        <div>
          <span className={active >= 5 ? 'active' : ''} />
        </div>
      </section>
      <section>
        <p>დასასრული</p>
        <div>
          <span className={active >= 6 ? 'active' : ''} />
          <span className={active >= 7 ? 'active' : ''} />
          <span className={active >= 8 ? 'active' : ''} />
        </div>
      </section>
    </FooterContainer>
  );
};

export default Footer;
