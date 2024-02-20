import styled from "styled-components";
import { toast } from 'react-toastify';

const CopyContainer = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(9, 30, 66, 0.14);
  background: rgba(9, 30, 66, 0.06);
  gap: 32px;
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;

  p {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }

  svg {
    cursor: pointer;
  }
`;

const Copy = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("GE72TB7561136020100008");
    toast('წარმატებით დაკოპირდა', {
        type: 'success'
    })
  };

  return (
    <CopyContainer>
      <p>GE72TB7561136020100008</p>
      <svg
        onClick={() => copyToClipboard()}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M27 4H11C10.7348 4 10.4804 4.10536 10.2929 4.29289C10.1054 4.48043 10 4.73478 10 5V10H5C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V27C4 27.2652 4.10536 27.5196 4.29289 27.7071C4.48043 27.8946 4.73478 28 5 28H21C21.2652 28 21.5196 27.8946 21.7071 27.7071C21.8946 27.5196 22 27.2652 22 27V22H27C27.2652 22 27.5196 21.8946 27.7071 21.7071C27.8946 21.5196 28 21.2652 28 21V5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4ZM26 20H22V11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H12V6H26V20Z"
          fill="#44546F"
        />
      </svg>
    </CopyContainer>
  );
};

export default Copy;