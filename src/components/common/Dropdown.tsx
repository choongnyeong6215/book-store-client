import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface IDropdownProps {
  children: React.ReactNode;
  toggleButton: React.ReactNode;
  isOpen?: boolean;
}

const Dropdown = ({
  children,
  toggleButton,
  isOpen = false,
}: IDropdownProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  return (
    <DropdownStyle $open={open} ref={dropdownRef}>
      <button className="toggle" onClick={() => setOpen(!open)}>
        {toggleButton}
        {open && <div className="panel">{children}</div>}
      </button>
    </DropdownStyle>
  );
};

interface IDropdownStyleProps {
  $open: boolean;
}

const DropdownStyle = styled.div<IDropdownStyleProps>`
  position: relative;

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;

    svg {
      width: 30px;
      height: 30px;
      fill: ${({ theme, $open }) =>
        $open ? theme.color.primary : theme.color.text};
    }
  }

  .panel {
    position: absolute;
    top: 40px;
    right: 0;
    padding: 16px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius.defailt};
    z-index: 10;
  }
`;

export default Dropdown;
