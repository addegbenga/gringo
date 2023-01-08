/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        bannerImage: "url('./assets/images/banner.png')",
        footerImage: "url('./assets/images/rmk_idahosa.png')",
        campaign: "url('./assets/images/campaign.png')",
        securityImage: "url('./assets/images/security.png')",
        security1: "url('./assets/images/security1.png')",
        yahaya2: "url('./assets/images/yahaya2.png')",
        un: "url('./assets/images/un.png')",
        flag: "url('./assets/images/flag.png')",
      }),
    },
  },
  plugins: [],
};
