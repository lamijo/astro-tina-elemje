import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const clientId = process.env.TINA_CLIENTID || null;
const token = process.env.TINA_TOKEN || null;

export default defineConfig({
  branch,
  clientId,
  token,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          { type: "datetime", name: "date", label: "Date" },
          { type: "image", name: "image", label: "Image" },
          { type: "string", name: "tags", label: "Tags", list: true },
        ],
      },
    ],
  },
});
