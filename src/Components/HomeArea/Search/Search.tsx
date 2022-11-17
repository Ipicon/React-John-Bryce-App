import "./Search.css";
import {ChangeEvent, useState} from "react";
import notifyService from "../../../Services/NotifyService";

function Search(): JSX.Element {
    const [item, setItem] = useState<string>("");

    const handleItem = (args: ChangeEvent<HTMLInputElement>):void => {
        setItem(args.target.value);
    }

    const searchWebsite = () => {
        notifyService.success(`Searching for ${item}`);
        setItem("");
    }

    return (
        <div className="Search Box">
			<label>Search: </label>
            <input type="search" value={item} onChange={handleItem}/>
            <button onClick={searchWebsite}>🔍</button>
        </div>
    );
}

export default Search;
