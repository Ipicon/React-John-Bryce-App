import {useEffect} from "react";

const usePageTitle = (title: string): void => {
    useEffect(() => {
        window.document.title = title;
    }, [title])
}

export default usePageTitle;