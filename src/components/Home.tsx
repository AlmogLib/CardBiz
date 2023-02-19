import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css"

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (<>
        <div className="container mt-3">
            <h3 className="display-1">Welcome To CardBiz</h3>
            <div className="row">
                <div className="card col-md-2">
                    <div className="card-body">
                        <h5 className="card-title">Who Are We?</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        {/* <a to="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <img src="/ExampleCard.png" alt="" className="col-md-8" />
                <div className="card col-md-2">
                    <div className="card-body">
                        <h5 className="card-title">Join Us</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-primary m-1">
                            <NavLink className="nav-link" to="/signin">
                                Sign In
                            </NavLink>
                        </button>
                        <button className="btn btn-primary">
                            <NavLink className="nav-link" to="/signup">
                                Sign Up
                            </NavLink>
                        </button>
                        {/* <a to="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Home;