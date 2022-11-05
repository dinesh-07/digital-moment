import PostPreviewCard from "./postPreviewCard";
import CardGroup from "react-bootstrap/CardGroup"
import React from 'react'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";

function postPreviewList({cardInfo}) {
    console.log(cardInfo)
  return (
    <div>
        <Container>
            <Col>
                <Row>
                {cardInfo.map((post, i) => (
                    <PostPreviewCard Title={post.Title} User={post.User} Content={post.Content} Thumbnail={post.Thumbnail} />
                ))}
                </Row>
        
            </Col>
        </Container>
        
            
        
    </div>
  )
}

export default postPreviewList