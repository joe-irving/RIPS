---
layout: page
top_image: ''
title: Blog
order: 4
image: /uploads/RIPS-square.jpeg
_template: page
---

# Blog

{% assign posts = site.posts | sort: 'date' | reverse %}
{% include blog-list.html %}
