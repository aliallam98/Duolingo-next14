"use client";

import { courses, userProgress } from "@/DB/schema";
import Card from "./Card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { updateUserProgress } from "@/actions/user-progress";

interface IProps {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
}
const CoursesList = ({ courses, activeCourseId }: IProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onClickHandler = async (courseId: number) => {
    if (isPending) return;

    if (courseId === activeCourseId) return router.push("/learn");

    startTransition(async () => {
      await updateUserProgress(courseId);
    });
  };
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onclick={onClickHandler}
          disabled={isPending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};

export default CoursesList;
