const colors = {
  primary: "#25ab75", // Primary green
  complementary: "#208c61", // Darker green for primary dark
  light: "#ffffff", // Pure white for light elements
  lighter: "#f8f8f8", // Slightly off-white for lighter elements
  lightest: "#ffffff", // Pure white for the lightest elements
  dark: "#1a1a1a", // Primary background dark
  darker: "#242424", // Secondary background dark
  darkest: "#151515", // Footer background dark
  text: "#676767", // Text color
  border: "#373737", // Border color
  error: "#bc1232", // Red for errors
  success: "#84A98C", // Soft sage green for success
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
  text: colors.dark,
  buttonText: colors.primary,
  cardBackground: colors.lightest,
};

export const darkTheme = {
  ...shared,
  background: colors.dark,
  text: colors.lighter,
  buttonText: colors.primary,
  cardBackground: colors.darker,
};



