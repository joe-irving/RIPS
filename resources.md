---
layout: page
title: Resources
order: 10
---
# Resources

Some external resources you may find useful.

{% for link in site.data.resources %}
{% raw %}{% linkpreview link.link %}{% endraw %}
{% endfor %}
