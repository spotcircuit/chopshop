"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  contrastPrimary: string;
  contrastSecondary: string;
  contrastAccent: string;
}

const defaultColors: BrandColors = {
  primary: "236 72 153", // Hot Pink
  secondary: "20 184 166", // Teal
  accent: "249 115 22", // Orange
  dark: "26 0 51", // Deep Purple
  contrastPrimary: "255 255 255",
  contrastSecondary: "255 255 255",
  contrastAccent: "255 255 255",
};

interface ThemeContextType {
  colors: BrandColors;
  updateColors: (colors: Partial<BrandColors>) => void;
  resetColors: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  colors: defaultColors,
  updateColors: () => {},
  resetColors: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  initialColors?: Partial<BrandColors>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialColors,
}) => {
  const [colors, setColors] = useState<BrandColors>({
    ...defaultColors,
    ...initialColors,
  });

  const updateColors = (newColors: Partial<BrandColors>) => {
    setColors((prev) => ({ ...prev, ...newColors }));
  };

  const resetColors = () => {
    setColors(defaultColors);
  };

  useEffect(() => {
    // Update CSS variables when colors change
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      const cssVarName = `--${key
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "")}`;
      root.style.setProperty(cssVarName, value);
    });
  }, [colors]);

  return (
    <ThemeContext.Provider value={{ colors, updateColors, resetColors }}>
      {children}
    </ThemeContext.Provider>
  );
};