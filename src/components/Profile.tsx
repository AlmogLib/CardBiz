import { FunctionComponent, useContext, useEffect, useState } from "react";
import User from "../interfaces/User";
import { getUserById } from "../services/userServices";
import "../css/profile.css"
import { UserContext } from "../App";
import { NavLink } from "react-router-dom";


interface ProfileProps { }

const Profile: FunctionComponent<ProfileProps> = () => {
    let [user, setUser] = useState<User | null>(null);
    let UserCtx = useContext(UserContext);


    useEffect(() => {
        const getUser = async () => {
            try {
                let userId: number = await JSON.parse(
                    sessionStorage.getItem("userId") as string
                );
                getUserById(userId)
                    .then((res) => {
                        setUser(res.data);
                    })
                    .catch((err) => console.log(err));
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);

    return (
        <>
            <div className="container">
                <h3 className="display-1 text-center mt-5">Hello, {user?.name ?? "Stranger"}</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-5">Your Details:</h5>

                                <p className="card-text">
                                    <strong>Name:</strong> {UserCtx.userctx.name}
                                </p>
                                <p className="card-text">
                                    <strong>Id:</strong> {UserCtx.userctx.id}
                                </p>
                                <p className="card-text">
                                    <strong>Email:</strong> {UserCtx.userctx.email}
                                </p>
                                {UserCtx.userctx.isLoggedIn && UserCtx.userctx.isBusiness &&
                                    <button className="btn btn-info mt-5">
                                        <NavLink className="nav-link" to="/newcard">
                                            Add New Card
                                        </NavLink>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;