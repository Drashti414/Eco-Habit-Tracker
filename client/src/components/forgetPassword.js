import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const ForgetPassword = () => {
    const paperStyle = { padding: 20, height: '60vh', width: 380, margin: "30px auto" };
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
                    <h2>Forget Password</h2>
                    <Typography variant='caption' gutterBottom>Please enter your email address to recover your password.</Typography>
                </Grid>
                <form>
                    <TextField
                        fullWidth
                        label='Email'
                        placeholder="Enter your email"
                        type='email'
                        required
                        style={spacingStyle}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        style={{ ...btnStyle, ...spacingStyle }}
                        fullWidth
                    >
                        Submit
                    </Button>
                    <Typography align='center' style={spacingStyle}>
                        Remember your password?
                        <Link href="/login" style={{ marginLeft: 5 }}>
                            Log In
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
}

export default ForgetPassword;
