import "./About.css";
import usePageTitle from "../../../Utils/usePageTitle";
import IDontBelieveImUsingCC from "../IDontBelieveImUsingCC/IDontBelieveImUsingCC";

function About(): JSX.Element {
    usePageTitle("About Page");
    return (
        <div className="About">
			<IDontBelieveImUsingCC format="24h" />
        </div>
    );
}

export default About;
