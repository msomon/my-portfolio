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
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
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
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
},

  plugins: [require("daisyui")],
}
