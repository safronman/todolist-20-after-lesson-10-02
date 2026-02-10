import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

export const Users = () => {
  return (
    <Container maxWidth={"md"}>
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
          Users
        </Typography>
        <Typography>Users page is available.</Typography>
      </Paper>
    </Container>
  )
}
