import React, {Fragment} from "react";
import Card1 from '../../assets/bali.jpg'
import Card2 from '../../assets/goa.jpg'
import Card3 from '../../assets/kashi.jpg'
import Card4 from '../../assets/london.jpg'

class Cards extends React.Component{
render(){
    return(
        
        <Fragment>
            <div className="container mt-3 ">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={Card1} alt=""  className="img-fluid "/>
                        <div className="card-body">
                            <h4 className="card-title">Uttarakhanda</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil quam sint magni sit, perferendis vitae esse quaerat possimus maiores?</p>
                            <button className="btn btn-dark btn-sm">Book Now</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={Card2} alt=""  className="img-fluid "/>
                        <div className="card-body">
                            <h4 className="card-title">Goa</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil quam sint magni sit, perferendis vitae esse quaerat possimus maiores?</p>
                            <button className="btn btn-dark btn-sm">Book Now</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={Card3} alt=""  className="img-fluid "/>
                        <div className="card-body">
                            <h4 className="card-title">Varanasi</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil quam sint magni sit, perferendis vitae esse quaerat possimus maiores?</p>
                            <button className="btn btn-dark btn-sm">Book Now</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={Card4} alt=""  className="img-fluid "/>
                        <div className="card-body">
                            <h4 className="card-title">Lakshadweep</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil quam sint magni sit, perferendis vitae esse quaerat possimus maiores?</p>
                            <button className="btn btn-dark btn-sm">Book Now</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

}

export default Cards;