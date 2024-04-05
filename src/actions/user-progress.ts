"use server";

import db from "@/DB/drizzle";
import { getCourseById, getUserProgress } from "@/DB/queries";
import { userProgress } from "@/DB/schema";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("unauthorized");
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("course not found");
  }

  //   if(!course.units.length || !course.units[0].lessons.length){
  //     throw new Error("course is empty");
  //   }

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName + " " + user.lastName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName + " " + user.lastName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  });

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};
