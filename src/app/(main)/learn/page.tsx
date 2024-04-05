import FeedHeader from "../_components/FeedHeader";
import FeedWrapper from "../_components/FeedWrapper";
import StickyWrapper from "../_components/StickyWrapper";
import UserProgress from "../_components/UserProgress";

const LearnPage = () => {
  return (
    <div className="flex gap-10">
      <FeedWrapper>
        <FeedHeader title="English" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
