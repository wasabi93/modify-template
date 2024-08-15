import { ElementData } from "@/interface";

const stringifyStyles = (styles: React.CSSProperties): string => {
  return Object.entries(styles)
    .map(
      ([key, value]) =>
        `${key.replace(
          /[A-Z]/g,
          (match) => `-${match.toLowerCase()}`
        )}: ${value};`
    )
    .join(" ");
};

export function generateHTML(elementData: ElementData[]): string {
  let html = "";

  elementData.forEach((element) => {
    const { Tag, content, style, children, src, alt } = element;

    if (Tag === "img") {
      html += `<${Tag} src=${src} alt=${alt ?? ""} height=${Number(
        style.height
      )} width=${Number(style.width)} />`;
    } else {
      // Open the Tag and add it to the HTML
      html += `<${Tag} style="${stringifyStyles(style)}">`;

      if (content) {
        html += content;
      }

      if (children) {
        html += generateHTML(children);
      }

      html += `</${Tag}>`;
    }
  });

  return html;
}
