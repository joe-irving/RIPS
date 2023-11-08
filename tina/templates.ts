import type { TinaField } from "tinacms";
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
    },
    {
      type: "string",
      name: "authors",
      label: "Authors",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
export function buttonFields() {
  return [
    {
      type: "string",
      name: "label",
      label: "Label",
    },
    {
      type: "string",
      name: "link",
      label: "Link",
    },
  ] as TinaField[];
}
export function config_fileFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "tagline",
      label: "tagline",
    },
    {
      type: "string",
      name: "email",
      label: "email",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "url",
      label: "url",
    },
    {
      type: "string",
      name: "logo",
      label: "logo",
    },
    {
      type: "string",
      name: "logo_square",
      label: "logo_square",
    },
    {
      type: "string",
      name: "logo_light",
      label: "logo_light",
    },
    {
      type: "string",
      name: "facebook",
      label: "facebook",
    },
    {
      type: "string",
      name: "twitter",
      label: "twitter",
    },
    {
      type: "string",
      name: "instagram",
      label: "instagram",
    },
    {
      type: "string",
      name: "copyright_notice",
      label: "copyright_notice",
    },
    {
      type: "string",
      name: "donate",
      label: "donate",
    },
    {
      type: "string",
      name: "join_us",
      label: "join_us",
    },
    {
      type: "string",
      name: "brand_color",
      label: "brand_color",
    },
    {
      type: "string",
      name: "accent_color",
      label: "accent_color",
    },
    {
      type: "boolean",
      name: "invert_brand_text",
      label: "invert_brand_text",
    },
    {
      type: "boolean",
      name: "invert_accent_text",
      label: "invert_accent_text",
    },
    {
      type: "string",
      name: "baseurl",
      label: "baseurl",
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
    {
      type: "string",
      name: "locale",
      label: "locale",
    },
    {
      type: "string",
      name: "theme",
      label: "theme",
    },
    {
      type: "string",
      name: "plugins",
      label: "plugins",
      list: true,
    },
    {
      type: "object",
      name: "csv",
      label: "csv",
      fields: [
        {
          type: "object",
          name: "rebels",
          label: "rebels",
          fields: [
            {
              type: "string",
              name: "source",
              label: "source",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "collections",
      label: "collections",
      fields: [
        {
          type: "object",
          name: "rebels",
          label: "rebels",
          fields: [
            {
              type: "boolean",
              name: "output",
              label: "output",
            },
          ],
        },
        {
          type: "object",
          name: "posts",
          label: "posts",
          fields: [
            {
              type: "string",
              name: "permalink",
              label: "permalink",
            },
          ],
        },
      ],
    },
    {
      type: "number",
      name: "theme_tiny",
      label: "theme_tiny",
    },
    {
      type: "number",
      name: "theme_small",
      label: "theme_small",
    },
    {
      type: "number",
      name: "theme_medium",
      label: "theme_medium",
    },
    {
      type: "number",
      name: "theme_large",
      label: "theme_large",
    },
    {
      type: "string",
      name: "exclude",
      label: "exclude",
      list: true,
    },
  ] as TinaField[];
}
export function half_image_blockFields() {
  return [
    {
      type: "image",
      name: "half_image",
      label: "Image",
    },
    {
      type: "rich-text",
      name: "text",
      label: "text",
    },
    {
      type: "string",
      name: "button_select",
      nameOverride: "button-select",
      label: "Button Type",
      options: ["Custom"],
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "button",
      name: "button",
      templates: [
        {
          fields: buttonFields(),
          label: "Button",
          name: "button",
        },
      ],
    },
  ] as TinaField[];
}
export function half_map_blockFields() {
  return [
    {
      type: "rich-text",
      name: "text",
      label: "Text",
    },
    {
      type: "string",
      name: "button_select",
      nameOverride: "button-select",
      label: "Button Type",
      options: ["Donation"],
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Button",
      name: "button",
      templates: [
        {
          fields: buttonFields(),
          label: "Button",
          name: "button",
        },
      ],
    },
  ] as TinaField[];
}
export function home_pageFields() {
  return [
    // {
    //   type: "string",
    //   name: "layout",
    //   label: "layout",
    // },
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
        {
          fields: map_blockFields(),
          label: "Map Block",
          name: "map_block",
          nameOverride: "map-block",
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
  ] as TinaField[];
}
export function latest_blockFields() {
  return [
    {
      type: "string",
      name: "collection",
      label: "Collection",
      options: ["posts", "sentences"],
      required: true,
    },
    {
      type: "rich-text",
      name: "text",
      label: "Text",
    },
    {
      type: "string",
      name: "button_select",
      nameOverride: "button-select",
      label: "Button type",
      options: ["Donation", "Custom"],
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Button",
      name: "button",
      templates: [
        {
          fields: buttonFields(),
          label: "Button",
          name: "button",
        },
      ],
    },
  ] as TinaField[];
}
export function map_blockFields() {
  return [{
    "type": "string",
    "name": "title",
    "label": "Title"
  }] as TinaField[];
}
export function pageFields() {
  return [
    // {
    //   type: "string",
    //   name: "layout",
    //   label: "layout",
    // },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "top_image",
      label: "Top Image",
    },
    {
      type: "image",
      name: "image",
      label: "Social Media Image",
    },
  ] as TinaField[];
}
export function profile_templateFields() {
  return [
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
  ] as TinaField[];
}
export function rebelFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "boolean",
      name: "archive",
      label: "archive",
    },
    {
      type: "string",
      name: "title",
      label: "Name",
    },
    {
      type: "string",
      name: "excerpt",
      label: "excerpt",
    },
    {
      type: "string",
      name: "prison",
      label: "prison",
    },
    {
      type: "string",
      name: "stream_link",
      label: "Stream Link",
    },
    {
      type: "datetime",
      name: "sentance_start",
      label: "Sentance Start Date",
    },
    {
      type: "datetime",
      name: "sentece_end",
      label: "sentece end date",
    },
    {
      type: "datetime",
      name: "date_released",
      label: "date released",
    },
    {
      type: "image",
      name: "top_image",
      label: "Image at top of page",
    },
  ] as TinaField[];
}
