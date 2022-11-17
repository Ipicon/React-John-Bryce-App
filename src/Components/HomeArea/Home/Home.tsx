import "./Home.css";
import Discount from "../Discount/Discount";
import Desserts from "../Desserts/Desserts";
import Sale from "../Sale/Sale";
import Survey from "../Survey/Survey";
import BestSeller from "../BestSeller/BestSeller";
import Tune from "../Tune/Tune";
import Search from "../Search/Search";
import Clock from "../Clock/Clock";
import WishList from "../WishList/WishList";
import notifyService from "../../../Services/NotifyService";
import Facebook from "../Facebook/Facebook";
import Orders from "../Orders/Orders";
import usePageTitle from "../../../Utils/usePageTitle";
import Vat from "../Vat/Vat";

function Home(): JSX.Element {
    usePageTitle("Home Page");

    const handleSurvey = (surveyReport: string): void => {
        notifyService.success(`Survey result: ${surveyReport}`)
    }

    return (
        <div className="Home">
            <Discount/>
            <Desserts/>
            <Sale category="Beverages" percent={10}/>
            <Sale category="Candies" percent={15}/>
            <Survey handleSurvey={handleSurvey} message="Are you enjoying the message?"/>
            <BestSeller/>
            <Tune/>
            <Search/>
            <Clock/>
            <WishList/>
            <Facebook />
            <Orders number={1}/>
            <Vat percent={17} />
        </div>
    );
}

export default Home;
