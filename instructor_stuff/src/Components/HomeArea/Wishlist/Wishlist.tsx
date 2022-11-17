import { ChangeEvent, useState } from "react";
import "./Wishlist.css";

function Wishlist(): JSX.Element {

    const [item, setItem] = useState<string>("");
    const [wishlist, setWishlist] = useState<string[]>([]);

    function handleItem(args: ChangeEvent<HTMLInputElement>): void {
        setItem(args.target.value);
    }

    function handleAdd(): void {
        const duplicate = [...wishlist, item]; // Duplicate the array + add item.
        setWishlist(duplicate);
        setItem("");
    }

    return (
        <div className="Wishlist Box">
            <label>Black Friday Wishlist: </label>
            <input type="text" value={item} onChange={handleItem} />
            <button onClick={handleAdd}>Add</button>
            {wishlist.map((oneItem, index) => <span key={index}>{oneItem} | </span>)}
        </div>
    );
}

export default Wishlist;
