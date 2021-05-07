import React, { useState, useEffect } from 'react';
import Nav from '../../../Components/Nav';
import Instrument from '../Instrument';

export default function Percussion() {
    let [ loggedIn,, ] = useState(localStorage.hasOwnProperty("ACCESS_TOKEN"));
    const [ accountData, setAccountData ] = useState({});
    const [ currInstrument, setCurrInstrument ] = useState(0);

    useEffect(() => {
        if (loggedIn) {
            fetch("https://github.com/SoftwareFuze/MTMSBandSite-Frontend/getUserData", {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
                }
            })
                .then(response => response.json())
                .then(response => {
                    if (response.status === 200)
                        setAccountData(response.data);
                    // eslint-disable-next-line
                    else loggedIn = false;
                });
        }
    }, []);

    const changeInstrument = inst => {
        fetch("/Instruments.json", {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response.filter(instr => instr.name === inst)[0]);
                setCurrInstrument(response.filter(instr => instr.name === inst)[0]);
            });
    }

    return (
        <React.Fragment>
            <Nav loggedIn={loggedIn} account={accountData} />
            <div className="instruments">
                {
                    currInstrument === 0 ?
                        <React.Fragment>
                            <div className="options">
                                <div className="instrument">
                                    <h4 onClick={() => changeInstrument("Bass")}>Bass</h4>
                                    <div className="img">
                                        <img alt="" src="https://d1aeri3ty3izns.cloudfront.net/media/31/310922/1200/preview_1.jpg" />
                                    </div>
                                </div>
                                <div className="instrument">
                                    <h4 onClick={() => changeInstrument("Bells")}>Bells</h4>
                                    <div className="img">
                                        <img alt="" src="https://o.quizlet.com/-mkFybPQ4hxXsxRbyrjFYw_b.jpg" />
                                    </div>
                                </div>
                                <div className="instrument">
                                    <h4 onClick={() => changeInstrument("Drums")}>Drums</h4>
                                    <div className="img">
                                        <img alt="" src="data:image/jpeg;base64,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" />
                                    </div>
                                </div>
                            </div>
                            <h1>Pick the instrument that you are playing in band!</h1>
                        </React.Fragment> : <Instrument data={currInstrument} />
                }
            </div>
        </React.Fragment>
    );
}
