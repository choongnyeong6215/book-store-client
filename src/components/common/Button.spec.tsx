import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Button 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    // 1. 렌더
    render(
      <BookStoreThemeProvider>
        <Button size="large" schema="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    // 2. 확인
    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  // size
  it("button props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" schema="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByRole("button")).toHaveStyle({
      fontSize: "1.5rem",
    });
  });

  // color
  it("color props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" schema="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    expect(container?.firstChild).toHaveStyle({
      backgroundColor: "midnightblue",
    });
  });
});
