// ==UserScript==
// @name         freeCodeCamp - Codewars Uniform Edition (v6.2)
// @namespace    http://tampermonkey.net/
// @version      6.2
// @description  Userscript for freecodecamp
// @author       Gemini
// @match        https://www.freecodecamp.org/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const codewarsUniformCSS = `

        header,
        .universal-nav,
        #universal-nav,
        [class*="universal-nav"],
        nav[role="navigation"] {
            background-color: #111111 !important;
            background-image: none !important;
        }

        :root, [class*="theme-dark"], [class*="theme-light"] {
            --universal-nav-bg: #111111 !important;
            --primary-background: #111111 !important;
            --secondary-background: #111111 !important; /* Auf Primärwert gesetzt für Uniformität */
            --tertiary-background: #0d0d0d !important;
            --foreground-color: #dcdcdc !important;
            --primary-color: #b1361e !important;
            --danger-color: #b1361e !important;
            --success-color: #629524 !important;
            --gray-90: #111111 !important;
            --gray-85: #111111 !important;
            --gray-75: #111111 !important;
            --border-color: #333333 !important;
        }

        html, body, main, #site-main, .main-layout {
            background-color: #111111 !important;
            color: #dcdcdc !important;
        }

        [class*="editor-layout-header"], [class*="description-header"] {
            background-color: #000000 !important;
            border-bottom: 1px solid #333 !important;
        }

        [class*="side-panel"], .instruction-window {
            background-color: #1b1b1b !important;
        }

        .universal-nav {
            border-bottom: 2px solid #b1361e !important;
        }

        .nav-logo {
            filter: grayscale(1) invert(1) brightness(0.8) !important;
        }


        .monaco-editor, .monaco-editor-background, .monaco-editor .margin {
            background-color: #0d0d0d !important;
        }

        [class*="console-output"], .output-grid, .python-output {
            background-color: #050505 !important;
            border: 1px solid #333 !important;
            color: #88ee88 !important;
        }


        button, .btn, [class*="btn-primary"] {
            background-image: none !important;
            background-color: #222 !important;
            border: 1px solid #444 !important;
            border-radius: 0 !important;
            color: #aaa !important;
            box-shadow: none !important;
        }

        button:hover {
            background-color: #b1361e !important;
            color: #fff !important;
        }


        .block-grid-wrapper, .super-block-card {
            background-color: #1b1b1b !important;
            border-radius: 0 !important;
        }


        footer, .footer, .ad-wrapper, .donation-section {
            display: none !important;
        }

        [class*="description"] pre,
        [class*="description"] code,
        [class*="instructions"] pre,
        [class*="instructions"] code,
        pre[class*="language-"],
        code[class*="language-"] {
            background-color: #0d0d0d !important;
            background-image: none !important;
            border: 1px solid #333 !important;
            text-shadow: none !important;
        }

        * {
            font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
        }

        .curriculum-layout,
        .map-ui,
        [class*="curriculum-container"],
        [class*="block-grid-container"],
        .is-jumping main,
        [class*="app-wrapper"] {
            background-color: #111111 !important;
            background-image: none !important;
        }
    `;

    const inject = () => {
        if (!document.getElementById('codewars-deep-gray')) {
            const style = document.createElement('style');
            style.id = 'codewars-deep-gray';
            style.innerHTML = codewarsUniformCSS;
            document.head.appendChild(style);
        }
    };

    inject();
    const observer = new MutationObserver(inject);
    observer.observe(document.documentElement, { childList: true, subtree: true });
})();
