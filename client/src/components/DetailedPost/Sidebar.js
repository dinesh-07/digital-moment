import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Container } from 'react-bootstrap';


const Sidebar = ({city, country, tags}) => {
  return (
    <Grid item xs={12} md={4} sx = {{mt:5, mb: 10}}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6">
          {city ? `${city}`: ""}
        </Typography>
        <Typography variant="h7">
          {country ? `${country}`: ""}
        </Typography>
        <Container>
                  {tags.map((tag) => (
                          <Container className = "pt-3">
                            <Chip key = {tag} label={tag}/>
                          </Container>
                        ))}
        </Container>
      </Paper>
    </Grid>
  )
}

export default Sidebar