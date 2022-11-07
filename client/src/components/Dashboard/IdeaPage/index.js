import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../../MainFeaturePost';
import FeaturedPost from '../../FeaturedPost';
import _axios from 'axios';
import { env } from '../../../env'
import {useState, useEffect} from 'react';

const axios = _axios.create({ baseURL: `${env.appServer}` });

const mainFeaturedPost = {
  title: 'Good Study Habits',
  description:
  "Your study habits can make a night and day difference in your results, learn how to organize yourself and start benefitting...",
  image: 'https://www.rmusentrymedia.com/wp-content/uploads/2018/02/StudyHabits2.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};



export default function Preview() {

  const [featuredPosts, getFeaturedPosts] = useState([]);

  useEffect( () => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    axios.get('/ideas').then((response) => {
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