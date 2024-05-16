import React, {Fragment} from "react";

class LandingPage extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="landing">
                    <div className="wrapper">
                        <div className="text-white d-flex flex-column text-center justify-content-center align-items-center h-100 ">
                        <h2>Welcome to Ultimate Vacation</h2>
                        <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus saepe itaque, accusamus sit laudantium adipisci accusantium sint quia eius? Officiis illum reprehenderit corrupti magni quis, totam in sequi eaque.</p>

                        </div>
                    </div>
                </div>   
            </Fragment>
        )
    }
}

export default LandingPage;