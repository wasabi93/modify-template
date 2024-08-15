import { Suspense, useState } from "react";

import {
  exportToHTML,
  generateHTML,
  renderTemplate,
  updateContentElementData,
  updateElementStyle,
} from "@/utils";
import { NextPageWithLayout } from "../_app";
import styles from "@/styles/template.module.css";
import { ElementData, TemplateName } from "@/interface";
import { useParams } from "next/navigation";
import { templateDetails } from "@/assets/template";
import { SettingSection } from "@/components";

const TemplatePage: NextPageWithLayout = () => {
  const params = useParams();
  const templateName =
    (params?.slug as TemplateName) ?? TemplateName.DefaultLayout;

  const [selectedTag, setSelectedTag] = useState<ElementData>(
    templateDetails[templateName]?.[0]
  );

  const [template, setTemplate] = useState<ElementData[]>(
    templateDetails[templateName]
  );

  const onSelectTag = (
    tagDetails: ElementData,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();

    setSelectedTag(tagDetails);
  };

  const selectedTagId = selectedTag.id;

  const handleChangeContent = (newContent: string) => {
    const updatedTemplate = updateContentElementData(
      template,
      selectedTagId,
      newContent
    );

    setSelectedTag({
      ...selectedTag,
      content: newContent,
    });

    setTemplate(updatedTemplate);
  };

  const handleStyleChange = (newStyles: React.CSSProperties) => {
    const updatedTemplate = updateElementStyle(
      template,
      selectedTagId,
      newStyles,
      selectedTagId
    );

    setSelectedTag({
      ...selectedTag,
      style: {
        ...selectedTag.style,
        ...newStyles,
      },
    });

    setTemplate(updatedTemplate);
  };

  const handleExport = () => {
    exportToHTML(generateHTML(template));
  };

  return (
    <Suspense>
      <div className={styles.main}>
        <div className={styles.headerCtn}>
          <div className={styles.buttonCtn} onClick={handleExport}>
            Export
          </div>
        </div>
        <div className={styles.mainCtn}>
          <section className={styles.leftSection}>
            {renderTemplate(template, onSelectTag)}
          </section>
          <section className={styles.rightSection}>
            <SettingSection
              selectedTag={selectedTag}
              handleStyleChange={handleStyleChange}
              handleChangeContent={handleChangeContent}
            />
          </section>
        </div>
      </div>
    </Suspense>
  );
};

export default TemplatePage;
