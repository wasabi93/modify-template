import { NextPageWithLayout } from "./_app";

import styles from "@/styles/page.module.css";
import { TemplateItem } from "@/components";
import { TemplateName } from "@/interface";

const listTemplates = [
  TemplateName.DefaultLayout,
  TemplateName.Template1,
  TemplateName.Template2,
];

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className={styles.main}>
      <h1>Choose a template to start</h1>
      <div className={styles.listItemCtn}>
        {listTemplates.map((template) => (
          <TemplateItem key={template} templateName={template} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
