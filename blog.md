---
layout: page
top_image:
title: Blog
---
# Blog

{% assign posts = site.posts | sort 'date' %}

{% for post in posts  %}
{% if post.categories contains 'blog' %}

## [{{ post.title }}]({{post.url | relative_url}})

_{{ post.date | date:"%a %e %b %Y" }}_

{{ post.excerpt }}

{% endif %}
{% endfor %}
