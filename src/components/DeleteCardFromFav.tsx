import { FunctionComponent, useContext } from "react";
import { Modal } from "react-bootstrap";
import { UserContext } from "../App";
import { successMsg } from "../services/feedbacks";
import { removeFromFavorites } from "../services/userServices";

interface DeleteCardFromFavProps {
    show: boolean;
    onHide: Function;
    cardId: number;
    refresh: Function;
}

const DeleteCardFromFav: FunctionComponent<DeleteCardFromFavProps> = ({ show, onHide, cardId, refresh }) => {
    let UserCtx = useContext(UserContext);
    return (<>
        <Modal
            show={show}
            onHide={() => onHide()}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Remove card
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Are you sure?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={() => {
                    removeFromFavorites(cardId, UserCtx.userctx)
                        .then(() => {
                            console.log(cardId, UserCtx.userctx);
                            onHide();
                            successMsg("Card removed successfully!");
                            refresh();
                        })
                        .catch((err) => console.log(err));
                }}>Yes</button>
                <button className="btn btn-primary" onClick={() => onHide()}>Cancel</button>
            </Modal.Footer>
        </Modal>
    </>);
}

export default DeleteCardFromFav;