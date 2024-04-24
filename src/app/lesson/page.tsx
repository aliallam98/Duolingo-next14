import { getCourseProgress, getLesson, getUserProgress } from "@/DB/queries";
import { challenges } from "@/DB/schema";
import { redirect } from "next/navigation";
import Quiz from "./_components/Quiz";

const LessonPage = async () => {
  const lessonPromise = getLesson();
  const UserProgressPromise = getUserProgress();

  const [lessonData, UserProgressData] = await Promise.all([
    lessonPromise,
    UserProgressPromise,
  ]);

  if (!lessonData || !UserProgressData) {
    redirect("/learn");
  }

  const initialPercentage =
    (lessonData.challenges.filter((challenge) => challenge.completed).length /
      lessonData.challenges.length) *
    100;

  return (
    <Quiz
      initialPercentage={initialPercentage}
      initialLessonId={lessonData.id}
      initialLessonChallenges={lessonData.challenges}
      initialHearts={UserProgressData.hearts}
      userSubscription={undefined}
    />
  );
};

export default LessonPage;
