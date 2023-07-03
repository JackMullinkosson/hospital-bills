import React from 'react';
import { Grid  } from "@mui/material"
import { getPrices } from '../helpers/helpers'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



export const ResultsPage = () => {
  const user = useSelector(state => state.user);
  const [prices, setPrices] = useState([])

  useEffect(()=>{
    if(user.services.length<1) return
    const fetchPrices = async () => {
      const results = await getPrices(user.region, user.services)
      setPrices(results)
    }
    fetchPrices()
  },[user.region, user.services])

  console.log('prices', prices)

  return (
    <div>
      <h1>Results</h1>
      <Grid container space={1}>
      {user.services.map((s, index)=>{
        return <>
        <Grid item sm={6}>
          {s}
        </Grid>
        <Grid item sm={6}>{prices[index]}
          </Grid>
          </>
      })}
      </Grid>
    </div>
  );
}

