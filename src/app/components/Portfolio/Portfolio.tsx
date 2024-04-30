/* eslint-disable react/no-unescaped-entities */
import "./Portfolio.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { grey } from "@mui/material/colors";
import Exemplo from "../../assets/exemplo.png";
import Image from "next/image"; // Importe o componente Image do Next.js

const caminhoDaImagem = Exemplo.src || Exemplo;

const color = grey[50];

export default function Portfolio() {
  return (
    <section className="Portfolio">
      <div className="heading">
        <div className="portHead">
          <h1>Meu Portfolio</h1>
          <p>
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
      </div>
      <div className="cardsPortfolio">
        <Card sx={{ maxWidth: 354 }}>
          <CardMedia
            component="img"
            alt="projeto 1"
            height="198"
            image={caminhoDaImagem}
          />
          <div className="cardInfo">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Educational Platform
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Web Design / Usability Testing
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <ArrowOutwardOutlinedIcon fontSize="large" htmlColor="white" />
              </IconButton>
            </CardActions>
          </div>
        </Card>
        <Card sx={{ maxWidth: 354 }}>
          <CardMedia
            component="img"
            alt="projeto 1"
            height="198"
            image={caminhoDaImagem}
          />
          <div className="cardInfo">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Educational Platform
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Web Design / Usability Testing
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <ArrowOutwardOutlinedIcon fontSize="large" htmlColor="white" />
              </IconButton>
            </CardActions>
          </div>
        </Card>
        <Card sx={{ maxWidth: 354 }}>
          <CardMedia
            component="img"
            alt="projeto 1"
            height="198"
            image={caminhoDaImagem}
          />
          <div className="cardInfo">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Educational Platform
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Web Design / Usability Testing
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <ArrowOutwardOutlinedIcon fontSize="large" htmlColor="white" />
              </IconButton>
            </CardActions>
          </div>
        </Card>
        <Card sx={{ maxWidth: 354 }}>
          <CardMedia
            component="img"
            alt="projeto 1"
            height="198"
            image={caminhoDaImagem}
          />
          <div className="cardInfo">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Educational Platform
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Web Design / Usability Testing
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <ArrowOutwardOutlinedIcon fontSize="large" htmlColor="white" />
              </IconButton>
            </CardActions>
          </div>
        </Card>
        <Card sx={{ maxWidth: 354 }}>
          <CardMedia
            component="img"
            alt="projeto 1"
            height="198"
            image={caminhoDaImagem}
          />
          <div className="cardInfo">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Educational Platform
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Web Design / Usability Testing
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <ArrowOutwardOutlinedIcon fontSize="large" htmlColor="white" />
              </IconButton>
            </CardActions>
          </div>
        </Card>
        <Card sx={{ maxWidth: 354 }}>
          <CardMedia
            component="img"
            alt="projeto 1"
            height="198"
            image={caminhoDaImagem}
          />
          <div className="cardInfo">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Educational Platform
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Web Design / Usability Testing
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <ArrowOutwardOutlinedIcon fontSize="large" htmlColor="white" />
              </IconButton>
            </CardActions>
          </div>
        </Card>
      </div>
    </section>
  );
}
