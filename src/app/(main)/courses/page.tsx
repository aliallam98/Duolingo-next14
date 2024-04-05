import { getCourses, getUserProgress } from "@/DB/queries";
import CoursesList from "./_components/CoursesList";

const coursesPage = async () => {
  //Call DB
  const coursesDate = getCourses();
  const UserProgressDate = getUserProgress();
  const [courses, UserProgress] = await Promise.all([
    coursesDate,
    UserProgressDate,
  ]);

  return (
    <div className="container h-full">
      <h1 className="text-neutral-700 text-2xl font-bold">
        Languages Courses{" "}
      </h1>
      <CoursesList
        courses={courses}
        activeCourseId={UserProgress?.activeCourseId}
      />
    </div>
  );
};

export default coursesPage;
