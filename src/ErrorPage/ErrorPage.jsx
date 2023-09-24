import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    // console.log(error);
    return (
        <div className='flex text-center justify-center items-center min-h-screen'>
            <p>{error.data}</p>
        </div>
    );
};

export default ErrorPage;