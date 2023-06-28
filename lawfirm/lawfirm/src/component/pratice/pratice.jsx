import "./pratice.css"
import Image1 from "../../assets/img1.png"
import Image2 from "../../assets/img2.png"
import Image3 from "../../assets/img3.png"
import Image4 from "../../assets/img4.png"
import Image5 from "../../assets/img5.png"
import Image6 from "../../assets/img6.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function Pratice(){
    return(<div className="containerPratice">
      <div className="text1">Area of Pratice</div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <img src={Image6} alt="img1"/>
        </Grid>
        <Grid item xs={4}>
        <img src={Image5} alt="img2"/>
        </Grid>
        <Grid item xs={4}>
        <img src={Image4} alt="img3"/>
        </Grid>
        <Grid item xs={8}>
        <img src={Image3} alt="img4"/>
        </Grid>
        <Grid item xs={8}>
        <img src={Image2} alt="img5"/>
        </Grid>
        <Grid item xs={4}>
        <img src={Image1} alt="img6"/>
        </Grid>
      </Grid>
    </Box>
    
    </div>)
}