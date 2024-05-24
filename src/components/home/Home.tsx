import { Container, Grid, Typography } from "@mui/material";

const Home = () => {
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
				<Grid item>
					<Typography variant={"h2"}>Meloncholy Games</Typography>
				</Grid>
				<Grid item>
					<Typography variant={"h4"}>
						This will host the future website for meloncholy games. 
						In the meantime, it is live so we can link to it from socials and for AWS purposes.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
