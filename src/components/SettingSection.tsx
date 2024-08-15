import { HtmlTags, ElementData } from "@/interface";
import { HexColorPicker } from "react-colorful";

import styles from "@/styles/components.module.css";

interface Props {
  selectedTag: ElementData;
  handleStyleChange(newStyles: React.CSSProperties): void;
  handleChangeContent(newContent: string): void;
}

export function SettingSection({
  selectedTag,
  handleStyleChange,
  handleChangeContent,
}: Props) {
  const { label, style, content, Tag } = selectedTag;

  return (
    <div className={styles.settingCtn}>
      <h1 className={styles.titleSetting}>{label} Setting</h1>
      <div className={styles.settingBd}>
        {style.backgroundColor && (
          <div className={styles.settingItem}>
            <label>Background color: {style.backgroundColor}</label>
            <HexColorPicker
              color={style.backgroundColor}
              onChange={(newColor: string) =>
                handleStyleChange({ backgroundColor: newColor })
              }
              style={{ height: "5rem", width: "10rem" }}
            />
          </div>
        )}
        {style.color && (
          <div className={styles.settingItem}>
            <label>color: {style.color}</label>
            <HexColorPicker
              color={style.color}
              onChange={(newColor: string) =>
                handleStyleChange({ color: newColor })
              }
              style={{ height: "5rem", width: "10rem" }}
            />
          </div>
        )}
        {style.width && (
          <div className={styles.settingItem}>
            <label>Width: {style.width}</label>
            <input
              type="range"
              min={0}
              max={Tag === HtmlTags.img ? 1000 : 100}
              value={parseInt(style.width as string)}
              onChange={(e) =>
                handleStyleChange({
                  width:
                    Tag === HtmlTags.img
                      ? Number(e.target.value)
                      : `${e.target.value}%`,
                })
              }
            />
          </div>
        )}
        {style.height && (
          <div className={styles.settingItem}>
            <label>height: {style.height}</label>
            <input
              type="range"
              min={0}
              max={Tag === HtmlTags.img ? 1000 : 100}
              value={parseInt(style.height as string)}
              onChange={(e) =>
                handleStyleChange({
                  height:
                    Tag === HtmlTags.img
                      ? Number(e.target.value)
                      : `${e.target.value}%`,
                })
              }
            />
          </div>
        )}
        {style.fontSize && (
          <div className={styles.settingItem}>
            <label>Font size: {style.fontSize}</label>
            <input
              type="range"
              min={0}
              max={100}
              value={parseInt(style.fontSize as string)}
              onChange={(e) =>
                handleStyleChange({ fontSize: `${e.target.value}px` })
              }
            />
          </div>
        )}
        {style.fontWeight && (
          <div className={styles.settingItem}>
            <label>Font weight</label>
            <select
              value={style.fontWeight}
              onChange={(e) =>
                handleStyleChange({ fontWeight: e.target.value as string })
              }
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
            </select>
          </div>
        )}
        {style.textAlign && (
          <div className={styles.settingItem}>
            <label>Text align</label>
            <select
              value={style.textAlign}
              onChange={(e) =>
                handleStyleChange({ textAlign: e.target.value as any })
              }
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
        )}
        {content && (
          <div className={styles.settingItem}>
            <label>Content</label>
            <textarea
              value={content}
              className={styles.inputCtn}
              onChange={(e) => handleChangeContent(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
