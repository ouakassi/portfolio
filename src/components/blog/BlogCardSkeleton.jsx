import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./BlogCardSkeleton.css";

export default function BlogCardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme key={i} baseColor="#0a1c3b" highlightColor="#253757">
        <div className="card-skeleton">
          <div className="image-container">
            <Skeleton height={"100%"} />
          </div>
          <div className="content">
            <Skeleton className="title" />
            <div className="content-img-date">
              <Skeleton className="img" />
              <Skeleton className="date" />
            </div>
            <Skeleton className="tags" />
          </div>
        </div>
      </SkeletonTheme>
    ));
}
