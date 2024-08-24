const colors = {
  primary: "#6D6875", // Elegant muted purple
  complementary: "#B5838D", // Soft dusty pink
  error: "#E5989B", // Gentle blush pink
  success: "#84A98C", // Soft sage green
  light: "#F4F1DE", // Warm light beige
  lighter: "#FAF3E0", // Very light cream
  lightest: "#FFFFFF", // Pure white
  dark: "#4A4E69", // Deep muted blue
  darker: "#22223B", // Elegant dark blue
  darkest: "#1D1D2C", // Rich dark navy
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
