import "./pratice.css";
import Image1 from "../../assets/img1.png";
import Image2 from "../../assets/img2.png";
import Image3 from "../../assets/img3.png";
import Image4 from "../../assets/img4.png";
import Image5 from "../../assets/img5.png";
import Image6 from "../../assets/img6.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Pratice() {
  return (
    <div className="containerPratice">
      <div
        className="text1"
        style={{ display: "flex", justifyContent: "center", width: "auto" }}
      >
        Area of Pratices
      </div>
      <Box sx={{ flexGrow: 1, marginBottom:"6rem"}}>
        <Grid container spacing={3}>
          <Grid item xs={8} style={{cursor:"pointer"}}>
            <img src={Image6} alt="img1" />
            <span style={{ position: "absolute", top: "31rem", left: "1rem" }}>
              Business Law
            </span>
          </Grid>
          <Grid item xs={4} style={{cursor:"pointer"}}>
            <img src={Image5} alt="img2" />
            <span
              style={{ position: "absolute", top: "31rem", left: "49.5rem" }}
            >
              Partnersip Law
            </span>
          </Grid>
          <Grid item xs={4} style={{cursor:"pointer"}}>
            <img src={Image4} alt="img3" />
            <span style={{ position: "absolute", top: "54rem", left: "1rem" }}>
              Real Estate Law
            </span>
          </Grid>
          <Grid item xs={8} style={{cursor:"pointer"}}>
            <img src={Image3} alt="img4" />
            <span
              style={{ position: "absolute", top: "54rem", left: "25.5rem" }}
            >
              Business Law
            </span>
          </Grid>
          <Grid item xs={8} style={{cursor:"pointer"}}>
            <img src={Image2} alt="img5" />
            <span style={{ position: "absolute", top: "77rem", left: "1rem" }}>
              Landlord Disputes
            </span>
          </Grid>
          <Grid item xs={4} style={{cursor:"pointer"}}>
            <img src={Image1} alt="img6" />
            <span
              style={{ position: "absolute", top: "77rem", left: "49.5rem" }}
            >
              Elder Abuse
            </span>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
