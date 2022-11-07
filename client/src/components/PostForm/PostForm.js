import React, {useState, useEffect, useRef} from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const PostForm = ({isChallenge}) => {
  const animatedComponents = makeAnimated();
  const tags = [      {value: "No Poverty", label: "No Poverty"}, 
                      {value: 'Zero Hunger', label: 'Zero Hunger'},
                      {value: 'Good Health and Well-Being', label: 'Good Health and Well-Being'},
                      {value: 'Quality Education', label: 'Quality Education'},
                      {value: 'Gender Equality', label: 'Gender Equality'},
                      {value: 'Clean Water and Sanitation', label: 'Clean Water and Sanitation'},
                      {value: 'Affordable and Clean Energy', label: 'Affordable and Clean Energy'},
                      {value: 'Decent Work and Economic Growth', label: 'Decent Work and Economic Growth'},
                      {value: 'Industry, Innovation, and Infrastructure', label: 'Industry, Innovation, and Infrastructure'},
                      {value: 'Reduced Inequalities', label: 'Reduced Inequalities'},
                      {value: 'Sustainable Cities and Communities', label: 'Sustainable Cities and Communities'},
                      {value: 'Responsible Consumption and Production', label: 'Responsible Consumption and Production'},
                      {value: 'Climate Action', label: 'Climate Action'},
                      {value: 'Life Below Water', label: 'Life Below Water'},
                      {value: 'Life On Land', label: 'Life On Land'},
                      {value: 'Peace, Justice, and Strong Institutions', label: 'Peace, Justice, and Strong Institutions'},
                      {value: 'Partnerships for the Goals', label: 'Partnerships for the Goals'}
            ]
  
  const [selectedTags, setSelectedTags] = useState([]);
  const onSelect = (selectedTags, selectedItem) => {
     setSelectedTags([...selectedTags, selectedItem])
     console.log(selectedTags)
  }

  const onRemove = (selectedTags, selectedItem) => {

  }


  return (
    <Form className='d-flex flex-column align-items-left form'>

        <Form.Group as = {Row} className = "mb-4">
            <Form.Label column sm = {2}>Tags</Form.Label>
            
            <Col sm={9} >
              <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={tags}
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
                <Col lg={9}>
                  <Form.Control as = "textarea" placeholder={`Describe your ${isChallenge ? "challenge" : "idea"}`} style={{ minHeight: 270 }}/>
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