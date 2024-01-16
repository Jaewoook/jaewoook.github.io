/**
 * External modules
 */
import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button`
  ${tw`
    px-3 py-1.5
    border
    rounded
    border-neutral-900 dark:border-neutral-50
    bg-neutral-50 dark:bg-neutral-900
    hover:bg-neutral-900 dark:hover:bg-neutral-50
    text-zinc-900 dark:text-zinc-50
    hover:text-zinc-50 dark:hover:text-zinc-900
    transition-colors
  `}
`;
