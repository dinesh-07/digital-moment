import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PostContent from './PostContent';
import Sidebar from './Sidebar';
import Nav from 'react-bootstrap/Nav'
import { useTranslation } from 'react-i18next';
import Comments from './Comments'


const theme = createTheme();

const Post = () => {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav style={{marginTop: 130, justifyContent: "center", marginBottom: 5}}>
            <Nav.Item>
                <Nav.Link style={ {fontSize: "40px"} }eventKey='challenge'>{t("challenge")}</Nav.Link>
            </Nav.Item>
            
    </Nav>
      <Container maxWidth="lg">
        <main>
          
          <Grid container spacing={6} sx={{ mt: 10 }}>
            <Sidebar/>
            <PostContent title="From the firehose"/>
          </Grid>
        </main>
      <Comments/>
      </Container>
    </ThemeProvider>
  )
}

export default Post;