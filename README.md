# STYLE GUIDES

1.Naming Convention: BEM (Block-Element-Modifier)

BEM will be used for HTML, CSS, and SCSS:
<! -- Example-->

<div class=”gallery”>
	<h1 class=”gallery__title”>Gallery</h1>
	<img class=”gallery__image gallery__image--large”/>
			<img class=”gallery__image” />
			<img class=”gallery__image” />
		</div>

2.SASS (SCSS)

Our project will be organized with the following SASS partials:

style.scss
\_header.scss
\_home.scss
\_contact.scss
\_blog.scss
\_footer.scss
\_media.scss
\_setup.scss
\_variables.scss
\_mixins.scss

3.Formating
Single tab (4 spaces) for indentation
No ID selectors
Files , folders and project repo follow a consisting naming convention (ie. kabob-case)
When using selecting multiple element with selectors, give each selector its own line
Double quotation marks for strings

4.Commenting Style
Comments at opening
Comment before each major section(header , main , etc)

medium green: #64A604 light green:  
Use hex codes

Colours:
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

Media

/_ Portrait tablet and small desktops _/
@media (max-width: 940px) {
}

/_ Landscape phone to portrait tablet _/
@media (max-width: 768px) {
}

/_ Landscape phones and down _/
@media (max-width: 480px) {
/
