import { Box, Grid, FormControl, MenuItem, TextField, Button,  } from "@mui/material"
import {useState} from 'react'

export const Form = () =>{

    const UserIDs = [1, 2, 3, 4]
    const [value, setValue] = useState("")

    return(
        <Box mt={6} sx={{display: 'flex', justifyContent: 'center'}}>
            <FormControl>
                <Grid container spacing={1}>
                    <Grid item sm={12}>
                        <TextField fullWidth required select value={value} label="User ID"
                            onChange={(e) => setValue(e.target.value)}>
                            {UserIDs.map((id)=>{
                                return <MenuItem value={id}>{id}</MenuItem>
                            })}
                        </TextField>
                    </Grid>
                    <Grid item sm={6}>
                        <TextField label="Name"></TextField>
                    </Grid>
                    <Grid item sm={6}>
                        <TextField label="Region"></TextField>
                    </Grid>
                    <Grid item sm={12}>
                        <Button>Submit</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </Box>
    )
}