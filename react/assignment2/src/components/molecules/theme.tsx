// import React from "react";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/system";
// import Gilroy from "./fonts/Gilroy/Gilroy.otf"
export const theme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#E8E8E9",
            light:"#393552",
            dark:"#393552",
            

        },
        textColors:{
            main:"#E8E7F0",
            light:"#C9C8CC",
            dark:"#A5A5A6"

        },
        StructuralColors:{
            main:"#19181C",
            light:"#201F24",
            dark:"#2D2D30",
            greys:"#262529"
        },
        BorderColors:{
            main:"#413F4D",
            dark:"#28272B"
        },
        IconColors:{
            main:"#D4D2DE",
            light:"#727080"
        }

    },
    typography: {
        fontSize:"10px",
        fontFamily: ['Gilroy-Regular', 'sans-serif'].join(','),
      
        title:{
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "42px",
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "-0.015em",
            color: "#E9E8E9"
        },
        h1:{
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "24px",
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "-0.015em",
            color: "#E9E8E9"

        },
        h2:{
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "-0.015em",
            color: "#E9E8E9"


        },
        body1:{
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "-0.015em",
            color: "#E9E8E9"

        },
        body2:{
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight:"17px",
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "0.02em",
            color: "#E9E8E9"

        },
        caption:{
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight:"15px",
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "0.02em",
            color: "#E9E8E9"

        },
        Button:{
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight:"19px",
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "0.02em",
            color: "#E9E8E9"

        },


    
    
    
    
    
    
    
    },







    //   components: {
    //     MuiCssBaseline: {
    //       styleOverrides: `
    //         @font-face {
    //           font-family: 'Raleway';
    //           font-style: normal;
    //           font-display: swap;
    //           font-weight: 400;
    //           src: local('Raleway'), local('Raleway-Regular'), url(${Gilroy}) format('woff2');
    //           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //         }
    //       `,
    //         },

    //     },


})
