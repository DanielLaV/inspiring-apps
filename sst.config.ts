/// <reference path="./.sst/platform/config.d.ts" />
import { Table, Function } from "sst/constructs";

export default $config({
  app(input) {
    return {
      name: "inspiring-apps",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Remix("FlamingoBingo");

    const userTable = new Table("FlamingoBingoUsers", {
      fields: {
        email: "string",
        cardOrder: "list" // Store each user's order of cards
      },                  // Would look like ["Arabian Sea", null, "East Asia", "Gulf of Mexico", etc]
      primaryIndex: { hashKey: "email" },
    });

    const cardTable = new Table("FlamingoBingoCards", {
      fields: {
        id: "number",
        cards: "list" // Object showing which regions are collected
      },              // Would look like { "Arabian Sea": true, "East Asia": false, etc }
      primaryIndex: { hashKey: "id" },
    });

    const getCards = new Function("GetCards", {
      handler: "lambdas/get-cards/get-cards.handler",
      permissions: [userTable, cardTable]
    });

    const submitRegion = new Function("SubmitRegion", {
      handler: "lambdas/submit-region/sumbit-region.handler",
      permissions: [cardTable]
    });
  },
});
