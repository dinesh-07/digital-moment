import IdeaPage from './IdeaPage';
import ChallengePage from './ChallengePage';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

const Dashboard = ({ show, setShow, openLogin, setOpenLogin }) => {
    const { t } = useTranslation();
    const [isChallenge, setIsChallenge] = useState(true);

    return (

    <>
    <Nav style={{marginTop: 130, justifyContent: "center", marginBottom: 50}}
    activeKey={isChallenge ? 'challenge' : 'idea'}
    onSelect={key => setIsChallenge(key === 'challenge')}
    >
        <Nav.Item>
            <Nav.Link style={ {fontSize: "40px"} }eventKey='challenge'>{t("challenge")}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={ { color: "rgb(238, 181, 80)", fontSize: "40px", marginLeft: "100px"}} eventKey='idea'>{t("idea")}</Nav.Link>
        </Nav.Item>
    </Nav>
    { isChallenge?
        <ChallengePage />: <IdeaPage />
    }
    </>
    )
}

export default Dashboard;
