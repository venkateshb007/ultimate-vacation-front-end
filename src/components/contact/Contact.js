import React, {Fragment} from "react";

class Contact extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-body">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62211.44473994531!2d77.61869840791917!3d12.958070861496306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b4551d0957%3A0x597894d77e1e4919!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1706605294299!5m2!1sen!2sin" width="410" height="330" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                               <div className="card">
                                <div className="card-header bg-dark text-white ">
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="E-mail"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder="Mobile No"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Query"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-dark btn-sm" value="submit"/>
                                    </div>
                                   
                                </form>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contact;