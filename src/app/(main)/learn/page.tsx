import { getUnits, getUserProgress } from "@/DB/queries";
import FeedHeader from "../_components/FeedHeader";
import FeedWrapper from "../_components/FeedWrapper";
import StickyWrapper from "../_components/StickyWrapper";
import UserProgress from "../_components/UserProgress";
import { redirect } from "next/navigation";
import Unit from "./_components/Unit";

const LearnPage = async () => {
  //Call DB
  const UserProgressPromise = getUserProgress();
  const UserUnitsPromise = getUnits();
  const [UserProgressData, UserUnitsData] = await Promise.all([
    UserProgressPromise,
    UserUnitsPromise,
  ]);

  if (!UserProgressData || !UserProgressData?.activeCourseId) {
    redirect("/courses");
  }

  return (
    <div className="flex gap-10">
      <FeedWrapper>
        <FeedHeader title={UserProgressData.activeCourse.title} />
        {UserUnitsData.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              description={unit.description}
              order={unit.order}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={undefined}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={UserProgressData.activeCourse}
          hearts={UserProgressData.hearts}
          points={UserProgressData.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
