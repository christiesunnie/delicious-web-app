# STYLE GUIDES

1.Naming Convention: BEM (Block-Element-Modifier)

BEM will be used for HTML, CSS, and SCSS:

Example:

<p></p>
<div class="gallery">
	<h1 class="gallery__title">Gallery</h1>
	<img class="gallery__image gallery__image--large"/>
	<img class="gallery__image" />
	<img class="gallery__image" />
</div> -->
</p>
2.SASS (SCSS)

Our project will be organized with the following SASS files:

<ul>
<li>style.scss</li>
<li>_header.scss</li>
<li>_home.scss</li>
<li>_contact.scss</li>
<li>_blog.scss</li>
<li>_footer.scss</li>
<li>_media.scss</li>
<li>_setup.scss</li>
<li>_variables.scss</li>
<li>_mixins.scss</li>
</ul>

3.Formating
Single tab (4 spaces) for indentation
No ID selectors
Files , folders and project repo follow a consisting naming convention (ie. kabob-case)
When using selecting multiple element with selectors, give each selector its own line
Double quotation marks for strings

4.Commenting Style
Comments at opening
Comment before each major section(header , main , etc)

5. Color
   Use hex codes
   The VERY bottom of the footer where the copyright is has a background colour 252525
   Black (2E2E2E) is the background colour of the footer
   Those little horizontal lines in the footer are 474747
   Brown Grey (999999) is the colour of the footer text
   The colour of the subscribe text box in the footer is actually 535353
   background green colour of the hungry clients section is DDED9A
   Those big quotes in that section are EEF6D1
   The header text is all 000000
   The accent grey in the contact section in the side section and the input boxes is F6F6F6
   The quote boxes near the bottom of the blog section are EFEFEF
   The deep green you see on the buttons and header text is 64A604

6. Media
   Use at least these three breakpoints:

<!-- Portrait tablet and small desktops -->

@media (max-width: 940px) {
}

 <!-- Landscape phone to portrait tablet  -->

@media (max-width: 768px) {
}

<!-- Landscape phones and down -->

@media (max-width: 480px) {
/
