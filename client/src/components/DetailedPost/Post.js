import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PostContent from './PostContent';
import Sidebar from './Sidebar';
import Nav from 'react-bootstrap/Nav'
import { useTranslation } from 'react-i18next';
import _axios from 'axios';
import { env } from '../../env'
import {useState, useEffect} from 'react';
import RelatedPost from './RelatedPost';
import {Col} from 'react-bootstrap';
import {Paper, Typography} from '@mui/material';

const axios = _axios.create({ baseURL: `${env.appServer}` });

const theme = createTheme();
const Post = ({isChallenge, post}) => {
  const { t } = useTranslation();
  const [relatedChallenges, getRelatedChallenges] = useState([]);
  const [relatedIdeas, getRelatedIdeas] = useState([]);


  useEffect( () => {
    getAllChallenges();
    getAllIdeas();
  }, []);

  const getAllChallenges = () => {
    axios.get('/challenges').then((response) => {
      console.log(response.data)
      const allPosts = response.data;
      getRelatedChallenges(allPosts)
    })
    .catch(() => console.log("error"))
  }

  const getAllIdeas = () => {
    axios.get('/ideas').then((response) => {
      console.log(response.data)
      const allPosts = response.data;
      getRelatedIdeas(allPosts)
    })
    .catch(() => console.log("error"))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav style={{marginTop: 130, justifyContent: "center", marginBottom: 5}}>
            <Nav.Item>
                <Nav.Link style={ {fontSize: "40px"} } eventKey='challenge'>{isChallenge ? "Challenge" : "Idea"}</Nav.Link>
            </Nav.Item>
            
    </Nav>
      <Container maxWidth="lg">
        <main>
          
          <Grid container spacing={6} sx={{ mt: 10 }}>
            <PostContent title={post.name} description={post.description}/>
            <Sidebar/>
          </Grid>
            
          <Grid container spacing={6} sx={{ mt: 3 }}>
              
              <Col className='col-md-offset-*'>
                <Paper className = "pt-10 pb-10">
                    <Typography variant="h4" className = "pt-5 pl-30">
                        Related Challenges
                    </Typography>
                
                  {relatedChallenges.map((post) => (
                          
                          <Container className = "pt-3">
                            <RelatedPost key={post.name} post={post} />
                         </Container>                        
                      ))}
                </Paper>
              </Col>
              <Col className='col-md-offset-*'>
                  <Paper className = "pt-10 pb-10">
                        <Typography variant="h4" className = "pt-5 pl-30">
                            Related Ideas
                        </Typography>
                        {relatedIdeas.map((post) => (
                        <Container className = "pt-3">
                          <RelatedPost key={post.name} post={post} />
                        </Container>
                      ))}
                  </Paper>
              </Col>        
          </Grid>
        </main>

      </Container>
    </ThemeProvider>
  )
}



export default Post;