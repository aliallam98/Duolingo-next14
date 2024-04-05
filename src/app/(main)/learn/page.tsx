import { getUserProgress } from "@/DB/queries";
import FeedHeader from "../_components/FeedHeader";
import FeedWrapper from "../_components/FeedWrapper";
import StickyWrapper from "../_components/StickyWrapper";
import UserProgress from "../_components/UserProgress";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  //Call DB
  const UserProgressPromise = getUserProgress();
  const [UserProgressData] = await Promise.all([UserProgressPromise]);

  if (!UserProgressData || !UserProgressData?.activeCourseId) {
    redirect("/courses");
  }

  return (
    <div className="flex gap-10">
      <FeedWrapper>
        <FeedHeader title={UserProgressData.activeCourse.title} />
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
