import React from "react";

// Customizable Area Start
import {
  Container,
  Box,
  Button,
  Input,
  Typography,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Grid,
  Paper,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { createStyles, styled, ThemeProvider } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
// import CloudUpload from '@material-ui/icons/CloudUpload';



// import App from "../App";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#0000ff",
//       contrastText: "#fff",
//     },
//   },
// });

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // Required for all blocks
      <ThemeProvider >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Paper style={styles.paper}>
              <Box style={styles.contentWrapper}>
                <Box style={styles.contentBox}>
                  <img style={styles.contentBoxImage} src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="Image" />
                </Box>
                <Box style={styles.contentSize}>
                  <Typography variant="h4" style={styles.contentHeadValue}>Rent a car at your nearest depot anytime</Typography>
                  <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non rerum hic tempora impedit delectus, vel perspiciatis laborum odit modi aut quasi dicta et itaque perferendis! Quo ex maxime rerum vel?</Typography>
                </Box>
                <Box style={styles.contentMainBox}>
                  <Box style={styles.contentBoxLft}>
                    <img style={styles.contentBoxLftImage} src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="Image" />
                  </Box>
                  <Box style={styles.contentBoxRht}>
                    <img style={styles.contentBoxRhtImage} src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="Image" />
                  </Box>
                  <Box style={styles.contentBoxBottom}>
                    <img style={styles.contentBoxBottomImage} src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="Image" />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} spacing={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px 30px",
                width: "75%",
                margin: "20px auto",
              }}
            >
              <Typography variant="h4" component="h2">
                {/* {this.labelTitle} */}
              </Typography>
              <Typography variant="subtitle1" component="div">
                { } {/*UI Engine::From Sketch*/}
              </Typography>
              <Box style={styles.inHeading}>
                <Typography variant="h4" component="h2" style={styles.isHeadValue}>
                  Sign In
                </Typography>
                <Typography variant="h4" component="h2" style={styles.isHeadValue}>
                  Sign Up
                </Typography>
              </Box>
              <Container sx={{ p: 1 }}>
              <Grid container spacing={3} >
                <Grid item xs={6}>
                  <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                    First Name
                  </InputLabel>
                  <FormInputContainer>
                    <Input
                      data-test-id="txtInputName"
                      placeholder={"Enter Name"}
                      fullWidth={true}
                      // value={this.state.email}
                      style={styles.formInputOutline}
                    // onChange={(e) => this.setEmail(e.target.value)}
                    />
                  </FormInputContainer>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                    Last Name
                  </InputLabel>
                  <FormInputContainer>
                    <Input
                      data-test-id="txtInputName"
                      placeholder={"Enter Name"}
                      fullWidth={true}
                      //  value={this.state.password}
                      style={styles.formInputOutline}
                    // onChange={(e) => this.setPassword(e.target.value)}
                    />
                  </FormInputContainer>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                    Phone Number
                  </InputLabel>
                  <FormInputContainer>
                    <Input
                      data-test-id="txtInputPhone"
                      placeholder={"Enter Phone Number"}
                      fullWidth={true}
                      //  value={this.state.email}
                      style={styles.formInputOutline}
                    // onChange={(e) => this.setEmail(e.target.value)}
                    />
                  </FormInputContainer>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                    Email
                  </InputLabel>
                  <FormInputContainer>
                    <Input
                      data-test-id="txtInputEmail"
                      placeholder={"Enter Email"}
                      fullWidth={true}
                      // value={this.state.email}
                      style={styles.formInputOutline}
                    // onChange={(e) => this.setEmail(e.target.value)}
                    />
                  </FormInputContainer>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                    Password
                  </InputLabel>
                  <FormInputContainer>
                    <Input
                      data-test-id="txtInputPassword"
                      // type={this.state.enablePasswordField ? "password" : "text"}
                      placeholder={"Enter Password"}
                      fullWidth={true}
                      style={styles.formInputOutline}
                      //   value={this.state.password}
                      // onChange={(e) => this.setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            // onClick={this.handleClickShowPassword}
                            edge="end"
                          >
                            {/* {this.state.enablePasswordField ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )} */}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormInputContainer>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                    Confirm Password
                  </InputLabel>
                  <FormInputContainer>
                    <Input
                      data-test-id="txtInputPassword"
                      // type={this.state.enablePasswordField ? "password" : "text"}
                      placeholder={"Enter Password"}
                      fullWidth={true}
                      style={styles.formInputOutline}
                      //   value={this.state.password}
                      // onChange={(e) => this.setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            // onClick={this.handleClickShowPassword}
                            edge="end"
                          >
                            {/* {this.state.enablePasswordField ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )} */}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormInputContainer>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                    Driving License Number
                  </InputLabel>
                  <FormInputContainer>
                    <Input
                      data-test-id="txtInputLicense"
                      placeholder={"Enter Driving License Number"}
                      fullWidth={true}
                      //  value={this.state.email}
                      style={styles.formInputOutline}
                    // onChange={(e) => this.setEmail(e.target.value)}
                    />
                  </FormInputContainer>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                    Driving License Expiry Date
                  </InputLabel>
                  <FormInputContainer>
                    <Input
                      data-test-id="txtInputDate"
                      // type="date"
                      fullWidth={true}
                      //    value={this.state.email}
                      style={styles.formInputOutline}
                    // onChange={(e) => this.setEmail(e.target.value)}
                    />
                  </FormInputContainer>
                </Grid>
                <Grid item xs={6}>
                  <FormControl style={styles.formControl}>
                    <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                      Badge Color
                    </InputLabel>
                    <FormInputContainer>
                      <Select

                        displayEmpty
                        style={styles.formInputOutline}
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">
                          <em>Select Color</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormInputContainer>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                    Badge Number
                  </InputLabel>
                  <FormInputContainer>
                    <Input
                      data-test-id="txtInputLicense"
                      placeholder={"Enter Driving License Number"}
                      fullWidth={true}
                      //  value={this.state.email}
                      style={styles.formInputOutline}
                    // onChange={(e) => this.setEmail(e.target.value)}
                    />
                  </FormInputContainer>
                </Grid>
                <Grid item xs={6}>
                  <FormControl style={styles.formControl}>
                    <InputLabel style={styles.formInputLabel} shrink htmlFor="bootstrap-input">
                      Sector
                    </InputLabel>
                    <FormInputContainer>
                      <Select

                        displayEmpty
                        style={styles.formInputOutline}
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">
                          <em>Select Sector</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormInputContainer>

                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Upload your driving license</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControl style={styles.formControl} >
                    <InputLabel style={styles.formInputLabel} shrink htmlFor="back-side">Front Side</InputLabel>

                    <Button variant="outlined" style={styles.formInputUpload}
                    // style={styles1.formInputUpload1}
                    >
                      Click to upload
                    </Button>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl style={styles.formControl} >
                    <InputLabel style={styles.formInputLabel} shrink htmlFor="front-side">Back Side</InputLabel>
                    <Button variant="outlined" style={styles.formInputUpload}>
                      Click to upload
                    </Button>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    data-test-id={"btnEmailVerify"}
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={styles.verifyBtn}
                  // onClick={() => this.doEmailLogIn()}
                  >
                    Verify Email {/*UI Engine::From Sketch*/}
                  </Button>
                </Grid>
              </Grid>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

const FormInputContainer = styled('div')({
  ' & ::before': {
    display: 'none',
  },
  ' & ::after': {
    display: 'none',
  },

  // backgroundColor: "blue"
});
const styles1 = () => createStyles({
  formInputUpload1: {
    backgroundColor: "#000",
    '&::before': {
      content: '"some content"',
      display: 'block',
      height: 60,
      marginTop: -60
    }
  }
});
const styles = {
  // Customizable Area Start
  container: {
    flex: 1,
    padding: 16,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 650,
    backgroundColor: "#fff"
  },
  paper: {
    backgroundColor: '#260069',
    height: '100%',
    borderRadius: 0,
    width: '100%',
    paddingTop: '8rem',
    position: 'relative',
  },
  contentWrapper: {
    backgroundColor: '#4a0387',
    borderRadius: '25px',
    color: '#fff',
    padding: '30px',
    width: '75%',
    margin: '0 auto',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  contentSize: {
    width: '70%',
    padding: '15px',
    marginRight: 'auto',
    marginLeft: '5px',
  },
  contentHeadValue: {
    paddingBottom: '15px',
    fontWeight: 'bold',
  },
  formControl: {
    width: "100%"
  },
  verifyBtn: {
    backgroundColor: '#250068',
    padding: '10px',
    borderRadius: '10px',
    textTransform: 'capitalize',
  },
  formInputLabel: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: '-15px',
    fontSize: '16px',
  },
  formInputOutline: {
    border: '1px solid #000',
    padding: '5px 15px',
    borderRadius: '5px',
    margin: '5px 0',
    fontWeight: '700',
    fontSize: '15px',
    width: '100%'
  },
  formInputUpload: {
    border: '1px solid #000',
    padding: '10px 15px 15px',
    borderRadius: '5px',
    margin: '5px 0',
    fontWeight: '700',
    fontSize: '15px',
    textDecoration: 'underline',
    justifyContent: 'flex-start',
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
  },
  inHeading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: "40px",
  },
  isHeadValue: {
    width: '50%',
    fontSize: '26px',
    textAlign: 'center',
    fontWeight: 'bold',
    "&::first-child": {
      borderRight: "1px solid #ccc",
    },
  },
  contentBox: {
    border: '1px solid #fff',
    borderRadius: 6,
    height: 140,
    width: 140,
    position: 'absolute',
    right: '-16px',
    top: '-50px',
  },
  contentBoxImage: {
    borderRadius: 10,
    height: 'calc(100% - 12px)',
    width: '100%',
    position: 'absolute',
    right: '-10px',
    top: '11px',
  },
  contentMainBox: {
    position: 'unset',
  },
  contentBoxLft: {
    border: '1px solid #fff',
    borderRadius: 6,
    height: 195,
    width: 315,
    position: 'absolute',
    left: '-90px',
    top: '350px',
  },
  contentBoxLftImage: {
    borderRadius: 10,
    height: 'calc(100% + 16px)',
    width: '100%',
    position: 'absolute',
    left: '-10px',
    bottom: '12px',
  },
  contentBoxRht: {
    border: '1px solid #fff',
    borderRadius: 6,
    height: 160,
    width: 275,
    position: 'absolute',
    right: '-115px',
    top: '250px',
  },
  contentBoxRhtImage: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    position: 'absolute',
    right: '-10px',
    bottom: '-15px',
  },
  contentBoxBottom: {
    border: '1px solid #fff',
    borderRadius: 6,
    height: 160,
    width: 280,
    position: 'absolute',
    right: '-45px',
    bottom: '-60px',
  },
  contentBoxBottomImage: {
    borderRadius: 10,
    height: '100%',
    width: 'calc(100% + 16px)',
    position: 'absolute',
    right: '12px',
    bottom: '11px',
  }
  // Customizable Area End
};