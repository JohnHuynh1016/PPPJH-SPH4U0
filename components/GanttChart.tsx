
"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

// ---------------------------------------
// TYPES
// ---------------------------------------

export interface Task {
  id: string;
  name: string;
  start: string;
  end: string;
  progress: number;
  dependencies?: string;
  custom_class?: string;
}

type ViewMode = "Day" | "Week" | "Month";

interface GanttInstance {
  scroll_current: () => void;
}

type GanttConstructor = new (
  element: HTMLElement,
  tasks: Task[],
  options: {
    readonly: boolean;
    view_mode: ViewMode;
    date_format: string;
    language: string;
    scroll_to: string;
    bar_height: number;
    padding: number;
  }
) => GanttInstance;

// Tell TypeScript about the global CDN library.
declare global {
  interface Window {
    Gantt?: GanttConstructor;
  }
}

// ---------------------------------------
// COMPONENT
// ---------------------------------------

interface GanttChartProps {
  tasks: Task[];
}

export function GanttChart({ tasks }: GanttChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ganttInstance = useRef<GanttInstance | null>(null);

  const [scriptReady, setScriptReady] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("Week");
  
  const [chartReady, setChartReady] = useState(false);
  // ---------------------------------------
  // INITIALIZE GANTT
  // ---------------------------------------

  useEffect(() => {
    if (!scriptReady) return;
    setChartReady(false);
    const container = containerRef.current;
    const GanttConstructor = window.Gantt;

    if (!container || !GanttConstructor) {
      setScriptError(true);
      return;
    }

    // Remove any previous chart elements.
    container.replaceChildren();

    try {
      // Create a copy because Frappe Gantt
      // internally modifies its task objects.
      const safeTasks = tasks.map((task) => ({
        ...task,
        }));

        // Find the overall project date range.
        const sortedTasks = [...safeTasks].sort(
        (a, b) => a.start.localeCompare(b.start)
        );

        const chartStart = sortedTasks[0].start;

        const chartEnd = sortedTasks.reduce(
        (latest, task) => task.end > latest ? task.end : latest,
        sortedTasks[0].end
        );

        // Generate 3 invisible rows.
        const spacerTasks: Task[] = Array.from(
        { length: 3 },
        (_, index) => ({
            id: `spacer-${index + 1}`,
            name: "",
            start: chartStart,
            end: chartEnd,
            progress: 0,
            custom_class: "gantt-spacer",
        })
        );

        // Combine actual tasks and empty rows.
        const chartTasks = [...safeTasks, ...spacerTasks];

      const instance = new GanttConstructor(
        container,
        chartTasks,
        {
          readonly: true,
          view_mode: viewMode,
          date_format: "YYYY-MM-DD",
          language: "en",

          // Start at the beginning of the project.
          scroll_to: "start",

          bar_height: 26,
          padding: 16,
        }
      );

      ganttInstance.current = instance;
      setChartReady(true);

      setScriptError(false);

    } catch (error) {
      console.error("Frappe Gantt initialization failed:", error);
      setScriptError(true);
    }

    // Cleanup before the next initialization
    // or when the component unmounts.
    return () => {
      container.replaceChildren();
      ganttInstance.current = null;
    };

  }, [scriptReady, tasks, viewMode]);

  // ---------------------------------------
  // RENDER
  // ---------------------------------------

  return (
    <section className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Load Frappe Gantt */}
      <Script
        src="https://cdn.jsdelivr.net/npm/frappe-gantt@1.2.2/dist/frappe-gantt.umd.js"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
        onError={() => setScriptError(true)}
      />

      {/* Chart Header and Controls */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Project Timeline
          </h3>

          <p className="text-sm text-gray-500">
            {tasks.length} scheduled tasks
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">

          {/* Timeline View Modes */}
          {(["Day", "Week", "Month"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setViewMode(mode)}
              aria-pressed={viewMode === mode}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                viewMode === mode
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {mode}
            </button>
          ))}

          {/* Today Button */}
          <button
            type="button"
            onClick={() => ganttInstance.current?.scroll_current()}
            disabled={!chartReady}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Today
          </button>

        </div>
      </div>

      {/* Loading Message */}
      {!scriptReady && !scriptError && (
        <p className="py-8 text-center text-sm text-gray-400">
          Loading timeline...
        </p>
      )}

      {/* Error Message */}
      {scriptError && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-4 text-sm text-red-600"
        >
          Unable to load the Gantt chart. Check your internet connection
          and browser console for more information.
        </p>
      )}

      {/* Gantt Chart Container */}
      {tasks.length === 0 && (
        <p className="mb-3 text-sm text-gray-500">
          No tasks have been scheduled yet.
        </p>
      )}

      <div
        ref={containerRef}
        className="min-w-0 overflow-x-auto"
      />

    </section>
  );
}
