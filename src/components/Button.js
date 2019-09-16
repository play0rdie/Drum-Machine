import React, { useEffect } from 'react';

export const Button = ({ children, id, audSrc, powerOn, name, setOnDisplay }) => {
    const handleClick = () => {
        const audio = document.querySelector(`#${id}`);
        if (powerOn) {
            setOnDisplay(audio.attributes[3].value);
            audio.play();
        };
    }

    useEffect(() => {
        const audio = document.querySelector(`#${id}`);
        const listener = (e) => {
            if (powerOn && e.key === id) {
                setOnDisplay(audio.attributes[3].value);
                audio.play();
            }
        };
        document.addEventListener('keypress', listener);
//        return document.removeEventListener('keypress', listener);
    })

    return (
        <div className='col-4 mb-3'>
            <button id={`button-${id}`} type="button" className="drum-pad btn btn-primary btn-drum" onClick={handleClick}>
                <audio id={id} src={audSrc} className='clip' name={name}></audio>
                {children}
            </button>
        </div>
    )
}