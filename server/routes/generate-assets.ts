import { graphql } from "graphql";
import process from "process";
import { renderToString } from "react-dom/server";
import GenerateBadges from "./generate-assets/badges";
import GenerateAssets from "./generate-assets/index";
import GeneratePresentation from "./generate-assets/presentation";
import GenerateSchedule from "./generate-assets/schedule";
import GenerateText from "./generate-assets/text";

function createConnect(schema) {
  const connect = (query, context) =>
    graphql(schema, query, null, null, context);

  return connect;
}

function routeAssetGenerator(router, schema) {
  const connect = createConnect(schema);

  router.get("/generate-assets", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GenerateAssets())));
  });

  router.get("/generate-assets/badges", async (req, res) => {
    res
      .status(200)
      .send(renderMarkup(renderToString(await GenerateBadges(connect))));
  });

  router.get("/generate-assets/schedule", async (req, res) => {
    res
      .status(200)
      .send(renderMarkup(renderToString(await GenerateSchedule(connect))));
  });

  router.get("/generate-assets/presentation", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GeneratePresentation())));
  });

  router.get("/generate-assets/text", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(GenerateText())));
  });
}

function renderMarkup(html) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>Asset generator</title>
      <meta charset="utf-8" />
      ${reloadPage()}
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
  </html>`;
}

function reloadPage() {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  return `
    <script>
      let previousVersion;

      setInterval(() => {
        fetch('/ping').then(response => response.json())
        .then(({ serverVersion }) => {
          if (previousVersion) {
            if (previousVersion !== serverVersion) {
              location.reload();
            }
          }
          else {
            previousVersion = serverVersion;
          }
        }).catch(err => {
          // It's fine.
        })
      }, 500);
    </script>
  `;
}

export default routeAssetGenerator;
