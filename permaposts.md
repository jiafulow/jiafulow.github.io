---
layout: page
title: Pages
permalink: /pages/
date: 2018-10-26
---

{% for node in site.permaposts %}
  <h2><a href="{{ node.url }}">{{ node.title }}</a></h2>
  {{ node.content | markdownify }}
{% endfor %}
