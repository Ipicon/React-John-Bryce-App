import "./Spinner.css";

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={process.env.REACT_APP_PUBLIC_URL + "loading.gif"} alt="Loading" />
        </div>
    );
}

export default Spinner;
