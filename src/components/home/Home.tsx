import { Box, Container, Grid, Typography } from "@mui/material";

import logo from "../../assets/images/meloncholyGames.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <Box sx={{ padding: 2 }}>
                <Grid container spacing={2} justifyContent={"end"}>
                    <Grid item>
                        <Link to={"/"}>Home</Link>
                    </Grid>
                    <Grid item>
                        <Link to={"/project-cantaloupe"}>Project-Cantaloupe</Link>
                    </Grid>
                </Grid>
            </Box>
            <Grid
                container
                direction={"column"}
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                spacing={2}
                style={{ height: "95vh" }}
            >
                <Grid item>
                    <img src={logo} style={{ width: 300 }} />
                </Grid>
                <Grid item>
                    <Typography variant={"h2"}>Meloncholy Games</Typography>
                </Grid>
                <Grid item>
                    <Typography align={"center"} sx={{ fontSize: 20 }}>
                        Welcome to the Meloncholy Games website! We are a small indie game
                        development studio based in the United States. We are currently working on
                        our first project, which is a 2D platformer game. We are excited to share
                        more information about our project as it develops. Stay tuned!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
