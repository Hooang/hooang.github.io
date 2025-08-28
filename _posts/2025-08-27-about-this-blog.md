---
title: About this blog
author: hooang
date: 2025-08-27 16:43:00 +0900  # 최초 생성일
last_modified_at: 2025-08-28 11:19:00 +0900  # 마지막 수정일
categories: [Info, Notice]
tags: [info]
mermaid: true
comments: true
---

# About This Blog

## Language & Third-party
This blog is based on the **Chirpy Jekyll Theme (v7.3.1)** and uses the following technologies:

- **Languages:** HTML, CSS, JavaScript, Liquid, Markdown
- **Libraries & Plugins:** Prism.js (code highlighting), FontAwesome (icons), any other custom scripts or styles

## Goals
- Use Jekyll theme
- Automatically switch language according to the user's browser settings
- If you edit webpage or create a post, need to login (GitHub)
- Make a personal web-editor
- Posts created with the web editor must be saved as Markdown files and automatically committed and pushed to the repository
- Credentials data must be encrypted

## Goals Detail

### Use Jekyll Theme
- Use jekyll-theme-chirpy-7.3.1
- Configure the theme so that it does not use a Gem-based Theme, but instead downloads the base files of the theme locally for direct modification.
- Remove unused icons from the footer, and add Instagram and language-setting icons.
- Change the theme background color or background image.

## Goal Plan Gantt Chart
```mermaid
gantt
  title Blog Setup & Features Plan
  dateFormat  YYYY-MM-DD
  axisFormat  %m-%d
  %% 오늘 날짜 기준
  {% assign today = site.time | date: "%Y-%m-%d" %}

  section Goal

  %% Jekyll Theme setup (진행중)
  {% assign start_setup = "2025-08-26" %}
  {% assign end_setup = "2025-08-29" %}
  {% if today >= start_setup and today <= end_setup %}
    Jekyll Theme setup :active, a, 2025-08-26, 4d
  {% else %}
    Jekyll Theme setup :a, 2025-08-26, 4d
  {% endif %}

  %% Automatically switch language (자동 다국어 전환)
  {% assign start_lang = "2025-08-30" %}
  {% assign end_lang = "2025-08-31" %}
  {% if today >= start_lang and today <= end_lang %}
    Automatically switch language :crit, b, 2025-08-30, 2d
  {% else %}
    Automatically switch language :b, 2025-08-30, 2d
  {% endif %}

  %% Admin login feature (사용자 로그인)
  {% assign start_login = "2025-09-01" %}
  {% assign end_login = "2025-09-03" %}
  {% if today >= start_login and today <= end_login %}
    Admin login feature :crit, c, 2025-09-01, 3d
  {% else %}
    Admin login feature :c, 2025-09-01, 3d
  {% endif %}

  %% Web editor (웹 에디터, 자동 커밋 및 푸시)
  {% assign start_editor = "2025-09-03" %}
  {% assign end_editor = "2025-09-21" %}
  {% if today >= start_editor and today <= end_editor %}
    Web editor :crit, d, 2025-09-03, 19d
  {% else %}
    Web editor :d, 2025-09-03, 19d
  {% endif %}
```

## Planned Posts
- Planned posts will cover a broad range of IT topics, from embedded systems to web development and databases.  
- The main focus will be on MES.  
- Posts will also include content related to Traditional Chinese (Mandarin).

## Contact
- Email: leeio3@naver.com