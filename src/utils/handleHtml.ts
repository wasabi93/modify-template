function handleHtml(content: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exported HTML</title>
        <style>
        :root {
          --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
            "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
            "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        </style>
    </head>
    <body>
        ${content}
    </body>
    </html>
    `;
}

export function exportToHTML(content: string) {
  const htmlContent = handleHtml(content);

  const blob = new Blob([htmlContent], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "exported.html";
  link.click();
}
