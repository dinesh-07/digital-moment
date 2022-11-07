import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../../MainFeaturePost';
import FeaturedPost from '../../FuturedPost';
import _axios from 'axios';
import { env } from '../../../env'
import {useState, useEffect} from 'react';

const axios = _axios.create({ baseURL: `${env.appServer}` });

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};



export default function Preview() {

  const [featuredPosts, getFeaturedPosts] = useState([]);

  useEffect( () => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    axios.get('/challenges').then((response) => {
      console.log(response.data)
      const allPosts = response.data;
      getFeaturedPosts(allPosts)
    })
    .catch(() => console.log("error"))
  }

  return (
    <Container maxWidth="lg">
    <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
        {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
        ))}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}></Grid>
    </main>
    </Container>

  );
}