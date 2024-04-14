# About
This is a single page app for a game called Flamingo Bingo. The user enters their email address and are assigned a bingo card with 7 regions and 2 free spots. When the user has seen a flamingo in one of the regions, they click the region, which updates the database.

### Stack
I chose to create it using [SST](https://sst.dev/) and [Remix](https://remix.run/docs/en/main) in Typescript. I wrote the Lambdas in Python.

### Infra
The backend is two DynamoDB tables in AWS. The tables are updated and read via 2 Lambda functions, which the app calls.

# Resources
This single-page app is located in `app/routes/_index.tsx`.
The infrastructure is located in `sst.config.ts`.
The code for the lambda functions is in `/lambdas`

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
