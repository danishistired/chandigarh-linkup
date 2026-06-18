# adda

a dead-simple webring for **chandigarh university** students, hackers and tinkerers.

inspired by [threadlockers/webring](https://github.com/threadlockers/webring).

## join the ring

append your entry to [`webring.json`](./webring.json) and open a pull request:

```json
{
  "name": "your-handle",
  "gh":   "your-github-username",
  "url":  "https://your-site.com"
}
```

`name` must be lowercase letters, digits and dashes. it has to be unique. a GitHub Action validates your PR automatically.

once merged, the ring deploys.

## wire your site into the ring

drop these anywhere on your page (replace `your-handle` and the base URL):

```html
<a href="https://adda.example/redirect?from=your-handle&dir=prev">← prev</a>
<a href="https://adda.example/random">random</a>
<a href="https://adda.example/redirect?from=your-handle&dir=next">next →</a>
```

## endpoints

| route | what it does |
| --- | --- |
| `GET /redirect?from=<name>&dir=prev\|next` | 302 → neighbour's site |
| `GET /random` | 302 → random member |
| `GET /members` | JSON list of members |

## stack

plain TanStack Start + a single JSON file. no database. PRs are the admin panel.
