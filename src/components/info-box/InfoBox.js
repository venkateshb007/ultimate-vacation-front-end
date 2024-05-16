import React, {Fragment} from "react";

class InfoBox extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="p-3 mt-3 bg-dark text-white text-center ">
                    <div className="container">
                        <div className="row">
                           <div className="col">
                           <h5 className="display-4 ">Enjoy Your Holidays</h5>
                            <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat vero voluptatem quaerat nisi ut similique labore sint quas sunt provident, ipsa iusto earum nulla? Amet quos voluptate magni repellat?</p>
                        </div>
                           </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default InfoBox;