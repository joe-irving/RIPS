import { defineConfig } from "tinacms";
import { blog_postFields } from "./templates";
import { buttonFields } from "./templates";
import { config_fileFields } from "./templates";
import { half_image_blockFields } from "./templates";
import { half_map_blockFields } from "./templates";
import { home_pageFields } from "./templates";
import { latest_blockFields } from "./templates";
import { map_blockFields } from "./templates";
import { pageFields } from "./templates";
import { profile_templateFields } from "./templates";
import { rebelFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

console.log(`Using branch ${branch}`)

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || '', // Get this from tina.io
  token: process.env.TINA_TOKEN || '', // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home Page",
        name: "home_page",
        path: "/",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "image",
            name: "top_image",
            label: "Top Image",
          },
          {
            type: "object",
            name: "jump",
            label: '"Jump to" button',
            fields: [
              {
                type: "string",
                name: "text",
                label: "text",
              },
              {
                type: "string",
                name: "target",
                label: "target",
              },
            ],
          },
          {
            type: "string",
            name: "top_quote",
            label: "Top Quote",
          },
          {
            type: "object",
            list: true,
            templateKey: "template",
            label: "Blocks",
            name: "blocks",
            templates: [
              {
                fields: half_image_blockFields(),
                label: "Half Image Block",
                name: "half_image_block",
                nameOverride: "half-image-block",
              },
              {
                fields: latest_blockFields(),
                label: "Latest Block",
                name: "latest_block",
                nameOverride: "latest-block",
              },
              {
                fields: map_blockFields(),
                label: "Map Block",
                name: "map_block",
                nameOverride: "map-block",
              },
              {
                fields: half_map_blockFields(),
                label: "Half Map Block",
                name: "half_map_block",
                nameOverride: "half-map-block",
              },
            ],
          },
          {
            type: "string",
            name: "end_quote",
            label: "End Quote",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Social Media Preview Image",
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: [
              {
                label: "Home",
                value: "home"
              }
            ],
            required: true
          }
        ],
      },
      {
        format: "yml",
        label: "Profile Template",
        name: "profile_template",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "profile-template",
        },
        fields: [
          {
            type: "string",
            name: "video",
            label: "Video",
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Bio",
          },
          {
            type: "rich-text",
            name: "donate",
            label: "Donate",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Main Template",
          },
        ],
      },
      {
        format: "md",
        label: "Prison template",
        name: "prison_template",
        path: "_templates",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "prison",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "yml",
        label: "Resources",
        name: "resources",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "resources",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "Site Configuration",
        name: "site_configuration",
        path: "/",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_config",
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            description:
              "The site title",
          },
          {
            name: "tagline",
            label: "Tag Line",
            type: "string",
            description:
              "The site tag line.",
          },
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "/",
        match: {
          exclude: "index",
          include: "*"
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true
          },
          {
            name: "image",
            label: "Share Image",
            type: "image",
          },
          {
            name: "top_image",
            label: "Top Image",
            type: "image",
          },
          {
            name: "body",
            label: "Body",
            type: "rich-text",
            isBody: true
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: [
              {
                label: "Page",
                value: "page"
              }
            ],
            required: true
          }
        ]
      }
    ],
  },
});
