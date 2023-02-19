import { FunctionComponent, useContext, useEffect, useState } from "react";
import Card from "../interfaces/Card";
import { getAllCards } from "../services/cardServices";
import "../css/cards.css";
import { addCardToFavorites } from "../services/userServices";
import { successMsg } from "../services/feedbacks";
import { UserContext } from "../App";
import User from "../interfaces/User";

interface AllCardsProps { }

const AllCards: FunctionComponent<AllCardsProps> = () => {
    let UserCtx = useContext(UserContext);
    let [allCards, setAllCards] = useState<Card[]>([]);
    useEffect(() => {
        getAllCards().then((res) => {
            setAllCards(res.data);
        }).catch((err) => console.log(err))
    }, []);
    return (<>
        <h3 className="display-3 mt-3 mb-4">All Cards</h3>

        {allCards.length ? (
            <div className="container mb-5">
                <div className="row">
                    {allCards.map((card: Card) => (
                        <div
                            key={card.id}
                            className="card ms-1 mx-4 my-4"
                            style={{ width: "18rem" }}
                        >
                            <img
                                src={card.image}
                                className="card-img-top"
                                alt={card.name}
                                style={{ height: "100%" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{card.name}</h5>
                                <p className="card-text">{card.description}</p>
                                <p className="text-success">{card.phone}</p>
                                <p className="text-success">{card.address}</p>
                                <p className="text-success">{card.website}</p>
                                {UserCtx.userctx.isLoggedIn && !UserCtx.userctx.isBusiness &&
                                    <button
                                        onClick={() => {
                                            addCardToFavorites(card.id as number, UserCtx.userctx as User)
                                                .then((res) => {
                                                    if (res) {
                                                        UserCtx.changeUser({
                                                            ...UserCtx.userctx,
                                                            ...res.data,
                                                        });
                                                        console.log(UserCtx.userctx);
                                                        successMsg(
                                                            `Card ${card.name} added to favorites`
                                                        );
                                                    }
                                                })
                                                .catch((err) => console.log(err));
                                        }}
                                        disabled={UserCtx.userctx.myCards?.includes(card.id as number)}
                                    >
                                        <i className="fa-solid fa-star"></i>
                                    </button>
                                }

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <p>No Cards</p>
        )}
    </>);
}

export default AllCards;