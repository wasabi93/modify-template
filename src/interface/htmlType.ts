export enum HtmlTags {
  div = "div",
  p = "p",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  a = "a",
  section = "section",
  article = "article",
  img = "img",
}

export interface ElementData {
  id: string;
  Tag: keyof JSX.IntrinsicElements;
  content?: string;
  children?: ElementData[];
  style: React.CSSProperties;
  label?: string;
  src?: string;
  alt?: string;
}
