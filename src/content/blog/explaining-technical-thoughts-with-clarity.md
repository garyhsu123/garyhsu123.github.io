---
title: Explaining Technical Thoughts With Clarity
publishDate: 2026-08-28
summary: Notes on using writing to make engineering decisions more understandable, both for myself and for other readers.
draft: false
---

One reason I want to keep this site simple is that I want the writing to do the heavy lifting.

A strong article does not need a complicated interface. It needs structure, pacing, and a clear argument.

## Writing is part of the engineering loop

When I explain a decision in writing, I usually discover one of three things:

1. The approach is better than I thought.
2. The approach has a weak assumption I skipped over.
3. The problem itself was not defined clearly enough.

That makes writing useful even before anyone else reads it.

## Code examples matter

Technical articles often break when code blocks feel like pasted raw output instead of part of the explanation. I want code examples to feel integrated into the reading flow.

```swift
struct Tradeoff {
    let constraint: String
    let decision: String
    let consequence: String
}

let example = Tradeoff(
    constraint: "Limited time",
    decision: "Ship the smallest readable version",
    consequence: "Leave advanced publishing features for later"
)
```

## What I want readers to get

I want readers to leave with something practical:

- a clearer way to think about a technical decision
- a useful example
- a small piece of knowledge they can apply
