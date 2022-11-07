import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PostContent from './PostContent';
import Sidebar from './Sidebar';
import Nav from 'react-bootstrap/Nav'
import { useTranslation } from 'react-i18next';
import _axios from 'axios';
import { env } from '../../env'
import {useState, useEffect} from 'react';
import RelatedPost from './RelatedPost';
import {Col, Row, Image, Container} from 'react-bootstrap';
import {Paper, Typography} from '@mui/material';
import Navigation from '../Layout/Navigation';
import Footer from '../Layout/Footer';
import { tags } from "./../Dashboard/tags";


const axios = _axios.create({ baseURL: `${env.appServer}` });

const theme = createTheme();

function getImage(tag) {
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].value === tag) {
      return tags[i].image;
    }
  }
  return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpRO11pfNTX5nuwEvx7Zd_Y0_kfmo8-ioXSFL2RI3&s";
}

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
      <Navigation/>
      <Nav style={{marginTop: 130, justifyContent: "center", marginBottom: 5}}>
            <Nav.Item>
                <Nav.Link style={ {fontSize: "40px"} } eventKey='challenge'>{isChallenge ? "Challenge" : "Idea"}</Nav.Link>
            </Nav.Item>
            
    </Nav>
      <Container style={{ paddingBottom: 50}}>
        <main sx = {{mb: 20}}>
          <Container>
                <Row spacing={6} className="mb-20">
                    <Col md={9}>              
                      <PostContent title={post.name} description={post.description}/>
                    </Col>
                    <Col md = {3} className="mb-20">
                  
                          <Container className ="d-none d-md-block">
                            <img src={getImage(post.tag[0])} style={{ height:"30vh", marginBottom: 15}}/>
                          </Container>
              
                      <Sidebar city={post.city} country={post.country} tags={post.tag}/>
                    </Col>
                  
                </Row>
                  
                <Row className = "mt-20" sx = {{mt:50}}>
                    <Col className='col-md-offset-*' sm={12} lg={6}>
                          <Paper className = "pt-10 pb-10" elevation={6} sx={{ p: 4, bgcolor: 'grey.50' }}>
                              <Typography variant="h4" className = "pt-5 pl-100">
                                  Related Challenges
                              </Typography>
                          
                            {relatedChallenges.map((post) => (
                                    
                                    <Container key = {post.name} className = "pt-3 ">
                                      <RelatedPost key={post.name} post={post} />
                                  </Container>                        
                                ))}
                          </Paper>
                      </Col>
                      <Col className='col-md-offset-*' sm={12} lg={6}>
                            <Paper className = "pt-10 pb-10" elevation={6} sx={{ p: 4, bgcolor: 'grey.50' }}>
                                <Container key = {post.name}>
                                      <Typography variant="h4" className = "pt-5 pl-50">
                                          Related Ideas
                                      </Typography>
                                      {relatedIdeas.slice(0, 3).map((post) => (
                                      <Container className = "pt-3">
                                        <RelatedPost key={post.name} post={post} />
                                      </Container>
                                    ))}
                                </Container>
                                  
                            </Paper>
                      </Col>
                </Row>      
                
          </Container>
          
        </main>

      </Container>
    </ThemeProvider>
  )
}



export default Post;