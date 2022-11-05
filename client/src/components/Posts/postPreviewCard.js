import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"
function postPreviewCard({ Title, User, Content, Thumbnail}) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Thumbnail} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{User}</Card.Subtitle>
        <Card.Text>
          {Content}
        </Card.Text>
        <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default postPreviewCard