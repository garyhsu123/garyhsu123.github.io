---
title: Building a Blog One Decision at a Time
publishDate: 2026-09-02
summary: A first note on why I want this site to stay small, readable, and focused on explaining technical decisions clearly.
draft: false
---

The first version of a personal site does not fail because the technology is hard. It usually fails because the scope quietly expands.

I wanted this site to start from a simple question: what is the smallest useful version of a personal website if the main goal is to write?

For me, the answer was not "a complete portfolio platform." It was a blog-first site with enough structure to support writing, a compact About page, and a small set of projects with context.

## Why blog first

Writing creates a better reason to return than a static profile page. A project list can tell people what I have built, but an article shows how I think through a problem.

That matters more to me than collecting sections just because personal websites usually have them.

## What I want the site to do well

The site should make long-form reading feel easy. That means:

- clear typography
- calm spacing
- readable code blocks
- straightforward navigation

Those are boring decisions in the best sense. They reduce friction for the reader.

## The tradeoff I am making

I am deliberately not building everything at once. No search, no tags, no comments, no CMS. Those can come later if the writing volume earns them.

Starting smaller gives me a better chance of actually publishing.

```ts
type V1Rule = {
  addFeature: (reason: string) => boolean;
};

const v1Rule: V1Rule = {
  addFeature(reason) {
    return reason === "This helps readers reach and understand the writing.";
  },
};
```
