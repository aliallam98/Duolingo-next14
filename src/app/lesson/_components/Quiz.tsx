"use client";

import { challenges, challengesOptions } from "@/DB/schema";
import { useState } from "react";
import QuizHeader from "./QuizHeader";

interface IProps {
  initialPercentage: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengesOptions.$inferSelect)[];
  })[];
  initialHearts: number;
  userSubscription: any;
}

const Quiz = ({
  initialHearts,
  initialPercentage,
  userSubscription,
}: IProps) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentages, setPercentages] = useState(initialPercentage);
  return (
    <>
      <QuizHeader
        hearts={hearts}
        percentage={percentages}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
};

export default Quiz;
