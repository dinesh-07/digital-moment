import { useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import FlagIcon from '@mui/icons-material/Flag';

function FeaturedPost(props) {
  const { post } = props;
  const { t } = useTranslation();
  const [upvotes, setUpvotes] = useState(Math.floor(Math.random() * 1000));
  const [upvoted, setUpvoted] = useState(false);
  const handleUpvote = e => {
    e.stopPropagation();
    e.preventDefault();
    
    if (upvoted) {
      setUpvoted(false); 
      setUpvotes(upvotes - 1)
    }
    else {
      setUpvoted(true) 
      setUpvotes(upvotes + 1)
    }
    
  }; 

  


  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href='#'>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <div className='d-flex gap-2 upvoter' onMouseDown={(e) => {e.stopPropagation()}}>
              {upvoted ? 
                <FlagIcon style={{ color: "rgb(238, 181, 80)" }} onClick = { handleUpvote } />
              :
                <EmojiFlagsOutlinedIcon style={{color: "rgb(79, 126, 225)"}} onClick = { handleUpvote } />
              }
              <Typography>
                {upvotes}
              </Typography>
            </div>
            <Typography component="h2" variant="h5">
              {post.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.createdAt}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {t("post")}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.thumnail}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}



export default FeaturedPost;
