/**
 * External modules
 */
import { TbPray } from "react-icons/tb";

/**
 * Internal modules
 */
import { Button } from "@/components/common";
import { SEO } from "@/components/blog";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";

/**
 * Type modules
 */
import { HeadFC } from "gatsby";

const ErrorPage = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <div className="mt-32 mb-10 flex flex-col items-center justify-center">
      <TbPray className="text-zinc-900 dark:text-zinc-50" size={96} />
      <h1 className="mt-4 text-2xl text-zinc-900 dark:text-zinc-50">이런, 문제가 발생했어요!</h1>
      <Button className="mt-10" onClick={() => (window.location.href = siteMetadata!.siteUrl!)}>
        메인으로 가기
      </Button>
    </div>
  );
};

export default ErrorPage;

export const Head: HeadFC = ({ location }) => {
  return <SEO title="Internal error" path={location.pathname} />
};
