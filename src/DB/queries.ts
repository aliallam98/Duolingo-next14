import { cache } from "react";
import db from "./drizzle";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";
import {
  challengesProgress,
  courses,
  lessons,
  units,
  userProgress,
} from "./schema";

export const getCourses = cache(async () => {
  const courses = await db.query.courses.findMany();

  return courses;
});

export const getCourseById = cache(async (id: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, id),

    //populate units and lessons
  });

  return data;
});

//User Progress
export const getUserProgress = cache(async () => {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });

  return data;
});

export const getUnits = cache(async () => {
  const { userId } = await auth();
  const userProgress = await getUserProgress();

  if (!userId || !userProgress?.activeCourseId) {
    // console.log("userId, userProgress,userProgress?.activeCourseId");
    return [];
  }
  //Confirm whether order is needed
  const data = await db.query.units.findMany({
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        with: {
          challenges: {
            with: {
              challengeProgress: {
                where: eq(challengesProgress.userId, userId),
              },
            },
          },
        },
      },
    },
  });
  

  const normalizedData = data.map((unit) => {
    const lessonWithCompletedStatus = unit.lessons.map((lesson) => {
      const allCompletedChallenges = lesson.challenges.every((challenge) => {
        return challenge.challengeProgress &&
          challenge.challengeProgress.length > 0 &&
          challenge.challengeProgress.every((progress) => progress.completed);
      });

      return { ...lesson, completed: allCompletedChallenges };
    });
    return { ...unit, lessons: lessonWithCompletedStatus };
  });
  return normalizedData;
});
