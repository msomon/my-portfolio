module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#570DF8",
        
"secondary": "#F000B8",
        
"accent": "#DBFEFC",
        
"neutral": "#3D4451",
        
"base-100": "#FFFFFF",
        
"info": "#F9EEFE",
"success": "#FCF5F5",     
"warning": "#FFF2F5",
        
"error": "#F87272",
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
