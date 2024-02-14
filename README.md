
## Getting Started

Start project with docker

```bash
npm install

docker run --rm -it -v $PWD:/data --name nextjs -w /data -p 3000:3000 node:21 bash

npm run dev
```
