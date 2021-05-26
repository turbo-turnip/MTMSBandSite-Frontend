import React, { useState } from 'react';

export default function HomePopup(props) {
    const [ visible, setVisible ] = useState(true);
    const [ showTutorial, setShowTutorial ] = useState(false);

    const exitHandler = () => {
        setVisible(false);
        if (localStorage.hasOwnProperty("showPopup")) {
            if (localStorage.hasOwnProperty("popupLevel")) {
                localStorage.setItem("popupLevel", parseInt(localStorage.getItem("popupLevel")) - 1);
                console.log(localStorage.getItem("popupLevel"));
                if (parseInt(localStorage.getItem("popupLevel")) - 1 === 0) {
                    console.log("don't show please");
                    localStorage.setItem("showPopup", false);
                }
            } else localStorage.setItem("popupLevel", 3);
        } else localStorage.setItem("showPopup", true);
    }

    return (
        <React.Fragment>
            {showTutorial && 
                <div className="tutorial">
                    <span onClick={() => setShowTutorial(false)}>&times;</span>
                    {/* <video src="tutorial.mp4" controls></video> */}
                    <iframe src="https://drive.google.com/file/d/1y-qi_DJIFi_jm9ptQA2uCvxSEAKhA6_D/preview" width="640" height="480"></iframe>
                </div>}
            <div className="home-popup" style={{
                transform: visible ? 'scaleY(1)' : 'scaleY(0)'
            }}>
                <span onClick={exitHandler}>&times;</span>
                <h4>New to MTMSBandSite?</h4>
                <p>Watch the tutorial to become more farmiliar with MTMSBandSite and learn how all the features work. Get to know your band website!</p>
                <button onClick={() => setShowTutorial(true)}>Watch Tutorial</button>
            </div>
        </React.Fragment>
    );
}