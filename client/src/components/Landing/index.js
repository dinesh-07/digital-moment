import React from 'react';
import { Button } from 'react-bootstrap';
import community from '../../Assets/community.png';
import learning from '../../Assets/learning.jpg';
import building from '../../Assets/building.jpg';
import empower from '../../Assets/empower.jpg';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div id='landing-container'>
            <div id='landing-view'>
                <h1 style={{ textAlign: 'center' }}>Welcome to Digital Moment!</h1>
                <img id='community' src={community} alt='community' />
                <Button className='mt-5 landing-link' onClick={() => navigate('/')}>Take a look at what's happening</Button>
            </div>
            <div id='landing-content'>
                <h1>Who we are</h1>
                <div className='landing-desc'>
                    <p className='landing-desc-text'>Digital Moment is catalyzing change makers through immersive and engaging experiences where young people can learn digital skills such as coding, algorithm and data literacy, and artificial intelligence to have a social impact.</p>
                    <img className='landing-desc-img' src={learning} alt='who we are' />
                </div>
                <h1>What this is</h1>
                <div className='landing-desc'>
                    <p className='landing-desc-text'>This platform aims to connect young people from all over the world to come together and share challenges or ideas they find in their respective parts of the world. Using their experiences to come up with new solutions to old problems.</p>
                    <img className='landing-desc-img'src={building} alt='who we are' />
                </div>
                <h1>What we hope to achieve</h1>
                <div className='landing-desc'>
                    <p className='landing-desc-text'>We will educate more than 1 million young people and 50,000 educators on AI, ethics and using digital skills to reach the United Nations Sustainable Development Goals by 2030.</p>
                    <img className='landing-desc-img' src={empower} alt='who we are' />
                </div>
            </div>
        </div>
    )
}

export default Landing