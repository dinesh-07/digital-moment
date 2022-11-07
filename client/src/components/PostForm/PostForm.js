import React, { useContext, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Button from 'react-bootstrap/Button';
import _axios from 'axios';
import { env } from '../../env';
import { UserContext } from '../../contexts/User';
import { useTranslation } from 'react-i18next';

const axios = _axios.create({ baseURL: env.appServer });

const PostForm = ({ isChallenge, setShow }) => {
  const { t } = useTranslation();
  const tags = [
    { value: "No Poverty", label: t("nopoverty") },
    { value: "Zero Hunger", label: t("zerohunger") },
    {
      value: "Good Health and Well-Being",
      label: t("healthwellbeing"),
    },
    { value: "Quality Education", label: t("qualityeducation") },
    { value: "Gender Equality", label: t("genderequality") },
    {
      value: "Clean Water and Sanitation",
      label: t("cleanwatersanitation"),
    },
    {
      value: "Affordable and Clean Energy",
      label: t("cleanenergy"),
    },
    {
      value: "Decent Work and Economic Growth",
      label: t("economic"),
    },
    {
      value: "Industry, Innovation, and Infrastructure",
      label: t("industry"),
    },
    { value: "Reduced Inequalities", label: t("reduced") },
    {
      value: "Sustainable Cities and Communities",
      label: t("suscities"),
    },
    {
      value: "Responsible Consumption and Production",
      label: t("consumption"),
    },
    { value: "Climate Action", label: t("climate") },
    { value: "Life Below Water", label: t("lifewater") },
    { value: "Life On Land", label: t("lifeland") },
    {
      value: "Peace, Justice, and Strong Institutions",
      label: t("peace"),
    },
    {
      value: "Partnerships for the Goals",
      label: t("partners"),
    },
  ];

  const { user } = useContext(UserContext);
  const animatedComponents = makeAnimated();

  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [creationError, setCreationError] = useState(false);

  const onChange = (changeState, clearError = (v) => {}) => (e) => { changeState(e.target.value); clearError(false); setCreationError(false); };

  const createPost = () => {
    if (title.length > 0 && desc.length > 0) {
      axios.post(isChallenge ? '/challenges/' : '/ideas', { name: title, description: desc, createdBy: user._id, city, country, relatedChallenges: [], relatedIdeas: [], tag: selectedTags.map(t => t.value) })
        .then(() => {
          setShow(false);
        })
        .catch((e) => setCreationError(true));
    } else {
      if (title.length === 0)
        setTitleError(true);
      if (desc.length === 0)
        setDescError(true);
    }
  };

  return (
    <Form className="d-flex flex-column align-items-left form">
      <Form.Group as={Row} className="mb-4">
        <Form.Label column sm={2}>
        {t("tags")}
        </Form.Label>
        <Col sm={9}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={tags}
            value={selectedTags}
            onChange={newTags => setSelectedTags(newTags)}
          />
        </Col>
      </Form.Group>
      <Form.Group as = {Row} className = "mb-4">
        <Form.Label column sm = {2} >{t("posttitle")}</Form.Label>
        <Col sm={9}>
          <Form.Control type = "text" placeholder = {t("posttitle")} value={title} onChange={onChange(setTitle, setTitleError)} isInvalid={titleError}/>
          { titleError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("titleplease")}</p> : null}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col lg={9}>
          <Form.Control
            as="textarea"
            placeholder={`${isChallenge ? t("describeyourchallenge") : t("describeyouridea")}`}
            style={{ minHeight: 100 }}
            value={desc}
            onChange={onChange(setDesc, setDescError)}
            isInvalid={descError}
          />
          { descError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("descplease")}</p> : null}
        </Col>
      </Form.Group>
      <Row>
        <Form.Group as={Col} className="col-md-46" controlId="formGridCity">
          <Form.Label>{t("city")}</Form.Label>
          <Form.Control value={city} onChange={onChange(setCity)} />
        </Form.Group>
        <Form.Group as={Col} className="col-md-6" controlId="formGridZip">
          <Form.Label>{t("country")}</Form.Label>
          <Form.Control value={country} onChange={onChange(setCountry)} />
        </Form.Group>
      </Row>
      <div className='w-100 mt-5 d-flex justify-content-center gap-3'>
        <Button variant="primary" onClick={() => setShow(false)}
            className='w-25 rounded-0 form-submit'>
            {t("cancel")}
        </Button>
        <Button variant="primary" onClick={createPost} className='w-25 rounded-0 form-submit'>
          {t("done")}
        </Button>
      </div>
      { creationError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12, alignSelf: 'center' }}>Unable to create your { isChallenge ? 'challenge' : 'idea'}. Please try again later.</p> : null}
    </Form>
  );
};

export default PostForm;
