import { lessons, units } from "@/DB/schema";
import UnitBanner from "./UnitBanner";
import LessonButton from "./LessonButton";


type Unit = {
    id: number;
    title: string;
    description: string;
    courseId: number | null;
    order: number;
  };

interface IProps {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: Unit
      })
    | undefined;
  activeLessonPercentage: number;
}

const Unit = ({
  id,
  order,
  title,
  description,
  activeLesson,
  activeLessonPercentage,
  lessons,
}: IProps) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};

export default Unit;
