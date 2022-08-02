import React from "react";
import {Button} from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Business.css"


const paperStyle= {
    padding: "20px",
    height: "60vh",
    width: 480,
    margin: "20px auto"
}


export default function Business (){
    return(
<> <Button href= "https://3000-zaynahahmad-myblog-mif836z7pa0.ws-us54.gitpod.io/"> Home Page </Button>
        
        <h1 className= "Title"> Barclays Donates 1 Million to Delaware State University </h1>
     
         <Grid align="center">
         <img src="https://media.cdn.gradconnection.com/BARCLAYS_BANNER__1vWc729.png" alt="Logo" height={400} width={950}/>
        <div className= "Business-Text"><p> "Cuando se trata de cosméticos, el término "no tóxico" puede comúnmente utilizado es "libre de cinco". Five-free se refiere a los esmaltes que no contienen cinco ingredientes específicos: formaldehído, tolueno formaldehído y alcanfor. También hay marcas que se comercializan como libres de más sustancia de dibutilo, resina de formaldehído y alcanfor. También hay marcas que se comercializan como libres de más sustancias, como 7-free o 10-free.
"</p></div>
        <Grid align="center">
         <img src="https://www.desu.edu/sites/hub/files/styles/inline_1120/public/0_0_b_barclay_dsu_contigent_2400.jpg?itok=LfCJPkRr" alt="Logo" height={500} width={950}/>
         
                <div className= "Business-Text"><p> "La Universidad Estatal de Delaware (DSU o Del State) es una universidad pública de investigación de concesión de tierras históricamente negra en Dover, Delaware. DSU también tiene dos campus satélites,uno en Wilmington y otro en Georgetown. La universidad abarca cuatro colegios y una población diversa de estudiantes de pregrado y grado avanzado. La Universidad Estatal de Delaware está clasificada entre" </p></div>
         
         <Grid align="center">
         <img src="https://th.bing.com/th/id/OIP.ekFfVQz8jO1V2-7LCTUB7gHaFm?pid=ImgDet&rs=1" alt="Logo" height={500} width={950}/>
         
         </Grid>
         </Grid>
         </Grid>
         </>
    )
}