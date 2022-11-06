import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useEffect} from 'react';
import Header from './Header';
import MainFeaturedPost from './MainFeaturePost';
import FeaturedPost from './FuturedPost';
import { postDownloader } from './Services/postDownloader';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};


const theme = createTheme();

export default function Preview() {

  const [posts, setPost] = useState()

  useEffect(() => {
    postDownloader().then((items) => {
      setPost(items)
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Challenge" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
          {posts !== undefined && posts.map((post) => (
              <FeaturedPost key={post.name} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}></Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
