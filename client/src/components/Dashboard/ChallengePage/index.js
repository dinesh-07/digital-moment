import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../../MainFeaturePost';
import FeaturedPost from '../../FeaturedPost';
import _axios from 'axios';
import { env } from '../../../env'
import {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

const axios = _axios.create({ baseURL: `${env.appServer}` });

export default function Preview() {

  const { t } = useTranslation();
  const mainFeaturedPost = {
    title: t("challengetitle"),
    description: t("challengehero"),
    image: 'https://i.guim.co.uk/img/media/239815abe37b5a23efcea01a9212efd11c34d6ce/0_150_4500_2700/master/4500.jpg?width=620&quality=45&dpr=2&s=none',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };

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
            <FeaturedPost key={post.name} post={post} />
        ))}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}></Grid>
    </main>
    </Container>

  );
}