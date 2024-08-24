const colors = {
  primary: "#00C9A7", // HackerRank primary green
  complementary: "#00A86B", // HackerRank darker green
  error: "#FF4D4F", // HackerRank error red
  success: "#4CAF50", // HackerRank success green
  light: "#F6F6F6", // HackerRank light background
  lighter: "#E0E0E0", // HackerRank lighter background
  lightest: "#FFFFFF", // Pure white
  dark: "#333333", // HackerRank dark text color
  darker: "#1C1C1C", // HackerRank darker text color
  darkest: "#0D0D0D",
};

const sizes = {
  borderRadius: {
    m: "10px", // Slightly larger for a softer look
    l: "18px", // Larger for more rounded elements
  },
  border: {
    m: "1.5px", // Thinner for a more delicate feel
  },
};

const space = {
  s: 8, // Slightly increased for more breathing room
  m: 16,
  l: 28,
  xl: 40,
};

const fonts = {
  body: "'Lora', serif", // Elegant, classic serif font
  heading: "'Merriweather', serif", // Stylish and elegant for headings
  logo: "'Great Vibes', cursive", // Elegant cursive for the logo
};

const shared = {
  colors,
  sizes,
  fonts,
  space,
};

export const lightTheme = {
  ...shared,
  background: colors.light,
  text: colors.darker,
  buttonText: colors.lightest,
  cardBackground: colors.lightest,
};

export const darkTheme = {
  ...shared,
  background: colors.darker,
  text: colors.lighter,
  buttonText: colors.darker,
  cardBackground: colors.dark,
};
