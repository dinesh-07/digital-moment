import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import _axios from 'axios';
import { env } from '../../../env';

const axios = _axios.create({ baseURL: env.appServer });

const IdeaView = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/ideas/${id}`)
            .then(response => response.data ? setPost(response.data) : navigate('/'))
            .catch(e => navigate('/'));
    });

    return (
        <div>
            <Post isChallenge={true} post={post}/>
        </div>

    );
};

export default IdeaView;
