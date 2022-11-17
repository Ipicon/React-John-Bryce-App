import "./WishList.css";
import {useState, ChangeEvent} from "react";

function WishList(): JSX.Element {
    const [currentItem, setCurrentItem] = useState("");
    const [wishList, setWishList] = useState<string[]>([]);

    const handleInput = (args: ChangeEvent<HTMLInputElement>) => {
        setCurrentItem(args.target.value);
    }

    const addItem = () => {
        setWishList([...wishList, currentItem]);
        setCurrentItem("");
    }

    return (
        <div className="WishList Box">
            <span>Black Friday Wishlist:</span>
            <input type="text" value={currentItem} onChange={handleInput}/>
            <button onClick={addItem}>Add</button>
            {wishList.map((e, i) => <span key={i}> {e} {i !== wishList.length - 1 && <span>|</span>}</span>)}
        </div>
    );
}

export default WishList;
