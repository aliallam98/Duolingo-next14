"use client";

import { courses } from "@/DB/schema";
import Card from "./Card";

interface IProps {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
}
const CoursesList = ({ courses, activeCourseId }: IProps) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onclick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};

export default CoursesList;
