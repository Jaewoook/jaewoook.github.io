/**
 * External modules
 */
import { RiFileWarningLine } from "react-icons/ri";

/**
 * Internal modules
 */
import { Button } from "../components/Button";
import { SEO } from "../components/SEO";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

/**
 * Type modules
 */
import { HeadFC } from "gatsby";

const NotFoundPage = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <div className="mt-32 mb-10 flex flex-col items-center justify-center">
      <RiFileWarningLine size={128} />
      <h1 className="mt-8 text-2xl">페이지를 찾을 수 없어요.</h1>
      <Button className="mt-5" onClick={() => (window.location.href = siteMetadata!.siteUrl!)}>
        메인으로 가기
      </Button>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = ({ location }) => {
  return <SEO title="Page not found" path={location.pathname} />;
};
