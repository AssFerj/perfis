import {
  Avatar,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ReturnButton from "../components/ReturnButton/ReturnButton";
import MenuAppBar from "../components/AppBar/AppBar";

// import { useParams } from 'react-router-dom';

const PerfilDavid: React.FC = () => {
  // const params = useParams();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <MenuAppBar GetIcons={<ReturnButton />} />
      </Grid>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                height: 300,
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Paper>
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            top={-250}
            zIndex={999}
          >
            <Avatar
              alt="David Lustosa"
              src="https://th.bing.com/th/id/R.4b1ebbdf9a6a42f23de2678c80eb02df?rik=SEPvooeqfgw0kA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1535713875002-d1d0cf377fde%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=Gww3MHYoEwaudln4mR6ssDjrAMbAvyoXYMsyKg5p0Ac%3d&risl=&pid=ImgRaw&r=0"
              sx={{
                width: "40vh",
                height: "40vh",
                border: 6,
                borderColor: "#0091ea",
              }}
            />
          </Grid>
          <Grid item xs={12} position={"relative"} top={-330}>
            <Paper
              elevation={2}
              sx={{
                padding: 3,
                backgroundImage:
                  "linear-gradient(90deg, rgba(0,100,183,1) 0%, rgba(0,145,234,1) 35%, rgba(100,193,255,1) 100%)",
              }}
            >
              <Typography variant="h3" color={"#fff"}>
                David Lustosa
              </Typography>
              <Typography variant="body1" mt={1} color={"#fff"}>
                22 anos | david@mail.com
              </Typography>
              <Divider sx={{ marginTop: 2 }} color={"#fff"} />
              <Typography variant="body1" mt={1} color={"#fff"}>
                Aluno da 12ª edição do curso de Desenvolvimento Web Fullstack da
                Growdev
              </Typography>
              <Typography variant="body1" mt={1} color={"#fff"}>
                Stack: Fullstack
              </Typography>
              <Typography variant="body1" mt={1} color={"#fff"}>
                HardSkills: HTML, CSS, Javascript, Typescript, Bootstrap, React,
                Redux, NodeJs, Express
              </Typography>
              <Typography variant="body1" mt={1} color={"#fff"}>
                SoftSkills: Trabalha bem em equipe, Gosta de aprender, Focado na
                tarefa
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PerfilDavid;
