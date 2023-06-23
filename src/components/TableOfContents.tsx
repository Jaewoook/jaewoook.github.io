/**
 * Internal modules
 */
import * as List from "./typography/List";
import * as Link from "./typography/Link";

/**
 * Type modules
 */
import type { SpaceProps } from "styled-system";

type ContentItem = {
  url: string;
  title: string;
  items?: ContentItem[];
};

interface TableOfContentsProps extends SpaceProps {
  items: ContentItem[];
}

export const TableOfContents = (props: TableOfContentsProps) => {
  const { items, ...styles } = props;

  return (
    <List.UL {...styles}>
      {items.map((item) => (
        <li key={item.url}>
          <Link.Anchor href={item.url}>{item.title}</Link.Anchor>
          {item.items ? (
            <List.UL>
              {item.items.map((i) => (
                <li key={i.url}>
                  <Link.Anchor href={i.url}>{i.title}</Link.Anchor>
                </li>
              ))}
            </List.UL>
          ) : null}
        </li>
      ))}
    </List.UL>
  );
};
