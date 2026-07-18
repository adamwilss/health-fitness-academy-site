'use client';

import { useState } from 'react';
import type { Course, Level } from '@/data/courses';
import CourseCard from './CourseCard';

const TABS: { level: Level | 'ALL'; label: string }[] = [
  { level: 'ALL', label: 'All Courses' },
  { level: 'L2', label: 'Level 2' },
  { level: 'L3', label: 'Level 3' },
  { level: 'CPD', label: 'CPD' },
];

export default function CourseFilter({ courses }: { courses: Course[] }) {
  const [active, setActive] = useState<Level | 'ALL'>('ALL');

  const visible = active === 'ALL' ? courses : courses.filter((c) => c.level === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter courses by level">
        {TABS.map((tab) => {
          const isActive = active === tab.level;
          return (
            <button
              key={tab.level}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.level)}
              className={`rounded-full border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                isActive
                  ? 'border-brand bg-brand text-on-brand'
                  : 'border-line bg-card text-muted hover:border-brand/40 hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
