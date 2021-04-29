---
layout: page
title: Rebels in Prison - Archive
permalink: /rebels/old/
main_nav_exclude: true
---

# Rebels in Prison - Archive

These people served time in prison.

{% assign posts = site.posts | sort 'date' %}
{% for post in posts  %}
{% if post.categories contains 'rebels' %}
{% if post.archive == true %}

## [{{ post.title }}]({{post.url | relative_url}})

{% if post.prison != '' %}_{{ post.prison }}_{% endif %}

{{ post.excerpt }}

{% endif %}
{% endif %}
{% endfor %}
