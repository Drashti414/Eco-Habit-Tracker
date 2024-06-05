import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { FormControlLabel, Checkbox } from '@mui/material';

const Signup = () => {
    const paperStyle = { padding: 20, height: '80vh', width: 380, margin: "30px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnStyle = { margin: '8px 0' };
    const spacingStyle = { marginTop: 20 };

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" required style={spacingStyle} />
                    <TextField fullWidth label='Email' placeholder="Enter your email" required style={spacingStyle} />
                    <TextField fullWidth label='Password' placeholder="Enter your password" type='password' required style={spacingStyle} />
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" type='password' required style={spacingStyle} />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" color="primary" />}
                        label="I accept the terms and conditions."
                        style={spacingStyle}
                    />
                    <Button type='submit' variant='contained' color='primary' style={{ ...btnStyle, ...spacingStyle }} fullWidth>Sign up</Button>
                    <Typography align='center' style={spacingStyle}>
                        Already have an account?
                        <Link href="/login" style={{ marginLeft: 5 }}>
                            Log In
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
}

export default Signup;
