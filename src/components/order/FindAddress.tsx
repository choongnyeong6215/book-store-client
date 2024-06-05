import styled from "styled-components";
import Button from "../common/Button";
import { useEffect } from "react";

interface IFindAddressProps {
  onCompleted: (address: string) => void;
}

const SCRIPT_URL =
  "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const FindAddress = ({ onCompleted }: IFindAddressProps) => {
  // script load

  // handler

  // input
  const handleOpen = () => {
    new window.daum.Postcode({
      onComplete: (data: any) => {
        onCompleted(data.address as string);
      },
    }).open();
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src = SCRIPT_URL;

    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <FindAddressStyle>
      <Button type="button" size="medium" schema="normal" onClick={handleOpen}>
        주소 찾기
      </Button>
    </FindAddressStyle>
  );
};

const FindAddressStyle = styled.div``;

export default FindAddress;
