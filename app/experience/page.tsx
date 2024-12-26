import { Timeline } from "@/@/_components/timeline";
import { EXPERIENCE } from "@/app/_data/experience";

export default function Experience() {
  return (
    <div className="w-full">
      <Timeline data={EXPERIENCE} />
    </div>
  );
}
