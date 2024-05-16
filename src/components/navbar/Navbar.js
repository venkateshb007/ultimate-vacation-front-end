import React, {Fragment} from "react";

class Navbar extends React.Component{

    render(){
        return(
            <Fragment>
                <div className="navbar navbar-dark bg-dark navbar-expand-sm ">
                    <a href="/" className="navbar-brand">Ultimate Vacation</a>
                </div>
            </Fragment>
        )
    }

} 

export default Navbar;