import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  site: 'https://jimmy-smith.netlify.app', 
  integrations: [
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          {
            label: 'January',
            name: 'january',
            folder: 'src/pages/date/01',
            create: true,
            delete: true,
            fields: [
              { label: 'Date',  name: 'date', widget: 'datetime',  date_format: "MM.DD", time_format: false },
              { label: 'Title', name: 'title', widget: 'string'  },
              { label: 'Body' , name: 'body', widget: 'markdown'},
            ],
          },
          {
            label: 'February',
            name: 'february',
            folder: 'src/pages/date/02',
            create: true,
            delete: true,
            fields: [
              { label: 'Date',  name: 'date', widget: 'datetime',  date_format: "MM.DD", time_format: false },
              { label: 'Title', name: 'title', widget: 'string'  },
              { label: 'Body' , name: 'body', widget: 'markdown'},
            ],
          },
        ],
      },
    }),
  ]
});