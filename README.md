---
layout: page
permalink: "/help/"

---
# Rebels in Prison Website

## Editing pages

This site uses a Forestry.IO content management service.

1. Sign in at [/admin](https://rebelsinprison.uk/admin)
2. Navigate to the relevant tab in the menu and start editing

Here you can create, edit and add:

* Blog posts
* The [site configuration](https://github.com/joe-irving/RIPS/blob/master/_config.yml)
* The [resources list](https://rebelsinprison.uk/resources/)

Once you press **Save** the site takes about 3 minutes to rebuild,
so if you are getting inpatient then a cup of tea might be a good idea. If you really want to watch the progress of the site building head over to the
[GitHub Actions page](https://github.com/joe-irving/RIPS/actions) to watch the
orange loading blob.

### Adding and editing pages

You can find each page - except the pages generated from the spreadsheet -
in the "Pages" section of the menu. Just click on one to start editing.

For example, lets edit the [Resources](https://rebelsinprison.uk/resources/) page.

* Click on Resources. ![The admin screen showing a list of page](/uploads/help/pages.png)
* The pane of the left is for general information about the page, and the one on the
  right is for editing the content. On mobile these are navigated between. ![Resources page screen with 2 panes](/uploads/help/resources-page.png)
* Let's edit the "top image", which is the image that is half shown at the top of
  the page.
* Either drag a local file into the box, or click on it to see files already uploaded.
  If you click on it this screen is shown: ![Media screen](/uploads/help/media.png)
* Select or upload the image you want, e.g. we chose this one: ![Resources page screen with 2 panes](/uploads/help/resources-page-2.png)
* Click the "eye" logo next to save to preview your chanages: ![Preview of resources page](/uploads/help/resources-preview.png)
* NB to edit the resources shown on the list, you can to go to "Resources" in the
  menu - under the **Data** header.

### Editing the home page

The home page is different to all the others, and a little harder to edit. Unlike
the main pages, the home pages doesn't have 2 pannels to edit, just one.

First of all, you need to go to **"Home Page"** in the menu.

There are lots of sections, hopefully the following goes some why in explaining
them:

* **Top Image**: Specifies the image show when you first get to the website.
* **"Jump To" Button**: for the button at the bottom of the top image.
  * **Text**: button text
  * **Taget**: the name of the header to jumo to. Lower-case with spaces turned
    into hyphens
* **Top quote**: The top big section of the page.
* **End quote**: The section at the end before the footer.
* **Social media preivew image**: An image that is not bigger than 1200px wide,
  for previewing on Facebook etc
* **Blocks**: templated sections. For example:
  * **Half Image Block**: Shows text on one side and an image on the other. Alternates
    from image on the right to the left.
    * **Image**: This image shown on one half
    * **Text**: the next formatted on the other half

## The Rebel Database

This website builds its [list of rebels](https://rebelsinprison.uk/rebels/all/)
from
[a public spreadsheet](https://docs.google.com/spreadsheets/d/1oNfGY6SG0PyZeOg6HLQ18Ul0MYNAR4mdRCrYTKKKhUs/gviz/tq?tqx=out:html&sheet=Website)
that only admins can edit.

This is currently (3-May-21) being imported to the website every 15 minutes,
so it shouldn't take long for your edits to appear on the site.