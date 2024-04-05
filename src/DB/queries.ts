import { cache } from "react";
import db from "./drizzle";

export const getCourses = cache(async () => {
  const courses = await db.query.courses.findMany();

  return courses;
});
