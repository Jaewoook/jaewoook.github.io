import { useEffect, useMemo, useRef } from "react";

import { usePreferColorScheme } from "../../hooks/usePreferColorScheme";

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
  const { repo, issueTerm = "pathname", label = "💬 comment" } = props;
  const { colorScheme } = usePreferColorScheme();
  const commentRef = useRef<HTMLDivElement>(null);
  const attrs = useMemo(() => ({
    src: "https://utteranc.es/client.js",
    crossorigin: "anonymous",
    async: "true",
    "issue-term": issueTerm,
    repo,
    label,
    theme: colorScheme === "light" ? "github-light" : "github-dark",
  }), [issueTerm, label, repo, colorScheme]);

  useEffect(() => {
    const commentScriptEl = document.createElement("script");
    Object.entries(attrs).forEach(([key, value]) => {
      commentScriptEl.setAttribute(key, value);
    });
    for (let idx = 0; idx < (commentRef.current?.children.length ?? 0); idx++) {
      commentRef.current?.removeChild(commentRef.current.children[idx]);
    }
    commentRef.current?.appendChild(commentScriptEl);
  }, [attrs]);

  return <div ref={commentRef} />;
};
