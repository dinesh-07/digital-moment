import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

const PostContent = ({title, description}) => {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200', minHeight: '30vh'}}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
        <Divider />
        <Typography variant="h7" gutterBottom>
            {description}
        </Typography>
        </Paper>
        
    </Grid>
  )
}

export default PostContent