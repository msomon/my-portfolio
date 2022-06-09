module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#570DF8",
        
"secondary": "#F000B8",
        
"accent": "#37CDBE",
        
"neutral": "#3D4451",
        
"base-100": "#FFFFFF",
        
"info": "#F9EEFE",
"success": "#FCF5F5",     
"warning": "#FBBD23",
        
"error": "#F87272",
        },
        
      },
    ],

    
  },

  theme:{
  screens: {
      xs: '350px',
      sm: '568px',
      md: '820px',
      lg: '1330px',
      xl: '1440px',
    },
},

  plugins: [require("daisyui")],
}
