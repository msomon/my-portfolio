module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
primary: "#570DF8",
        
secondary: "#37CDBE",
        
accent: "#DBFEFC",
        
neutral: "#3D4451",
               
"success": "#36D399",     
"warning": "#FBBD23",   
"error": "#37CDBE",

        },
        
      },
    ],

    
  },

  theme:{
  screens: {
      xs: '350px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
},

  plugins: [require("daisyui")],
}
