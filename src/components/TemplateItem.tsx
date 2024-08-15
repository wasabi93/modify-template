import Link from "next/link";
import styles from "@/styles/components.module.css";
import { TemplateName } from "@/interface";

export function TemplateItem({ templateName }: { templateName: TemplateName }) {
  return (
    <Link href={`/template/${templateName}`} className={styles.itemCtn}>
      <div className={styles.imageCtn} />
      <p className={styles.textTitle}>Template {templateName}</p>
    </Link>
  );
}
