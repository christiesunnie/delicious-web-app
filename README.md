# STYLE GUIDES

CSS

1. Formatting

Use soft tabs (1 ) for indentation.
Prefer dashes over camelCasing in class names.
Underscores and PascalCasing are okay if you are using BEM.
Do not use ID selectors.
When using multiple selectors in a rule declaration, give each selector its own line.
Put a space before the opening brace { in rule declarations.
In properties, put a space after, but not before, the : character.
Put closing braces } of rule declarations on a new line.
Put blank lines between rule declarations.
Property-value pairs should be listed starting on the line after the opening curly brace. Each pair should:
be on its own line;
be indented one level;
have a single space after the colon that separates the property name from the property value; and
end in a semicolon.

<!-- Example -->
<!-- .avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
} -->

For properties with multiple values, separate each value with a single space following the comma(s).

 <!-- font-family: Helvetica, sans-serif; -->

If a single value contains any spaces, that value must be enclosed within double quotation marks.

 <!-- font-family: "Lucida Grande", Helvetica, sans-serif; -->

Colors
When denoting color using hexadecimal notation, use all capital letters. Both three-digit and six-digit hexadecimal notation are acceptable;

Dimensions
When denoting the dimensions — that is, the width or height — of an element or its margins, borders, or padding, specify the units in either em, px, or %. If the value of the width or height is 0, do not specify units.

2. Comments
   Only C style comments (/_ Comment goes here. _/) are valid for CSS code.

3. Naming convention

BEM, or “Block-Element-Modifier”, is a naming convention for classes in HTML and CSS.

<!-- Example -->
<!-- <div class="gallery">
  <h1 class="gallery__title">Gallery</h1>
  <img class="gallery__image gallery__image--large" />
  <img class="gallery__image" />
  <img class="gallery__image" />
</div> -->

SASS
Project is organized using Sass partials (minimum 2)

1. Syntax

Use the .scss syntax

style.scss
\_header.scss
\_footer.scss
\_media.scss
\_setup.scss
\_variables.scss
\_mixins.scss

2. Ordering of property declarations

List all standard property declarations, anything that isn't an @include or a nested selector firstly, then grouping @includes at the end

Nested selectors: Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Do not nest selectors more than three levels deep! Never nest ID selectors!

3. Variables
   Naming convention

4. Mixins
   Mixins should be used to DRY up your code, add clarity, or abstract complexity

Folders
Files, folders and project repo follow a consisting naming convention (ie. kabob-case)

Design measurement, fontSize
Typo:
heading, p, other elements - fontSize
spacing: line height, font weight, letter spacing
font-family for different elements

Measurement:
wrapper - max-width
padding, margin
