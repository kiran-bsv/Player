import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMedia } from '../actions/player';

const Input = () => {
    const dispatch = useDispatch();
    const [url, setUrl] = useState('');

    const media = useSelector((state) => state.player.media);
    
    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(setMedia(url, 'auto')); 
    };

    return (
        <div>
            <input
                type='text'
                value={url}
                onChange={handleChange}
                placeholder="Place the URL here"
            />
            <button className="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Input;
