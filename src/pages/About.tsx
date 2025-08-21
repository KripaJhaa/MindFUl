import { memo } from 'react';
import type { FC } from 'react';
import DiversitySection from '../components/sections/about/DiversitySection';
import MissionSection from '../components/sections/about/MissionSection';
import ValuesSection from '../components/sections/about/ValuesSection';
import StatsSection from '../components/sections/about/StatsSection';
import TestimonialsSection from '../components/sections/about/TestimonialsSection';

const About: FC = () => {
  return (
    <div className="bg-white">
      <MissionSection />
      <ValuesSection />
      <DiversitySection />
      <StatsSection />
      <TestimonialsSection />
    </div>
  );
};

export default memo(About);
