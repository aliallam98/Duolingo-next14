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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengesProgress);
    await db.delete(schema.challengesOptions);

    await db.insert(schema.courses).values([
      {
        title: "English",
        imageSrc: "/en.jpg",
      },
      {
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        title: "Japanese",
        imageSrc: "/jp.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        courseId: 1,
        title: "Unit 1 ",
        description: "Learn basics of spanish",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        unitId: 1,
        title: "nouns",
        order: 1,
      },
    ]);
    await db.insert(schema.challenges).values([
      {
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "which one of these is a man",
      },
    ]);
    await db.insert(schema.challengesOptions).values([
      {
        challengeId: 1,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.mp3",
        correct: true,
        text: "el hombre",
      },
      {
        challengeId: 1,
        imageSrc: "/women.svg",
        audioSrc: "/es_women.mp3",
        correct: false,
        text: "la mujer",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.svg",
        audioSrc: "/es_robot.mp3",
        correct: false,
        text: "el robot",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("failed to seed the database");
  }
};

main();
