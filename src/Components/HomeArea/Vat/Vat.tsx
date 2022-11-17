import "./Vat.css";
import {ChangeEvent, useState} from "react";
import monetaryService from "../../../Services/MonetaryService";

interface VatProps {
	percent: number
}

function Vat(props: VatProps): JSX.Element {
    const [price, setPrice] = useState<number>(0);
    const [vat, setVat] = useState<number>(0)

    const handlePrice = (args: ChangeEvent<HTMLInputElement>): void => {
        const price = +args.target.value;
        setPrice(price);
        const vat = monetaryService.getVat(price, props.percent);
        setVat(vat);
    }

    const handleClear = () => {
        setPrice(0);
        setVat(0);
    }

    return (
        <div className="Vat Box" data-testid="main-div">
			<h4> Vat Calculator</h4>
            <label title="Calculating Vat">
                Price:
                <input type="number" placeholder="enter price" value={price || ""} onChange={handlePrice}/>
            </label>

            <p role="result">{price}$ X {props.percent}% = ${vat}</p>

            <button onClick={handleClear}>Clear</button>
            </div>
    );
}

export default Vat;
