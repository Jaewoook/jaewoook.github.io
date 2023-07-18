import { useEffect, useRef } from "react";

interface CommentProps {
  repo: string;
  issueTerm?: "pathname" | "url" | "title" | "og:title";
  issueNumber?: string;
  label?: string;
  theme?:
    | "github-light"
    | "github-dark"
    | "preferred-color-scheme"
    | "github-dark-orange"
    | "icy-dark"
    | "dark-blue"
    | "photon-dark"
    | "boxy-light"
    | "gruvbox-dark";
}

export const Comment = (props: CommentProps) => {
  const { repo, issueTerm = "pathname", label = "💬 comment", theme = "preferred-color-scheme" } = props;
  const commentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const commentScriptEl = document.createElement("script");
    const attrs = {
      src: "https://utteranc.es/client.js",
      crossorigin: "anonymous",
      async: "true",
      "issue-term": issueTerm,
      repo,
      label,
      theme,
    };
    Object.entries(attrs).forEach(([key, value]) => {
      commentScriptEl.setAttribute(key, value);
    });
    for (let idx = 0; idx < (commentRef.current?.children.length ?? 0); idx++) {
      commentRef.current?.removeChild(commentRef.current.children[idx]);
    }
    commentRef.current?.appendChild(commentScriptEl);
  }, [issueTerm, label, repo, theme]);

  return <div ref={commentRef} />;
};
