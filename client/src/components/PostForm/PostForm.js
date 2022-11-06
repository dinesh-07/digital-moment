import React, {useState, useEffect} from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown'

const PostForm = () => {
  const tags = [      {title: "No Poverty", id: 1}, 
                      {title: 'Zero Hunger', id: 2},
                      {title: 'Good Health and Well-Being', id: 3},
                      {title: 'Quality Education', id: 4},
                      {title: 'Gender Equality', id: 5},
                      {title: 'Clean Water and Sanitation', id: 6},
                      {title: 'Affordable and Clean Energy', id: 7},
                      {title: 'Decent Work and Economic Growth', id: 8},
                      {title: 'Industry, Innovation, and Infrastructure', id: 9},
                      {title: 'Reduced Inequalities', id: 10},
                      {title: 'Sustainable Cities and Communities', id: 11},
                      {title: 'Responsible Consumption and Production', id: 12},
                      {title: 'Climate Action', id: 13},
                      {title: 'Life Below Water', id: 14},
                      {title: 'Life On Land', id: 15},
                      {title: 'Peace, Justice, and Strong Institutions', id: 16},
                      {title: 'Partnerships for the Goals', id: 17}
            ]
  
  const [selectedTags, setSelectedTags] = useState([]);
  
  const onSelect = (selectedTags, selectedItem) => {
      // console.log("Selected tags:", selectedTags)
  }

  const onRemove = (selectedTags, selectedItem) => {

  }


  return (
    <Form className='d-flex flex-column align-items-left form'>

        <Form.Group as = {Row} className = "mb-4">
            <Form.Label column sm = {2}>Tags</Form.Label>
            <Col sm={9} >
              <Multiselect
                options={tags} // Options to display in the dropdown
                selectedValues={selectedTags} // Preselected value to persist in dropdown
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                displayValue="title" // Property name to display in the dropdown options
              />
            </Col>
        </Form.Group>

        <Form.Group as = {Row} className = "mb-4">
                <Form.Label column sm = {2}>Title</Form.Label>
                <Col sm={9}>
                  <Form.Control type = "text" placeholder = "Title"/>
                </Col>
        </Form.Group>

        <Form.Group as = {Row} className = "mb-4">
                <Form.Label column sm = {2}>Description</Form.Label>
                <Col sm={9}>
                  <Form.Control as = "textarea" placeholder = "Describe your challenge" style={{ minHeight: 100 }}/>
                </Col>
        </Form.Group>

        <Row>
          <Form.Group as={Col} className = "col-md-4" controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} className = "col-md-4" controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} className = "col-md-4" controlId="formGridZip">
            <Form.Label>Country</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
    </Form>
  )
}

export default PostForm