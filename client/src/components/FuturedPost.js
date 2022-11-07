import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTranslation } from 'react-i18next';

function FeaturedPost(props) {
  const { post } = props;
  const { t } = useTranslation();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
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
