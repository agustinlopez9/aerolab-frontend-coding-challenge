export const palette = {
  gradientPrimary: "#176feb",
  gradientSecondary: "#ff80ff",
  whiteBackground: "#ffffff",
  iconBackground: "#E5F0FF",
  textPrimary: "#252f3d",
  textSecondary: "#7c899c",
  border: "#dae4f2",
  success: "#29cc74",
  error: "#e07f4f",
};

export const gradientBackground = `background: ${palette.gradientPrimary};
background: -webkit-linear-gradient(102.47deg, ${palette.gradientPrimary} -5.34%, ${palette.gradientSecondary} 106.58%);
background: -moz-linear-gradient(102.47deg, ${palette.gradientPrimary} -5.34%, ${palette.gradientSecondary} 106.58%);
background: linear-gradient(102.47deg, ${palette.gradientPrimary} -5.34%, ${palette.gradientSecondary} 106.58%);`;

export const gradientBackgroundWithOpacity = `background: rgba(23, 111, 235, 0.5);
background: -webkit-linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);
background: -moz-linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);
background: linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);`;
