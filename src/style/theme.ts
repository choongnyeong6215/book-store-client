type ColorKey = "primary" | "background" | "secondary" | "third";
export type ThemeName = "light" | "dark";

interface ITheme {
  name: ThemeName;
  color: Record<ColorKey, string>;
}

export const light: ITheme = {
  name: "light",
  color: {
    primary: "brown",
    background: "lightgray",
    secondary: "green",
    third: "green",
  },
};

export const dark: ITheme = {
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen",
  },
};

export const getTheme = (themeName: ThemeName): ITheme => {
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
};
