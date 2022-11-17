import "./Survey.css";

interface SurveyProps {
    handleSurvey: (str: string) => void;
    message: string;
}

function Survey(props: SurveyProps): JSX.Element {
    const handleClick = (surveyStatus: string): void => {
        props.handleSurvey(surveyStatus);

    }

    return (
        <div className="Survey Box">
            <span> {props.message} </span>
            <button onClick={() => handleClick("Poor")}>Poor</button>
            <button onClick={() => handleClick("Medium")}>Medium</button>
            <button onClick={() => handleClick("Good")}>Good</button>
        </div>
    );
}

export default Survey;
