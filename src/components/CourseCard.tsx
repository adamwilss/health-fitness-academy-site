import { ArrowRight } from 'lucide-react';
import type { Course } from '@/data/courses';
import { fromPrice } from '@/data/courses';
import LevelBadge from './LevelBadge';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <a
      href={`/courses/${course.slug}`}
      className="group card-lift flex flex-col rounded-2xl border border-line bg-card p-6 hover:border-brand/50 sm:p-7"
    >
      <div className="mb-4 flex items-center justify-between">
        <LevelBadge level={course.level} label={course.levelLabel} size="sm" />
        {course.cpd && (
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
            CPD add-on
          </span>
        )}
      </div>
      <h3 className="mb-2 font-heading text-lg font-semibold leading-snug text-ink">
        {course.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{course.tagline}</p>
      <div className="flex items-end justify-between gap-3 border-t border-line pt-4">
        <span className="flex flex-col">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">
            From
          </span>
          <span className="font-mono text-lg font-semibold text-ink">{fromPrice(course)}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          View course
          <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
