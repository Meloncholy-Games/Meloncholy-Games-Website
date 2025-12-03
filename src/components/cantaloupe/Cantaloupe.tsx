import { Container, Grid, Typography } from "@mui/material";

const Cantaloupe = () => {
    return (
        <Container>
            <Grid
                container
                direction={"column"}
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                spacing={2}
                style={{ height: "100vh" }}
            >
                <Grid>
                    <Typography variant={"h2"}>Project Cantaloupe</Typography>
                </Grid>
                <Grid>
                    <Typography variant={"h4"}>
                        This will host the future website for project cantaloupe. In the meantime,
                        it is live so we can link to it from socials and for AWS purposes.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cantaloupe;
