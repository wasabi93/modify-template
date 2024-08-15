import { HtmlTags, ElementData, TemplateName } from "@/interface";
import { v4 as uuidv4 } from "uuid";

export const templateDetails: Record<TemplateName, ElementData[]> = {
  [TemplateName.DefaultLayout]: [
    {
      id: uuidv4(),
      Tag: HtmlTags.div,
      label: "container",
      style: {
        backgroundColor: "#ffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "90vh",
      },
      children: [
        {
          id: uuidv4(),
          Tag: HtmlTags.h1,
          label: "heading",
          content: "Lorem ipsum dolor sit amet",
          style: {
            color: "#000",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
            width: "100%",
          },
        },
        {
          id: uuidv4(),
          Tag: HtmlTags.p,
          label: "content",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          style: {
            color: "#000",
            fontSize: "20px",
            fontWeight: "normal",
            textAlign: "center",
            marginBottom: "10px",
            width: "100%",
          },
        },
        {
          id: uuidv4(),
          Tag: HtmlTags.div,
          label: "body",
          style: {
            color: "#000",
            fontSize: "20px",
            fontWeight: "normal",
            textAlign: "center",
            marginBottom: "10px",
            width: "100%",
          },
          children: [
            {
              id: uuidv4(),
              Tag: HtmlTags.p,
              label: "content",
              content: "This is a sample content 2",
              style: {
                color: "#000",
                fontSize: "20px",
                fontWeight: "normal",
                textAlign: "center",
                marginBottom: "10px",
                width: "100%",
              },
            },
            {
              id: uuidv4(),
              Tag: HtmlTags.p,
              label: "content",
              content: "This is a sample content 3",
              style: {
                color: "#000",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "10px",
                width: "100%",
              },
            },
          ],
        },
      ],
    },
  ],
  [TemplateName.Template1]: [
    {
      id: uuidv4(),
      Tag: HtmlTags.div,
      label: "container",
      style: {
        backgroundColor: "#ffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "90vh",
      },
      children: [
        {
          id: uuidv4(),
          Tag: HtmlTags.img,
          label: "image",
          style: {
            width: 200,
            height: 200,
          },
          src: "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=1280&h=720&crop=1",
          alt: "placeholder",
        },
        {
          id: uuidv4(),
          Tag: HtmlTags.h1,
          label: "heading",
          content: "Lorem ipsum dolor sit amet",
          style: {
            color: "#000",
            fontSize: "30px",
            fontWeight: "normal",
            textAlign: "center",
            marginBottom: "10px",
            width: "100%",
          },
        },
        {
          id: uuidv4(),
          Tag: HtmlTags.p,
          label: "content",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          style: {
            color: "#000",
            fontSize: "20px",
            fontWeight: "normal",
            textAlign: "center",
            marginBottom: "10px",
            width: "100%",
          },
        },
        {
          id: uuidv4(),
          Tag: HtmlTags.div,
          label: "body",
          style: {
            color: "#000",
            fontSize: "20px",
          },
          children: [
            {
              id: uuidv4(),
              Tag: HtmlTags.p,
              label: "content",
              content: "This is a sample content 2",
              style: {
                color: "#000",
                fontSize: "20px",
                fontWeight: "normal",
                textAlign: "center",
                marginBottom: "10px",
                width: "100%",
              },
            },
            {
              id: uuidv4(),
              Tag: HtmlTags.p,
              label: "content",
              content: "This is a sample content",
              style: {
                color: "#000",
                fontSize: "20px",
                fontWeight: "normal",
                textAlign: "center",
                marginBottom: "10px",
                width: "100%",
              },
            },
          ],
        },
      ],
    },
  ],
  [TemplateName.Template2]: [
    {
      id: uuidv4(),
      Tag: HtmlTags.div,
      label: "container",
      style: {
        backgroundColor: "#ffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "90vh",
      },
      children: [
        {
          id: uuidv4(),
          Tag: HtmlTags.h1,
          label: "heading",
          content: "Lorem ipsum dolor sit amet",
          style: {
            color: "#000",
            fontSize: "30px",
          },
        },
        {
          id: uuidv4(),
          Tag: HtmlTags.p,
          label: "content",
          content: "This is a sample content",
          style: {
            color: "#000",
            fontSize: "20px",
            fontWeight: "normal",
            textAlign: "center",
            marginBottom: "10px",
            width: "100%",
          },
        },
        {
          id: uuidv4(),
          Tag: HtmlTags.div,
          label: "body",
          style: {
            color: "#000",
            fontSize: "20px",
          },
          children: [
            {
              id: uuidv4(),
              Tag: HtmlTags.p,
              label: "content",
              content: "This is a sample content 555",
              style: {
                color: "#000",
                fontSize: "20px",
                fontWeight: "normal",
                textAlign: "center",
                marginBottom: "10px",
                width: "100%",
              },
            },
            {
              id: uuidv4(),
              Tag: HtmlTags.p,
              label: "content",
              content: "This is a sample content 444",
              style: {
                color: "#000",
                fontSize: "20px",
                fontWeight: "normal",
                textAlign: "center",
                marginBottom: "10px",
                width: "100%",
              },
            },
          ],
        },
      ],
    },
  ],
};
