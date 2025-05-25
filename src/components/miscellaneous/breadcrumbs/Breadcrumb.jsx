import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Reusable Breadcrumb Component.
 *
 * @param {Array<Object>} breadcrumbs - An array of breadcrumb objects.
 * Each object should have:
 * - {string} label: The text to display for the breadcrumb item.
 * - {string} [path]: The URL path to navigate to when this item is clicked.
 * If not provided, the item will be treated as the current (non-clickable) item.
 */
const Breadcrumb = ({ breadcrumbs = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          {/* Render the breadcrumb item */}
          {item.path ? (
            // If a path is provided, it's a clickable link
            <div
              className="text-white/30 text-base font-medium leading-normal hover:cursor-pointer hover:text-white/50 transition-colors duration-200"
              onClick={() => navigate(item.path)}
              role="link" // Add role for accessibility
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </div>
          ) : (
            // If no path, it's the current (last) item, not clickable
            <span className="text-white/80 text-base font-medium leading-normal">
              {item.label}
            </span>
          )}

          {/* Render the separator if it's not the last item */}
          {index < breadcrumbs.length - 1 && (
            <span className="text-white/30 text-base font-medium leading-normal">
              /
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
