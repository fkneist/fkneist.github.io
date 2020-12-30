---
layout: layout.liquid
title: Blog
eleventyExcludeFromCollections: true
---
<ul>
{%- for post in collections.all -%}
  <li class="my-2"><span>{{ post.data.page.date | formatDate }} </span><a href="{{ post.url }}">{{ post.data.title }}</a> {{ post.excerpt  }} {{ post.data.page.excerpt }} [...] </li>
{%- endfor -%}
</ul>
