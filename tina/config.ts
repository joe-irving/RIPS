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

export default defineConfig({
  branch,
  clientId: "c1eaf89a-3683-4fec-8a80-f96bb4c98019", // Get this from tina.io
  token: "b934307ffd0093b1b98e0a9d01469be59ad4e14a", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "uploads",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "uploads",
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
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
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
            type: "string",
            name: "bio",
            label: "Bio",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "donate",
            label: "Donate",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "body",
            label: "Main Template",
            ui: {
              component: "textarea",
            },
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
        path: "",
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
        ],
      },
      // {
      //   format: "yml",
      //   label: "Donations",
      //   name: "donations",
      //   path: "_data",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "donations",
      //   },
      //   fields: [
      //     {
      //       name: "dummy",
      //       label: "Dummy field",
      //       type: "string",
      //       description:
      //         "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
      //     },
      //   ],
      // },
    ],
  },
});
