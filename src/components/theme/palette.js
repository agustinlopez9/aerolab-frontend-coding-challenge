export const palette = {
  gradientPrimary: "#176feb",
  gradientSecondary: "#ff80ff",
  background: "#f5f5f5",
  textPrimary: "#252f3d",
  textSecondary: "#7c899c",
  border: "#dae4f2",
};

export const gradientBackground = `background: ${palette.gradientPrimary};
background: -webkit-linear-gradient(102.47deg, ${palette.gradientPrimary} -5.34%, ${palette.gradientSecondary} 106.58%);
background: -moz-linear-gradient(102.47deg, ${palette.gradientPrimary} -5.34%, ${palette.gradientSecondary} 106.58%);
background: linear-gradient(102.47deg, ${palette.gradientPrimary} -5.34%, ${palette.gradientSecondary} 106.58%);`;
