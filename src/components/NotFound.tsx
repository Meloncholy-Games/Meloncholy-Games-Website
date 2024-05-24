import { Grid, Typography } from "@mui/material";

const NotFound = (props: any) => {
    return (
        <Grid
            container
            spacing={6}
            style={{ height: "100vh" }}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Grid
                item
                container
                spacing={5}
                style={{ width: "100%" }}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid
                    item
                    container
                    spacing={2}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Grid item>
                        <Typography variant={"h5"} align={"center"}>
                            Page Not Found
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NotFound;
