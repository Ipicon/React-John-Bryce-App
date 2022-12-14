import usePageTitle from "../../../Utils/usePageTitle";
import Clock from "../Clock/Clock";
import "./About.css";

function About(): JSX.Element {

    usePageTitle("About");

    return (
        <div className="About">
            <Clock format="12h" />
        </div>
    );
}

export default About;
