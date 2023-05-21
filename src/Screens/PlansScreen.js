import React from 'react'
import "./PlansScreen.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function PlansScreen() {
    const history = useHistory();

    return (

        <> <div className='PlansScreen-plan'>

            <div className='plansScreen-Info'>
                <h5>Basic</h5>
                <h6>720p</h6>
            </div>
            <button onClick={() => history.push("/")}>Subscribe</button>
        </div>

            <div className='PlansScreen-plan'>

                <div className='plansScreen-Info'>
                    <h5>Standard</h5>
                    <h6>1080p</h6>
                </div>
                <button onClick={() => history.push("/")} >Subscribe</button>
            </div>
            <div className='PlansScreen-plan'>

                <div className='plansScreen-Info'>
                    <h5>Premium</h5>
                    <h6>4k + HDR</h6>
                </div>
                <button onClick={() => history.push("/")}
                    className='PlansScreen-plan-premium'>Current Package</button>
            </div>
        </>

    )
}


export default PlansScreen
