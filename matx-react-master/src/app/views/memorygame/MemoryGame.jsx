import {
  Alert,
  Box,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Container } from "@mui/system";
import Game from "app/gamecomponent/Game";
import { useEffect, useState } from "react";
import illustration from "../../../images/illustrations/photos/jeux.png";

const MemoryGame = () => {
  const [open, setOpen] = useState(true);
  const [timer, setTimer] = useState(900);
  const [mycomponent, setMycomponent] = useState(<Game />);
  const [tempsRestant, setTempsRestant] = useState();
  const [message, setMessage] = useState();

  function handleTimer() {
    let localidjoue = localStorage.getItem("joue");
    const date = new Date();
    const strdate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear;

    if (localidjoue == null || localidjoue != strdate) {
      if (timer > 0) {
        setTimer(timer - 1);
        let minutes = Math.floor(timer / 60);
        let secondes = timer % 60;
        const tempsRestant =
          minutes + ":" + (secondes < 10 ? "0" : "") + secondes;
        setTempsRestant(tempsRestant);
      } else {
        setMycomponent(
          <Alert sx={{ m: 1 }} severity="danger" variant="filled">
            Vous n'avez plus de temps pour jouer
          </Alert>
        );
        localStorage.setItem("joue", strdate);
      }
    } else {
      setMycomponent(
        <Alert sx={{ m: 1 }} severity="warning" variant="filled">
          Vous avez assez joué aujourd'hui
        </Alert>
      );
    }
  }

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      handleTimer();
    }, 1000);
  }, [timer]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Container>
        <br />
        <br />
        <Card
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: 10,
              width: "17%",
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: 400,
              }}
              alt="Illustration"
              src={illustration}
              marginLeft={5}
            />
          </div>
          <div style={{
              width: "83%",
              display: 'flex',
              flexDirection: 'column',
              alignItems:'center'
          }}>
            <center>
              <h1>Jeu de Mémoire</h1>
            </center>
            <center style={{
                width: 275,
                wordBreak:'break-word',
                textAlign: 'justify'
            }}>
              Ce jeu est spécialement fait pour ceux qui ont besoin de
              travailler leur mémoire.Vous ne pourrez jouer que pendant
              15 minutes afin d'eviter votre addiction car notre plateforme est
              à but éducatif.
            </center>
            <center>
              <h4>Temps restant : {tempsRestant}</h4>
            </center>
            <CardContent>{mycomponent}</CardContent>
          </div>
        </Card>
        <br />
      </Container>
    </div>
  );
};

export default MemoryGame;
