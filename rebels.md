---
layout: page
title: Rebels in Prison
---

These are the people currently in prison and in need of support.
{% assign posts = site.posts | sort 'date' %}

{% for post in posts  %}
{% if post.categories contains 'rebels' %}

# [{{ post.title }}]({{post.url | relative_url}})

{% if post.prison != '' %}_{{ post.prison }}_{% endif %}

{{ post.excerpt }}

{% endif %}
{% endfor %}
