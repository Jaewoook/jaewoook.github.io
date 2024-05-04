import type { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { SEO } from "@/components/blog/SEO";
import * as Heading from "@/components/typography/Heading";
import { P, Span } from "@/components/typography/Paragraph";

const About = () => {
  return (
    <article className="max-w-3xl mx-auto flex flex-col items-center pt-6 max-sm:pt-4 px-3 max-sm:px-4">
      <Heading.H1 className="self-start">Introduction</Heading.H1>
      <P className="self-start">
        <Span className="font-bold">point of view.</Span>에서는 소프트웨어 개발에 대한 개인적인 경험과 생각을 기록하고, 기술적인 인사이트를 공유하고자 합니다. 이 블로그의 글이 여러분에게 조금이나마 도움이 되기를 바랍니다. 글의 썸네일은 보통 직접 찍은 사진 중에 마음에 드는 것을 골라서 사용하고 있습니다.
      </P>
      <Heading.H2 className="self-start">About Author</Heading.H2>
      <div className="mt-4">
        <StaticImage className="float-start rounded-full w-36 h-36 mr-6 max-sm:w-24 max-sm:h-24 max-sm:mr-4 max-sm:mb-4" alt="profile image" src="https://github.com/Jaewoook.png" />
        <P className="flex-1 m-0">
          사진 촬영과 사람들과의 기술 대화를 즐기는 소프트웨어 엔지니어입니다. 대학에서 소프트웨어를 전공했으며, 2년가량 스타트업에서 근무한 경험이 있습니다. 사람들의 삶을 여유롭게 하고, 행복을 줄 수 있는 따뜻한 소프트웨어를 만들고 싶다는 목표를 가지고 취미이자 직업으로 개발을 즐기고 있습니다.
        </P>
      </div>
    </article>
  );
};

export default About;

export const Head: HeadFC = ({ location }) => {
  return <SEO path={location.pathname} title="About point of view." />
};
