import "dotenv/config";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../src/DB/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);


    await db.insert(schema.courses).values([
        {
            title:"English",
            imageSrc:"/en.jpg"
        },
        {
            title:"Spanish",
            imageSrc:"/es.svg"
        },
        {
            title:"French",
            imageSrc:"/fr.svg"
        },
        {
            title:"Italian",
            imageSrc:"/it.svg"
        },
        {
            title:"Japanese",
            imageSrc:"/jp.svg"
        },
    ])

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("failed to seed the database");
  }
};


main()
