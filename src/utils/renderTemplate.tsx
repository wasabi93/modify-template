import { ElementData } from "@/interface";
import Image from "next/image";

export function renderTemplate(
  tagsArray: ElementData[],
  onSelect: (
    tagDetails: ElementData,
    e: React.MouseEvent<HTMLDivElement>
  ) => void
) {
  return tagsArray.map((details) => {
    const { Tag, content, style, id, children, src, alt } = details;

    if (Tag === "img" && src) {
      return (
        <Image
          key={id}
          src={src}
          alt={alt ?? ""}
          height={Number(style.height)}
          width={Number(style.width)}
          onClick={(e) =>
            onSelect(details, e as React.MouseEvent<HTMLDivElement>)
          }
        />
      );
    }

    return (
      <Tag
        key={id}
        style={style}
        onClick={(e) =>
          onSelect(details, e as React.MouseEvent<HTMLDivElement>)
        }
      >
        {content}
        {children && renderTemplate(children, onSelect)}
      </Tag>
    );
  });
}

// Function to recursively update the style of an element
export const updateElementStyle = (
  elements: ElementData[],
  id: string,
  newStyle: React.CSSProperties,
  selectedTagId: string
): ElementData[] => {
  return elements.map((element) => {
    if (element.id === selectedTagId) {
      return { ...element, style: { ...element.style, ...newStyle } };
    }
    if (element.children) {
      return {
        ...element,
        children: updateElementStyle(
          element.children,
          id,
          newStyle,
          selectedTagId
        ),
      };
    }
    return element;
  });
};

// Function to recursively update the content of an element
export const updateContentElementData = (
  elements: ElementData[],
  id: string,
  newContent: string
): ElementData[] => {
  return elements.map((element) => {
    if (element.id === id) {
      return { ...element, content: newContent };
    }
    if (element.children) {
      return {
        ...element,
        children: updateContentElementData(element.children, id, newContent),
      };
    }
    return element;
  });
};
