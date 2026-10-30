'use client';

import React, { useEffect, useRef } from 'react';

export interface Task {
  id: string;
  name: string;
  start: string;
  end: string;
  progress: number;
  dependencies?: string;
}

interface GanttChartProps {
  tasks: Task[];
}

export const GanttChart: React.FC<GanttChartProps> = ({ tasks }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ganttInstance = useRef<any>(null);

  useEffect(() => {
    // Prevent errors if running on server or if window.Gantt isn't loaded yet
    if (typeof window === 'undefined' || !(window as any).Gantt || !containerRef.current || tasks.length === 0) return;

    // Reset container contents to prevent layout loops
    containerRef.current.innerHTML = '<svg id="gantt-view-node"></svg>';

    try {
      // Use the global Gantt constructor instantiated by our Script optimizer
      const GanttConstructor = (window as any).Gantt;
      ganttInstance.current = new GanttConstructor("#gantt-view-node", tasks, {
        readonly: true,
        view_mode: 'Day',
        language: 'en'
      });
    } catch (err) {
      console.error("Gantt timeline failed to draw:", err);
    }

    return () => {
      ganttInstance.current = null;
    };
  }, [tasks]);

  return (
    <div 
      ref={containerRef} 
      className="gantt-target-wrapper"
      style={{ overflow: 'auto', border: '1px solid #ddd', borderRadius: '6px', background: '#fff' }} 
    />
  );
};
