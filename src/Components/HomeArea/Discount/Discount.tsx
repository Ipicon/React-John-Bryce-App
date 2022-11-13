import "./Discount.css";

function Discount(): JSX.Element {
    const discount: number = 10;
    return (
        <div className="Discount Box">
            {discount > 0 && <span>Only now - {discount}% discount on all products!</span>}
            {discount === 0 && <span>Today no discount :-(</span>}

        </div>
    );
}

export default Discount;
