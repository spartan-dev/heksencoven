module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purplelight: "#7e54c6",
        purple: "#35012c",
        main: "#11001c",
        silver: "#e0e2db",
        palesilver: "#bfb5af",
      },
    },
  },
  variants: {},
  plugins: [],
}
