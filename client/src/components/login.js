import React from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Link, Typography, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 380, margin: "30px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnStyle = { margin: '8px 0' };
    const spacingStyle = { marginTop: 20 };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField
                    label='Username'
                    placeholder='Enter username'
                    fullWidth
                    required
                    style={spacingStyle}
                />
                <TextField
                    label='Password'
                    placeholder='Enter password'
                    type='password'
                    fullWidth
                    required
                    style={spacingStyle}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                    style={spacingStyle}
                />
                <Button
                    type='submit'
                    color='primary'
                    variant="contained"
                    style={{ ...btnStyle, ...spacingStyle }}
                    fullWidth
                >
                    Sign in
                </Button>
                <Typography style={{ marginTop: 20, marginBottom: 10 }}>
                    <Link href="/forgetPassword">
                        Forgot password?
                    </Link>
                </Typography>
                <Typography>
                    Do you have an account?
                    <Link href="/signup" style={{ marginLeft: 5 }}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;
