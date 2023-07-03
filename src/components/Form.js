import { Box, Grid, FormControl, MenuItem, TextField, Button,  } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { setUserId, setUserDetails, setService, setAmountPaid, addService } from "../store/userSlice";
import {useEffect} from 'react'
import {getUser} from '../helpers/helpers'
import { useNavigate } from 'react-router-dom';

export const Form = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(state => state.user);
    const userIds = [1, 2, 3, 4]
    const defaultServices = [
        'General Check-up',
        'X-ray',
        'Blood Test',
        'MRI'
      ];
      

    useEffect(() => {
        if (!user.userId) return;
        
        const fetchUserDetails = async () => {
          const details = await getUser(user.userId);
          dispatch(setUserDetails(details));
        };
      
        fetchUserDetails();
      }, [user.userId, dispatch]);
      


    return(
        <Box mt={6} sx={{display: 'flex', justifyContent: 'center'}}>
            <FormControl sx={{ width: 1/2 }}>
                <Grid container spacing={1} >
                    <Grid item sm={12}>
                        <TextField fullWidth required select value={user.userId} label="User ID"
                            onChange={(e) => dispatch(setUserId(e.target.value))}>
                            {userIds.map((id)=>{
                                return <MenuItem value={id}>{id}</MenuItem>
                            })}
                        </TextField>
                    </Grid>
                    <Grid item sm={6}>
                        <TextField label="Name" value={user.name}></TextField>
                    </Grid>
                    <Grid item sm={6}>
                        <TextField label="Region" value={user.region}></TextField>
                    </Grid>
                    {user.services.map((s, index)=>{
                        return <>
                        <Grid item sm={6}>
                            <TextField label="Service" select sx={{width: '50%'}} value={s} onChange={(e) => dispatch(setService({ index: index, payload: e.target.value }))}>
                                {defaultServices.map((s)=>{
                                    return <MenuItem value={s}>{s}</MenuItem>
                                })}
                            </TextField>
                        </Grid>
                        <Grid item sm={6} >
                            <TextField label="Price"  value={user.amountPaid[index]} onChange={(e) => dispatch(setAmountPaid({ index: index, payload: e.target.value }))}></TextField>
                        </Grid>
                        </>
                    })}
                    <Grid item sm={12}>
                        <Button onClick={() => dispatch(addService())}>Add service</Button>
                    </Grid>
                    <Grid item sm={12}>
                        <Button onClick={() => navigate('/results')}>Submit</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </Box>
    )
}