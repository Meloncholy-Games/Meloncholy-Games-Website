import { Container, Grid, Typography } from "@mui/material";

const Layout = () => {
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
					<Typography variant={"h2"}>Hello World!</Typography>
				</Grid>
				<Grid item>
					<Typography variant={"h4"}>
						You are in {import.meta.env.MODE} mode. Your journey begins here.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Layout;
