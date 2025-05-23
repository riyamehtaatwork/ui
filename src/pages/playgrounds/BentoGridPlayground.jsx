// src/pages/BentoGridPlayground.jsx
import React, { useState } from "react";
import LiveCodes from "livecodes/react";
import BentoDemoCode from "../../components/bentogrids/bentogridwithhover/BentoDemo.jsx?raw";
import BentoGridCode from "../../components/bentogrids/bentogridwithhover/BentoGrid.jsx?raw";
import BorderHighlightEffectCode from "../../components/bentogrids/bentogridwithhover/BorderHighlightEffect.jsx?raw";
import cnUtil from "../../components/utils/cn.js?raw";

export default function BentoGridPlayground() {
  const [playground, setPlayground] = useState(null);

  const config = {
    markup: {
      language: "html",
      content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white">
  <div id="root"></div>
</body>
</html>`,
    },
    style: {
      language: "css",
      content: `/* Optional custom CSS */`,
    },
    script: {
      language: "jsx",
      content: `import React from 'react'
import ReactDOM from 'react-dom/client'

// Utility
${cnUtil}

// Components
${BentoGridCode}

${BorderHighlightEffectCode}

// Demo
${BentoDemoCode}

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BentoGridDemo />)
      `,
    },
    options: {
      autoupdate: true,
    },
  };

  return (
    <div className="h-full">
      <LiveCodes
        config={config}
        view="split"
        sdkReady={setPlayground}
        style={{ height: "100%" }}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => playground?.run()}
      >
        Run Manually
      </button>
    </div>
  );
}
