import React from "react";
import terser from "terser";
import PropTypes from "prop-types";

export default function HTML(props: any) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
				{props.postBodyComponents}
			</body>
			<script
				type="text/javascript"
				dangerouslySetInnerHTML={{
					__html: terser.minify(`
          (function() {
            // Change these if you use something different in your hook.
            var storageKey = 'currentTheme';
            var classNameDark = 'dark';
            var classNameLight = 'light';
          
            function setClassOnDocumentBody(darkMode) {
              document.body.classList.add(darkMode ? classNameDark : classNameLight);
              document.body.classList.remove(darkMode ? classNameLight : classNameDark);
            }
            
            var preferDarkQuery = '(prefers-color-scheme: dark)';
            var mql = window.matchMedia(preferDarkQuery);
            var supportsColorSchemeQuery = mql.media === preferDarkQuery;
            var localStorageTheme = null;
            try {
              localStorageTheme = localStorage.getItem(storageKey);
            } catch (err) {}
            var localStorageExists = localStorageTheme !== null;
            if (localStorageExists) {
              localStorageTheme = JSON.parse(localStorageTheme);
            }
          
            // Determine the source of truth
            if (localStorageExists) {
              // source of truth from localStorage
              setClassOnDocumentBody(localStorageTheme);
            } else if (supportsColorSchemeQuery) {
              // source of truth from system
              setClassOnDocumentBody(mql.matches);
              localStorage.setItem(storageKey, mql.matches);
            } else {
              // source of truth from document.body
              var isDarkMode = document.body.classList.contains(classNameDark);
              localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
            }
          })();
          `).code!,
				}}
			/>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};
