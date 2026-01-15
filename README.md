---
layout: page
permalink: "/help/"
sitemap: false
---
# Rebels in Prison Website

A simple jekyll site for the RIPS team. Built in [Jekyll](https://jekyllrb.com/), [Airtable](https://airtable.com/) for the CMS.

Uses `jekyll-airtable-import` plugin to create collections and data from Airtable.

## Setup

1. Follow the jekyll setup steps for your local environment
2. Run `bundle install`
3. Get an [airtable API key](https://airtable.com/create). 
4. Create a `.env` file with the `AIRTABLE_API_KEY` value from above

## Development

Run `bundle exec jekyll serve` to start the development server. Then just edit the files and refresh the page to check changes.

## Deployment

Run `bundle exec jekyll build` to create a full website in the `_site` directory. Copy this to whatever web server.