import { useState } from "react";
import Popup from "../Popup";
import { getCategory } from "../../Helper";
import { format } from "date-fns";

const Card = ({ title, image, item }) => {
    const [openSidenav, setOpenSideNav] = useState(false)

    const onClickHandler = () => {
        setOpenSideNav(!openSidenav)
    }
  
    return (
        <div className="cards" onClick={onClickHandler}>
            <div className="img-size">
                <img src={image} alt="no-img" className="img-card" /></div>
            <p>{title}</p>
            <p>{getCategory(item?.categoryId)}</p>
            <Popup show={openSidenav} header='Details' handleClose={onClickHandler}>
                <div >
                    <img src={image} alt="no-img" />
                    <div className="details">
                        <span className="data-head">Name: <span className="data-val">{item?.collectionName}</span> </span>
                        <span className="data-head">Created At: <span className="data-val">{format(new Date(item?.createdAt), 'yyyy-MM-dd')}</span> </span>
                        <span className="data-head">Category: <span className="data-val">{getCategory(item?.categoryId)}</span> </span>
                    </div>
                </div>
            </Popup>
        </div>

    );
};

export default Card