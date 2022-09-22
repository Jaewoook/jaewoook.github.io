/**
 * External modules
 */
import React from "react";

/**
* Internal modules
*/
import { Button } from "../components/Button";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const ErrorPage = () => {
    const queryResult = useSiteMetadata()

    return (
        <div className="mt-32 mb-10 flex flex-col items-center justify-center">
            <h1 className="text-2xl">이런, 문제가 발생했어요!</h1>
            <Button className="mt-5" onClick={() => window.location.href = queryResult.site.siteMetadata.siteUrl}>메인으로 가기</Button>
        </div>
    );
};

export default ErrorPage;
