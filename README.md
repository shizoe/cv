This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Netlify Status

- Dev: [Netlify Status](https://api.netlify.com/api/v1/badges/3264ca6f-07f1-42ad-9293-db69c867b432/deploy-status)
- Prod: [Netlify Status](https://api.netlify.com/api/v1/badges/e9594f7a-3743-4df8-b08a-85d22bc672c9/deploy-status)

## Built Using

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Styled Icons](https://styled-icons.js.org/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to GitHub Pages.

1. Create a nodejs Action. and add the following code

# This workflow will do a clean install of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - run: npm run exxport
      - run: touch ./out/.nojekyll

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: out # The folder the action should deploy.
          
  ## Thats it. Enjoy
