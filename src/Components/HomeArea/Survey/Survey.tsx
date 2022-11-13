import "./Survey.css";

interface SurveyProps {
    surveyQuestion: string;
    handleSurvey: (str: string) => void;
}

function Survey(props: SurveyProps): JSX.Element {

    function sendResult(result: string): void {
        props.handleSurvey(result);
    }

    return (
        <div className="Survey Box">
            <span> {props.surveyQuestion} </span>
            <button onClick={() => sendResult("Poor")}>Poor</button>
            <button onClick={() => sendResult("Medium")}>Medium</button>
            <button onClick={() => sendResult("Good")}>Good</button>
        </div>
    );
}

export default Survey;
