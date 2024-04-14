# TODOs and Takeaways
### TODO
1. Setup the API for the lambdas
1. Make the cards links and style cards based on if they have been collected
1. Add error handling everywhere
1. Rework how the Regions are stored. Should look like:
```
{
    region: "South Africa",
    collected: True
}
```

### Takeaways
1. I wanted to get some practice working with SST and Remix and I have a better understanding of both now.
1. I would have gotten more done working with a more familiar tech stack (React & Terraform or CDK), but that's the tradeoff.
1. I should have forseen the data structure issue. Don't make the important data the key in an object.

# Setup
[Export AWS credentials to your terminal](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)

Build:
```
npx remix vite:build
npx remix-serve build/server/index.js
```

Run the frontend:
```
npm run dev
```

http://localhost:5173

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
