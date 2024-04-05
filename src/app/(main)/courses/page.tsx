import { getCourses } from "@/DB/queries";
import CoursesList from "./_components/CoursesList";

const coursesPage = async () => {
  //Call DB
  const data = await getCourses();
  return (
    <div className="container h-full">
      <h1 className="text-neutral-700 text-2xl font-bold">
        Languages Courses{" "}
      </h1>
      <CoursesList courses={data} activeCourseId={1} />
    </div>
  );
};

export default coursesPage;
