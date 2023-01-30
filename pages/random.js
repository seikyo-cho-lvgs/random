import { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const theme = createTheme({
  palette: {
    primary: orange,
  },
});

const members = process.env.MEMBERS.split(",");

const Random = () => {
  const [value, setValue] = useState(members[0]);
  const [showValue, setShowValue] = useState(false);

  const handleClick = () => {
    const randomValue = members[Math.floor(Math.random() * members.length)];
    setValue(randomValue);
    setShowValue(!showValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={4}
        style={{ height: "100vh" }}
      >
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Random
          </Button>
        </Grid>
        <Grid item style={{ visibility: showValue ? "visible" : "hidden" }}>
          <Avatar
            style={{
              width: "60px",
              height: "60px",
              color: "white",
              backgroundColor: "green",
              visibility: showValue ? "visible" : "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {value}
          </Avatar>
        </Grid>
        <Grid container justifyContent="center" spacing={4}>
          {members.map((member, index) => (
            <Grid item key={index}>
              <div
                style={{
                  backgroundColor: theme.palette[member],
                  padding: "20px",
                  width: "120px",
                  height: "20px",
                  margin: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                  boxShadow: "2px 2px 10px #ccc",
                }}
              >
                {member}
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Random;
