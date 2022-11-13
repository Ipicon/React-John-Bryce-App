import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Sale from "../Sale/Sale";
import Search from "../Search/Search";
import Survey from "../Survey/Survey";
import Tune from "../Tune/Tune";
import "./Home.css";

function Home(): JSX.Element {

    function handleSurvey(result: string) {
        alert("Survey result: " + result);
    }

    return (
        <div className="Home">

            {/* Interpolation, Conditional Rendering: */}
            <Discount />

            {/* Display List: */}
            <Desserts />

            {/* Props: */}
            <Sale category="Beverages" percent={10} />
            <Sale category="Candies" percent={15} />

            {/* Child to parent flow: */}
            <Survey surveyQuestion="How is our service? " handleSurvey={handleSurvey} />

            {/* State: */}
            <BestSeller />

            {/* useRef */}
            <Tune />

            {/* Two-Way Binding: */}
            <Search />

            <Clock />

        </div>
    );
}

export default Home;
