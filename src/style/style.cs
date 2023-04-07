/*
! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
5. Use the user's configured `sans` font-feature-settings by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  /* 3 */
  tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  -webkit-font-feature-settings: normal;
          font-feature-settings: normal;
  /* 5 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font family by default.
2. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.top-0 {
  top: 0px;
}

.right-10 {
  right: 2.5rem;
}

.top-10 {
  top: 2.5rem;
}

.left-0 {
  left: 0px;
}

.bottom-1\/2 {
  bottom: 50%;
}

.bottom-0 {
  bottom: 0px;
}

.-left-10 {
  left: -2.5rem;
}

.top-20 {
  top: 5rem;
}

.-right-10 {
  right: -2.5rem;
}

.left-20 {
  left: 5rem;
}

.top-28 {
  top: 7rem;
}

.right-0 {
  right: 0px;
}

.left-10 {
  left: 2.5rem;
}

.z-50 {
  z-index: 50;
}

.z-30 {
  z-index: 30;
}

.z-20 {
  z-index: 20;
}

.z-10 {
  z-index: 10;
}

.-z-20 {
  z-index: -20;
}

.z-40 {
  z-index: 40;
}

.-z-10 {
  z-index: -10;
}

.m-auto {
  margin: auto;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mt-16 {
  margin-top: 4rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.mt-20 {
  margin-top: 5rem;
}

.mr-8 {
  margin-right: 2rem;
}

.ml-10 {
  margin-left: 2.5rem;
}

.ml-5 {
  margin-left: 1.25rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-24 {
  margin-top: 6rem;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.h-screen {
  height: 100vh;
}

.h-0\.5 {
  height: 0.125rem;
}

.h-0 {
  height: 0px;
}

.h-3 {
  height: 0.75rem;
}

.h-9 {
  height: 2.25rem;
}

.h-40 {
  height: 10rem;
}

.h-5 {
  height: 1.25rem;
}

.h-80 {
  height: 20rem;
}

.h-full {
  height: 100%;
}

.h-32 {
  height: 8rem;
}

.h-2 {
  height: 0.5rem;
}

.h-14 {
  height: 3.5rem;
}

.h-4 {
  height: 1rem;
}

.h-48 {
  height: 12rem;
}

.h-8 {
  height: 2rem;
}

.h-6 {
  height: 1.5rem;
}

.h-96 {
  height: 24rem;
}

.w-full {
  width: 100%;
}

.w-52 {
  width: 13rem;
}

.w-3 {
  width: 0.75rem;
}

.w-40 {
  width: 10rem;
}

.w-9 {
  width: 2.25rem;
}

.w-10 {
  width: 2.5rem;
}

.w-14 {
  width: 3.5rem;
}

.w-7 {
  width: 1.75rem;
}

.w-1\/2 {
  width: 50%;
}

.w-5 {
  width: 1.25rem;
}

.w-56 {
  width: 14rem;
}

.w-2 {
  width: 0.5rem;
}

.w-32 {
  width: 8rem;
}

.w-20 {
  width: 5rem;
}

.w-4 {
  width: 1rem;
}

.w-2\/4 {
  width: 50%;
}

.w-8 {
  width: 2rem;
}

.w-6 {
  width: 1.5rem;
}

.w-10\/12 {
  width: 83.333333%;
}

.w-48 {
  width: 12rem;
}

.w-4\/5 {
  width: 80%;
}

.origin-left {
  -webkit-transform-origin: left;
          transform-origin: left;
}

.-rotate-90 {
  --tw-rotate: -90deg;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-pointer {
  cursor: pointer;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-5 {
  gap: 1.25rem;
}

.gap-10 {
  gap: 2.5rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-1 {
  gap: 0.25rem;
}

.overflow-hidden {
  overflow: hidden;
}

.whitespace-pre-line {
  white-space: pre-line;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.border {
  border-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-teal-400 {
  --tw-border-opacity: 1;
  border-color: rgb(45 212 191 / var(--tw-border-opacity));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-pink-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(157 23 77 / var(--tw-bg-opacity));
}

.bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(233 213 255 / var(--tw-bg-opacity));
}

.bg-teal-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(45 212 191 / var(--tw-bg-opacity));
}

.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

.bg-red-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(127 29 29 / var(--tw-bg-opacity));
}

.bg-teal-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(20 184 166 / var(--tw-bg-opacity));
}

.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 204 21 / var(--tw-bg-opacity));
}

.bg-opacity-90 {
  --tw-bg-opacity: 0.9;
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.bg-no-repeat {
  background-repeat: no-repeat;
}

.p-6 {
  padding: 1.5rem;
}

.p-2 {
  padding: 0.5rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-7 {
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}

.pt-20 {
  padding-top: 5rem;
}

.pt-10 {
  padding-top: 2.5rem;
}

.pt-40 {
  padding-top: 10rem;
}

.pl-10 {
  padding-left: 2.5rem;
}

.pt-32 {
  padding-top: 8rem;
}

.pr-10 {
  padding-right: 2.5rem;
}

.pb-5 {
  padding-bottom: 1.25rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-justify {
  text-align: justify;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-9xl {
  font-size: 8rem;
  line-height: 1;
}

.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.font-light {
  font-weight: 300;
}

.uppercase {
  text-transform: uppercase;
}

.capitalize {
  text-transform: capitalize;
}

.tracking-wide {
  letter-spacing: 0.025em;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-slate-800 {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-slate-100 {
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity));
}

.text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(113 63 18 / var(--tw-text-opacity));
}

.opacity-80 {
  opacity: 0.8;
}

.opacity-90 {
  opacity: 0.9;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-0 {
  opacity: 0;
}

.opacity-70 {
  opacity: 0.7;
}

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.blur-sm {
  --tw-blur: blur(4px);
  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.text-button{
  color: #56237C;
}

.text-little{
  color: #56237C;
}

.home-default{
  font-family: 'Rubik', 'sans-serif';
  background-color: #17185c;
}

.footer{
  background-image: url("asset/image/background/footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}

.home-background{
  background-image: url("asset/image/background/bg-primary.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}

#projects {
}

#works {
}

.bg{
}

p{
  font-family: 'Quantico', sans-serif;
}

h1 {
  font-family: 'Secular One', sans-serif;
}

.text-littletittle{
  color: rgba(255, 167, 177, 1);
  font-family: 'rubik' , 'sans-serif';
}

#resume-button {
  position: relative;
  background: rgba(192, 158, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(192, 158, 255, 0.15);
}

html {
}

.dot-glow {
  box-shadow: 0px 0px 20px 3px rgb(145, 42, 255);
}

.text {
  font-size: 1.1rem;
}

.text-littletext{
  color: rgb(230, 199, 253);
}

.text-support {
  color: rgba(233, 0, 181, 1);
}

.spire-glass{
  background-image: url('');
  width : 30rem ;
  height : 30rem ;
  background: rgba(192, 158, 255, 0.1);
  box-shadow: 0px 0px 20px 10px rgb(24, 0, 32);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(192, 158, 255, 0.15);
}

.dot-glow {
  -webkit-animation-name: dot-glow;
          animation-name: dot-glow;
  -webkit-animation-duration: 3s ;
          animation-duration: 3s ;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  box-shadow: 0px 0px 20px 3px rgb(163, 77, 255);
}

.page-glow {
  background: rgba(192, 158, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(192, 158, 255, 0.15);
  gap: 0px 6px;
  left: 15%;
  top: 7rem;
}

.page-glow2 {
  background: rgba(192, 158, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(192, 158, 255, 0.15);
  gap: 0px 6px;
  right: 15%;
  bottom: 5rem;
}

@-webkit-keyframes dot-glow{
  0%   {
  }

  50% {
    opacity: 50%;
  }

  100% {
  }
}

@keyframes dot-glow{
  0%   {
  }

  50% {
    opacity: 50%;
  }

  100% {
  }
}

.spire-gradient {
  background: rgb(255,188,0);
  background: linear-gradient(90deg, rgba(255,188,0,1) 0%, rgba(255,0,214,0.6530987394957983) 56%, rgba(0,0,0,0) 100%);
}

.js-card {
  width : 8rem ;
  height : 8rem ;
  background: rgba(192, 158, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(15px);
          backdrop-filter: blur(15px);
  border: 1px solid rgba(192, 158, 255, 0.15);
  top : -2rem;
  -webkit-animation-name: js-card;
          animation-name: js-card;
  -webkit-animation-duration: 1.5s ;
          animation-duration: 1.5s ;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.react-card {
  width : 8rem ;
  height : 8rem ;
  background: rgba(192, 158, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(192, 158, 255, 0.15);
  -webkit-animation-name: react-card;
          animation-name: react-card;
  -webkit-animation-duration: 1.5s ;
          animation-duration: 1.5s ;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.html-card {
  width : 8rem ;
  height : 8rem ;
  background: rgba(192, 158, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(15px);
          backdrop-filter: blur(15px);
  border: 1px solid rgba(192, 158, 255, 0.15);
  bottom: -10px;
  -webkit-animation-name: html-card;
          animation-name: html-card;
  -webkit-animation-duration: 5s ;
          animation-duration: 5s ;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@-webkit-keyframes js-card {
  0%   {
  }

  50% {
    top: -25px;
  }

  100% {
  }
}

@keyframes js-card {
  0%   {
  }

  50% {
    top: -25px;
  }

  100% {
  }
}

@-webkit-keyframes react-card {
  0%   {
  }

  50% {
    top: 70px;
  }

  100% {
  }
}

@keyframes react-card {
  0%   {
  }

  50% {
    top: 70px;
  }

  100% {
  }
}

@-webkit-keyframes html-card {
  0%   {
  }

  50% {
    bottom: 1%;
  }

  100% {
  }
}

@keyframes html-card {
  0%   {
  }

  50% {
    bottom: 1%;
  }

  100% {
  }
}

.card-projects {
  background: rgb(141,30,168);
  background: linear-gradient(90deg, rgba(141,30,168,1) 14%, rgba(204,25,223,1) 69%, rgba(0,212,255,0) 100%);
}

.projects-prev{
  background:  
        linear-gradient(
          rgba(0, 0, 0, 0.378), 
          rgba(0, 0, 0, 0.508)
        ),
    url("./asset/image/background/reile.jpg");
}

.hover\:scale-105:hover {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:scale-110:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:bg-indigo-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(129 140 248 / var(--tw-bg-opacity));
}

.hover\:bg-yellow-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(202 138 4 / var(--tw-bg-opacity));
}

.hover\:font-bold:hover {
  font-weight: 700;
}

.hover\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.hover\:text-teal-600:hover {
  --tw-text-opacity: 1;
  color: rgb(13 148 136 / var(--tw-text-opacity));
}

.hover\:text-teal-400:hover {
  --tw-text-opacity: 1;
  color: rgb(45 212 191 / var(--tw-text-opacity));
}

.group:hover .group-hover\:text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

@media (min-width: 768px) {
  .md\:block {
    display: block;
  }

  .md\:flex {
    display: flex;
  }

  .md\:hidden {
    display: none;
  }

  .md\:h-96 {
    height: 24rem;
  }

  .md\:w-auto {
    width: auto;
  }

  .md\:w-40 {
    width: 10rem;
  }

  .md\:w-3\/5 {
    width: 60%;
  }

  .md\:w-11\/12 {
    width: 91.666667%;
  }

  .md\:w-4\/6 {
    width: 66.666667%;
  }

  .md\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media (min-width: 1024px) {
  .lg\:right-5 {
    right: 1.25rem;
  }

  .lg\:left-5 {
    left: 1.25rem;
  }

  .lg\:block {
    display: block;
  }

  .lg\:flex {
    display: flex;
  }

  .lg\:hidden {
    display: none;
  }

  .lg\:w-5\/6 {
    width: 83.333333%;
  }

  .lg\:w-11\/12 {
    width: 91.666667%;
  }

  .lg\:w-1\/2 {
    width: 50%;
  }

  .lg\:w-1\/3 {
    width: 33.333333%;
  }

  .lg\:w-3\/4 {
    width: 75%;
  }

  .lg\:gap-10 {
    gap: 2.5rem;
  }

  .lg\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .lg\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }
}

@media (min-width: 1280px) {
  .xl\:right-24 {
    right: 6rem;
  }

  .xl\:left-24 {
    left: 6rem;
  }

  .xl\:w-4\/6 {
    width: 66.666667%;
  }

  .xl\:w-10\/12 {
    width: 83.333333%;
  }

  .xl\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

  