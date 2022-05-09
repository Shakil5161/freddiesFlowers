import './styles/index.scss';
var homepageRedirectTest = {
    init: function() {
        this.mainCss();
        this.mainJs();
    },
    mainCss: function() {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '' +
            /* CSS will be imported here */
            '';
    },
    mainJs: function() {
        let emoji = `<span class='us-emoji'><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.2 38.4" style="enable-background:new 0 0 55.2 38.4" xml:space="preserve"><style type="text/css">.st0{fill:#B22234;} .st1{fill:#FFFFFF;} .st2{fill:#3C3B6E;}</style><g><path class="st0" d="M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.03C1.36,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.36,0,3.03,0L3.03,0z"/><path class="st1" d="M0.02,2.73h55.17c0.01,0.1,0.02,0.2,0.02,0.31v2.94H0V3.03C0,2.93,0.01,2.83,0.02,2.73L0.02,2.73z M55.2,8.67 v3.24H0V8.67H55.2L55.2,8.67z M55.2,14.61v3.24H0v-3.24H55.2L55.2,14.61z M55.2,20.55v3.24H0v-3.24H55.2L55.2,20.55z M55.2,26.49 v3.24H0v-3.24H55.2L55.2,26.49z M55.2,32.43v2.93c0,0.1-0.01,0.21-0.02,0.31H0.02C0.01,35.58,0,35.47,0,35.37v-2.93H55.2 L55.2,32.43z"/><path class="st2" d="M20.8,0v20.68H0V3.03C0,1.36,1.36,0,3.03,0H20.8L20.8,0L20.8,0z"/><polygon class="st1" points="1.23,2.86 1.92,5.01 0.1,3.68 2.36,3.68 0.53,5.01 1.23,2.86"/><polygon class="st1" points="1.23,7.02 1.92,9.17 0.1,7.84 2.36,7.84 0.53,9.17 1.23,7.02"/><polygon class="st1" points="1.23,11.18 1.92,13.33 0.1,12 2.36,12 0.53,13.33 1.23,11.18"/><polygon class="st1" points="1.23,15.34 1.92,17.49 0.1,16.16 2.36,16.16 0.53,17.49 1.23,15.34"/><polygon class="st1" points="3.67,0.78 4.37,2.93 2.54,1.6 4.81,1.6 2.97,2.93 3.67,0.78"/><polygon class="st1" points="3.67,4.94 4.37,7.09 2.54,5.76 4.81,5.76 2.97,7.09 3.67,4.94"/><polygon class="st1" points="3.67,9.1 4.37,11.25 2.54,9.92 4.81,9.92 2.97,11.25 3.67,9.1"/><polygon class="st1" points="3.67,13.26 4.37,15.41 2.54,14.08 4.81,14.08 2.97,15.41 3.67,13.26"/><polygon class="st1" points="3.67,17.42 4.37,19.57 2.54,18.24 4.81,18.24 2.97,19.57 3.67,17.42"/><polygon class="st1" points="6.12,2.86 6.82,5.01 4.99,3.68 7.25,3.68 5.42,5.01 6.12,2.86"/><polygon class="st1" points="6.12,7.02 6.82,9.17 4.99,7.84 7.25,7.84 5.42,9.17 6.12,7.02"/><polygon class="st1" points="6.12,11.18 6.82,13.33 4.99,12 7.25,12 5.42,13.33 6.12,11.18"/><polygon class="st1" points="6.12,15.34 6.82,17.49 4.99,16.16 7.25,16.16 5.42,17.49 6.12,15.34"/><polygon class="st1" points="8.57,0.78 9.26,2.93 7.44,1.6 9.7,1.6 7.87,2.93 8.57,0.78"/><polygon class="st1" points="8.57,4.94 9.26,7.09 7.44,5.76 9.7,5.76 7.87,7.09 8.57,4.94"/><polygon class="st1" points="8.57,9.1 9.26,11.25 7.44,9.92 9.7,9.92 7.87,11.25 8.57,9.1"/><polygon class="st1" points="8.57,13.26 9.26,15.41 7.44,14.08 9.7,14.08 7.87,15.41 8.57,13.26"/><polygon class="st1" points="8.57,17.42 9.26,19.57 7.44,18.24 9.7,18.24 7.87,19.57 8.57,17.42"/><polygon class="st1" points="11.01,2.86 11.71,5.01 9.88,3.68 12.14,3.68 10.31,5.01 11.01,2.86"/><polygon class="st1" points="11.01,7.02 11.71,9.17 9.88,7.84 12.14,7.84 10.31,9.17 11.01,7.02"/><polygon class="st1" points="11.01,11.18 11.71,13.33 9.88,12 12.14,12 10.31,13.33 11.01,11.18"/><polygon class="st1" points="11.01,15.34 11.71,17.49 9.88,16.16 12.14,16.16 10.31,17.49 11.01,15.34"/><polygon class="st1" points="13.46,0.78 14.16,2.93 12.33,1.6 14.59,1.6 12.76,2.93 13.46,0.78"/><polygon class="st1" points="13.46,4.94 14.16,7.09 12.33,5.76 14.59,5.76 12.76,7.09 13.46,4.94"/><polygon class="st1" points="13.46,9.1 14.16,11.25 12.33,9.92 14.59,9.92 12.76,11.25 13.46,9.1"/><polygon class="st1" points="13.46,13.26 14.16,15.41 12.33,14.08 14.59,14.08 12.76,15.41 13.46,13.26"/><polygon class="st1" points="13.46,17.42 14.16,19.57 12.33,18.24 14.59,18.24 12.76,19.57 13.46,17.42"/><polygon class="st1" points="15.9,2.86 16.6,5.01 14.77,3.68 17.03,3.68 15.21,5.01 15.9,2.86"/><polygon class="st1" points="15.9,7.02 16.6,9.17 14.77,7.84 17.03,7.84 15.21,9.17 15.9,7.02"/><polygon class="st1" points="15.9,11.18 16.6,13.33 14.77,12 17.03,12 15.21,13.33 15.9,11.18"/><polygon class="st1" points="15.9,15.34 16.6,17.49 14.77,16.16 17.03,16.16 15.21,17.49 15.9,15.34"/><polygon class="st1" points="18.35,0.78 19.05,2.93 17.22,1.6 19.48,1.6 17.65,2.93 18.35,0.78"/><polygon class="st1" points="18.35,4.94 19.05,7.09 17.22,5.76 19.48,5.76 17.65,7.09 18.35,4.94"/><polygon class="st1" points="18.35,9.1 19.05,11.25 17.22,9.92 19.48,9.92 17.65,11.25 18.35,9.1"/><polygon class="st1" points="18.35,13.26 19.05,15.41 17.22,14.08 19.48,14.08 17.65,15.41 18.35,13.26"/><polygon class="st1" points="18.35,17.42 19.05,19.57 17.22,18.24 19.48,18.24 17.65,19.57 18.35,17.42"/></g></svg> ☀️ </span>`

        this.heroSection(emoji);
        this.freddiesSection(emoji);
        this.deliveriesSection();
        this.millionBoxSection();
        this.footerSection();
        this.forSwiperX();
        
       
    },
    heroSection: function(usEmoji){
       let heroHtml = ` <section class="hero-section">
       <div class="left-img">
           <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/hero-left.png" alt="" srcset="">
       </div>
       <div class="h-main-content">
           <h1 class="heading">
               Brighten your home, with fresh flower deliveries
           </h1>
           <p class="paragraph">
               Hand-picked by <a href="#">Freddie</a> — who (starting from his mum’s garden) has now delivered over <b>3 million boxes worldwide</b>
           </p>
           <div class="h-btn">
               
                   <a href="https://us.freddiesflowers.com/register/account">OK, I’ll try a free box</a>
               
                   <a href="https://us.freddiesflowers.com/the-flowers">Tell me more</a>
               
           </div>
           <p class="emoji-text">${usEmoji}Now delivering in sunny California</p>
       </div>
       <div class="right-img">
           <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/hero-right.png" alt="" srcset="">
       </div>
       <div class="hero-img">
       <div><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-20-1.png" alt="" srcset=""></div>
            <div><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-21-1.png" alt="" srcset=""></div>
            <div><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-22-1.png" alt="" srcset=""></div>
            <div><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-24-7.png" alt="" srcset=""></div>
   </div>
   <div class="mobile-tp">
        <a href="https://www.trustpilot.com/review/www.freddiesflowers.com" target="_blank">
          <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Screenshot_6.png" alt="trustpilot">
        </a> 
        	
        </div>
   </section>`  

        document.querySelector('.main.homepage-layout').insertAdjacentHTML('afterbegin',heroHtml);
        this.forTrustpilot();
       
    },

    freddiesSection: function(usEmoji){
        let freddiesHtml = `<section class="freddies-section">
        <div class="left-img">
            <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/f-2.png" alt="" srcset="">
        </div>
        <div class="freddies-content">
            <div class="f-bnr"><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/Image.png" alt="" srcset=""></div>
            <h1 class="heading">
                Hi, I’m Freddie...
            </h1>
            <p class="paragraph">
                I’m from England, the land of fish & chips and cups ‘o’ tea. I started this business picking flowers in my mums garden. Now I pick the <b>very freshest, most seasonal flowers </b> each week to help you create beautiful arrangements for your homes and offices.
            </p>
            <p class="emoji-text">${usEmoji} Now delivering in sunny California</p>
        </div>
        <div class="right-img">
            <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-27.png" alt="" srcset="">
        </div>
    </section>`

    document.querySelector('.main.homepage-layout').insertAdjacentHTML('beforeend',freddiesHtml);

    },

    deliveriesSection: function() {

        let deliveriesHtml = `<section class="deliveries-section">
        <div class="d-up-arrow">
            <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/arrow.png" alt="" srcset="">
        </div>
        <div class="deliveries-content">
            <div class="d-left-img"><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/image-26.png" alt="" srcset=""></div>
            <h1 class="heading">
                What to expect from my flower deliveries
            </h1>
            <p class="paragraph">
                Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes mus.
            </p>
        </div>
        <div class="deliveries-cards">
            <div class="d-card">
                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Group-31.png" alt="" srcset="">
                <p class="paragraph">It’s all about what’s fresh and in season that week — including stems you won’t find anywhere else.</p>
            </div>
            <div class="d-card">
                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Group-31-1.png" alt="" srcset="">
                <p class="paragraph">When you sign up you can choose how often you want them delivered. Most people get them weekly.</p>
            </div>
            <div class="d-card">
                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Group-31-2.png" alt="" srcset="">
                <p class="paragraph">Each box comes with easy to follow instructions for that delivery.  You’ll learn how to arrange as we go.</p>
            </div>
            <div class="d-card">
                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Group-31-3.png" alt="" srcset="">
                <p class="paragraph">We’ll deliver them on the day of the week the flowers are freshest in your area</p>
            </div>
            <div class="d-right-img">
                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Embellishment.png" alt="" srcset="">
            </div>
        </div>
        <div class="deliveries-frame">
            <div class="frame-img">
                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/flexible-frame.png" alt="" srcset="">
            </div>
            <div class="frame-contant">
                <div class="d-f-contant">
                    <div>
                        <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/image-31.png" alt="" srcset="">
                    </div>
                    <h1 class="heading">
                        Carbon neutral deliveries
                    </h1>
                    <p class="paragraph">
                        Biodegradable packaging, sustainable flowers and clean deliveries
                    </p>
                </div>
                <div class="d-f-contant">
                    <div>
                        <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Group-1.png" alt="" srcset="">
                    </div>
                    <h1 class="heading">
                        Unique & wonderful flowers
                    </h1>
                    <p class="paragraph">
                        Since our humble start in 2005, we’ve now delivered millions of boxes worldwide
                    </p>
                </div>
                <div class="d-f-contant">
                    <div>
                        <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/icon.png" alt="" srcset="">
                    </div>
                    <h1 class="heading">
                        Pause or cancel anytime
                    </h1>
                    <p class="paragraph">
                        You can skip, pause or cancel. No dramas. Just beatiful fresh flowers
                    </p>
                </div>
            </div>
        </div>
        <div class="d-bottom-arrow">
            <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/arrow-2.png" alt="" srcset="">
        </div>
    </section>`

    document.querySelector('.main.homepage-layout').insertAdjacentHTML('beforeend',deliveriesHtml);

    },

    millionBoxSection: function(){
        
		var reviewArr = [
			{
				"img": "https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-24.png",
				"text": "“This was my first flowers from Freddie's flowers, they were free with a voucher, they were beautiful and I still have some after a week”",
				"name": "Cheryl"
			},
			{
				"img": "https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-24-2.png",
				"text": "“They're a joy to receive and the quality is consistently good... Such a change from supermarket flowers and considerably more reasonably priced than florists.”",
				"name": "Deborah H."
			},
			{
				"img": "https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-24-1.png",
				"text": "“Absolutely stunning flowers! The arranging instructions were easy to follow and made my bouquet look so professional! Worth the money!”",
				"name": "Abigail S."
			},
			{
				"img": "https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-24-3.png",
				"text": "“Wonderful fresh flowers, there is flexibility about how frequently you want them. Packaging is great! All in all worth the money”",
				"name": "Beatriz A."
			},
			{
				"img": "https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-24-4.png",
				"text": "“Such Beautiful flowers that develop as they open. Amazing quality.Arranging them has been very therapeutic”",
				"name": "Sarah W."
			},
			{
				"img": "https://sandbox.echologyx.com/wp-content/uploads/2022/04/image-24-5.png",
				"text": "“Absolutely stunning flowers, one week on and they are still beautiful. Great tips on how to arrange. I like the variety of flowers and foliage”",
				"name": "Elizabeth D."
			}
		]
		
		var reviewStar = `<svg width="62" height="13" viewBox="0 0 62 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1074_112)">
<path d="M6.20002 9.4343L2.55597 11.4741L3.36972 7.37797L0.303299 4.5425L4.45058 4.05063L6.20002 0.258301L7.94945 4.05063L12.0967 4.5425L9.03032 7.37797L9.84407 11.4741L6.20002 9.4343Z" fill="#3BC188"/>
</g>
<g clip-path="url(#clip1_1074_112)">
<path d="M18.6001 9.4343L14.9561 11.4741L15.7698 7.37797L12.7034 4.5425L16.8507 4.05063L18.6001 0.258301L20.3496 4.05063L24.4968 4.5425L21.4304 7.37797L22.2442 11.4741L18.6001 9.4343Z" fill="#3BC188"/>
</g>
<g clip-path="url(#clip2_1074_112)">
<path d="M30.9998 9.4343L27.3557 11.4741L28.1695 7.37797L25.1031 4.5425L29.2503 4.05063L30.9998 0.258301L32.7492 4.05063L36.8965 4.5425L33.8301 7.37797L34.6438 11.4741L30.9998 9.4343Z" fill="#3BC188"/>
</g>
<g clip-path="url(#clip3_1074_112)">
<path d="M43.4003 9.4343L39.7562 11.4741L40.57 7.37797L37.5035 4.5425L41.6508 4.05063L43.4003 0.258301L45.1497 4.05063L49.297 4.5425L46.2306 7.37797L47.0443 11.4741L43.4003 9.4343Z" fill="#3BC188"/>
</g>
<g clip-path="url(#clip4_1074_112)">
<path d="M55.7999 9.4343L52.1559 11.4741L52.9696 7.37797L49.9032 4.5425L54.0505 4.05063L55.7999 0.258301L57.5494 4.05063L61.6966 4.5425L58.6302 7.37797L59.444 11.4741L55.7999 9.4343Z" fill="#3BC188"/>
</g>
<defs>
<clipPath id="clip0_1074_112">
<rect width="12.4" height="12.4" fill="white"/>
</clipPath>
<clipPath id="clip1_1074_112">
<rect width="12.4" height="12.4" fill="white" transform="translate(12.4)"/>
</clipPath>
<clipPath id="clip2_1074_112">
<rect width="12.4" height="12.4" fill="white" transform="translate(24.7998)"/>
</clipPath>
<clipPath id="clip3_1074_112">
<rect width="12.4" height="12.4" fill="white" transform="translate(37.2002)"/>
</clipPath>
<clipPath id="clip4_1074_112">
<rect width="12.4" height="12.4" fill="white" transform="translate(49.6)"/>
</clipPath>
</defs>
</svg>
`

var nextArrow = `<svg data-v-14be696b="" id="ARROW_CIRCLE" data-name="ARROW CIRCLE" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 46 46"><circle id="Ellipse_1" data-name="Ellipse 1" cx="23" cy="23" r="23" fill="#FFFFFFCC"></circle><g id="ARROW" transform="translate(32.135 34.789) rotate(180)"><path id="Path_18" data-name="Path 18" d="M23.478,1.021a2.076,2.076,0,0,0-3.685.225c-.034.029-.067.056-.124.113A4.029,4.029,0,0,0,18.8,2.4a15.1,15.1,0,0,1-1.174,1.427c-.951,1-1.964,1.953-2.824,3.027A34.2,34.2,0,0,0,12.519,10.2c-.17.272-.351.539-.527.809a5.293,5.293,0,0,0-.565-.736C10.469,9.259,9.366,8.4,8.385,7.415,7.442,6.466,6.545,5.473,5.626,4.5c-.442-.466-.86-.953-1.29-1.428A14.509,14.509,0,0,1,3.158,1.84a1.814,1.814,0,0,0-2.4-.484,1.656,1.656,0,0,0-.5,2.3,19.694,19.694,0,0,0,1.332,1.8c.483.686.967,1.375,1.494,2.031a34.808,34.808,0,0,0,2.951,3.3A37.858,37.858,0,0,0,9,13.388a6.515,6.515,0,0,0,1.915,1.16c.47.169.7.348,1.263.533a1.364,1.364,0,0,0,1.653-.906.12.12,0,0,1,0-.022l.171-.119a7.5,7.5,0,0,0,.713-.638,19.192,19.192,0,0,0,1.464-1.764,38.08,38.08,0,0,1,2.676-3.015c1.013-1.035,2.086-2,3.028-3.1C22.945,4.288,24.444,2.863,23.478,1.021Z" transform="translate(15.135) rotate(90)"></path></g></svg>`


var prevArrow = ` <svg data-v-14be696b="" id="ARROW_CIRCLE" data-name="ARROW CIRCLE" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 46 46"><circle id="Ellipse_1" data-name="Ellipse 1" cx="23" cy="23" r="23" fill="#FFFFFFCC"></circle><g id="ARROW" transform="translate(32.135 34.789) rotate(180)"><path id="Path_18" data-name="Path 18" d="M23.478,1.021a2.076,2.076,0,0,0-3.685.225c-.034.029-.067.056-.124.113A4.029,4.029,0,0,0,18.8,2.4a15.1,15.1,0,0,1-1.174,1.427c-.951,1-1.964,1.953-2.824,3.027A34.2,34.2,0,0,0,12.519,10.2c-.17.272-.351.539-.527.809a5.293,5.293,0,0,0-.565-.736C10.469,9.259,9.366,8.4,8.385,7.415,7.442,6.466,6.545,5.473,5.626,4.5c-.442-.466-.86-.953-1.29-1.428A14.509,14.509,0,0,1,3.158,1.84a1.814,1.814,0,0,0-2.4-.484,1.656,1.656,0,0,0-.5,2.3,19.694,19.694,0,0,0,1.332,1.8c.483.686.967,1.375,1.494,2.031a34.808,34.808,0,0,0,2.951,3.3A37.858,37.858,0,0,0,9,13.388a6.515,6.515,0,0,0,1.915,1.16c.47.169.7.348,1.263.533a1.364,1.364,0,0,0,1.653-.906.12.12,0,0,1,0-.022l.171-.119a7.5,7.5,0,0,0,.713-.638,19.192,19.192,0,0,0,1.464-1.764,38.08,38.08,0,0,1,2.676-3.015c1.013-1.035,2.086-2,3.028-3.1C22.945,4.288,24.444,2.863,23.478,1.021Z" transform="translate(15.135) rotate(90)"></path></g></svg>`
		
		var htmlContent = `<section class="ugc-section">
        <div class="ugc-heading">
            <div class="box-img">
                <img width="100%" src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/book.png" alt="3 million boxes">
            </div>

            <h1 type="heading" class="stand-out-text--heading heading">Over 3 million boxes shipped worldwide</h1>

            <p type="paragraph" class="stand-out-text--text paragraph paragraph--medium">Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod lorem dolor sit amet tempus mollis.</p>

        </div>
        <div class="ugc-slide ">
            <div class="first-slide">
                <div class="swiper">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/TSIMPPrcRmqNzDmTALXC" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/idE3rlJSuKhVxiUcS7uI" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/VpPvINCTTieEg199WMQ6" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/tLNu8LiRw6z63lllmr1Q" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/y0xAbIpOQoy34ZYFe999" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/RY4OwdnDQF6fQd5qv1qw" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                     
                    </div>
                    <div class="swiper-button-next first-slide-next">
                      ${nextArrow}
                    </div>
                    <div class="swiper-button-prev first-slide-prev">
                      ${prevArrow}
                    </div>
                  </div>
            </div>

            <div class="second-slide">
                <div class="swiper">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/i0wJyEcTBe4PrWdgAlMA" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/u7lkir4dQCCYgGp1OrcK" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/YyuAu8W2SmmqPuXeF3pN" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/B9vxWXIMR6UHdBmEB8wQ" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/B8vvMzBQFKCMcENlb76V" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                      <div class="swiper-slide"><img src="https://cdn.buttercms.com/TSIMPPrcRmqNzDmTALXC" alt="Recent flowers image" class="carousel--slide-image">
                      </div>
                    </div>
                    <div class="swiper-button-next first-slide-next">
                      ${nextArrow}
                    </div>
                    <div class="swiper-button-prev first-slide-prev">
                        ${prevArrow}
                    </div>
                  </div>
            </div>
        </div>
    
    
 <section class="ugc-slide-for-mobile">
  <div class="first-mb-slide">
    <div>
      <ul>
        <li>
              <img src="https://cdn.buttercms.com/ixSn1T4BSRyOnzMGPa2E" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
              <img src="https://cdn.buttercms.com/y0xAbIpOQoy34ZYFe999" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
              <img src="https://cdn.buttercms.com/VpPvINCTTieEg199WMQ6" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
               <img src="https://cdn.buttercms.com/tLNu8LiRw6z63lllmr1Q" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
              <img src="https://cdn.buttercms.com/idE3rlJSuKhVxiUcS7uI" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
              <img src="https://cdn.buttercms.com/onylF3SOTjyIzDbQau4i" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
              <img src="https://cdn.buttercms.com/y0xAbIpOQoy34ZYFe999" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
              <img src="https://cdn.buttercms.com/VpPvINCTTieEg199WMQ6" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
               <img src="https://cdn.buttercms.com/tLNu8LiRw6z63lllmr1Q" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
         <li>
              <img src="https://cdn.buttercms.com/B9vxWXIMR6UHdBmEB8wQ" />
            </li>
      </ul>
    </div>
    
  </div>
  
  <div class="second-mb-slide">
    <div>
      <ul>
        <li>
           <img src="https://cdn.buttercms.com/i0wJyEcTBe4PrWdgAlMA" />
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
           <img src="https://cdn.buttercms.com/u7lkir4dQCCYgGp1OrcK" />
        </li>
      </ul>
    </div>
    <div>
      <ul>
         <li>
              <img src="https://cdn.buttercms.com/YyuAu8W2SmmqPuXeF3pN" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
         <li>
              <img src="https://cdn.buttercms.com/B9vxWXIMR6UHdBmEB8wQ" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
         <li>
              <img src="https://cdn.buttercms.com/B8vvMzBQFKCMcENlb76V" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
           <img src="https://cdn.buttercms.com/i0wJyEcTBe4PrWdgAlMA" />
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
           <img src="https://cdn.buttercms.com/u7lkir4dQCCYgGp1OrcK" />
        </li>
      </ul>
    </div>
    <div>
      <ul>
         <li>
              <img src="https://cdn.buttercms.com/YyuAu8W2SmmqPuXeF3pN" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
         <li>
              <img src="https://cdn.buttercms.com/B9vxWXIMR6UHdBmEB8wQ" />
            </li>
      </ul>
    </div>
    <div>
      <ul>
         <li>
              <img src="https://cdn.buttercms.com/B8vvMzBQFKCMcENlb76V" />
            </li>
      </ul>
    </div>
  </div>
</section>
    
        <div class="ugc-review">
        
        ${reviewArr.map(name => ` <div class="review">
                <div class="rw-img">
                    <img src="${name.img}" alt="" srcset="">
                </div>
                <div class="rw-description">
                    <div class="rw-star">
                        ${reviewStar}
                    </div>
                    <div class="rw-text">
                        <p>
                        	${name.text}
                        </p>
                    </div>
                    <div class="rw-name">
                        <p>${name.name}</p>
                    </div>
                </div>
            </div>
            `).join('')}
           
        </div>
        <div class="million-tp">
        <a href="https://www.trustpilot.com/review/www.freddiesflowers.com" target="_blank">
          <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/Screenshot_6.png" alt="trustpilot">
        </a> 
        	
        </div>
    </section>`

    document.querySelector('.main.homepage-layout').insertAdjacentHTML('beforeend',htmlContent);
    
    },

    footerSection: function(){
        let footerHtml = `    <section class="f-footer-section">
        <div class="f-footer">
            <div class="f-footer-img">
                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/05/image-21.png" alt="" srcset="">
            </div>
            <div class="f-footer-contant">
                <h1 class="heading">
                    Order your first box today and get 2 vases absolutely FREE!
                </h1>
                <p class="paragraph">
                    You’ll get 50% off your first box, a long vase with your first delivery, and a compact vase with your second. Happy days!
                </p>
                <div class="h-btn">
                    <a href="https://us.freddiesflowers.com/register/account">Get 50% off my first box</a>
                </div>
            </div>
        </div>
    </section>`
    document.querySelector('.main.homepage-layout').insertAdjacentHTML('beforeend',footerHtml);

    },

    forSwiperX: function(){
		  
        var injectScript = (src) => new Promise((resolve, reject) => {
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', resolve);
            script.addEventListener('error', (e) => reject(e));
            document.head.appendChild(script);
        });
        
        var cssFile1 = document.createElement('link');
        cssFile1.rel = 'stylesheet';
        cssFile1.href = "https://unpkg.com/swiper/swiper-bundle.min.css";  // or path for file {themes('/styles/mobile.css')}
        document.head.appendChild(cssFile1);
        injectScript('https://unpkg.com/swiper@8/swiper-bundle.min.js')
            .then(() => {
                // console.log('Script loaded!');
                var swiperX = new Swiper('.swiper', {
                    // Optional parameters
                    slidesPerView: 3,
                    simulateTouch: false,
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        950: {
                          slidesPerView: 4,
                          spaceBetween: 10
                        },
                        1050: {
                          slidesPerView: 4,
                          spaceBetween: 10
                        },
                        1250: {
                          slidesPerView: 5,
                          spaceBetween: 10
                        },
                        1450: {
                          slidesPerView: 5,
                          spaceBetween: 10
                        },
                        1650: {
                          slidesPerView: 6,
                          spaceBetween: 10
                        },
                        // when window width is >= 640px
                        1990: {
                          slidesPerView: 8,
                          spaceBetween: 10
                        }
                      }
                     // autoplay: {
                        // delay: 2000,
                        
                     //},
                     //waitForTransition: false,
                     //disableOnInteraction: false,
                });
            }).catch((error) => {
                console.error(error);
            });

            
    },

    forTrustpilot: function(){
		(function loadTrustpilot() {
        if (window.Trustpilot) {
          var DesltopTrustpilotHtml =

          `<div data-v-351cf519="" data-locale="en-US" data-template-id="5419b6ffb0d04a076446a9af" data-tags="" data-businessunit-id="596ca0ad0000ff0005a6d68d" data-style-height="40px" data-style-width="100%" data-theme="light" class="trustpilot-widget" style="position: relative;" id="trustbox">
            <a href="https://www.trustpilot.com/review/www.freddiesflowers.com" target="_blank"
                   rel="noopener">Trustpilot 
               </a> 
            </div>`;
		
		document.querySelector(".hero-section").insertAdjacentHTML("beforeend", DesltopTrustpilotHtml);

          const trustbox = document.getElementById("trustbox");
          window.Trustpilot.loadFromElement(trustbox);
        } else {
          setTimeout(loadTrustpilot, 25);
        }
      })();     
	},
    
};

(function pollOnload() {
    if (document.querySelector('.main.homepage-layout') && !document.querySelector(".hero-section")) {
        try {
            homepageRedirectTest.init();
            console.log(`This is a EchoLogyx variation -- running on ${new Date().toLocaleDateString()}`);
        } catch (error) {
            console.log('Initialization error:', error);
        }
    } else {
        setTimeout(pollOnload, 25);
    }
})();


let lastUrl = location.href;
new MutationObserver(() => {
const url = location.href;
    if (url !== lastUrl) { 
        lastUrl = url;
     (function reRender() {
		if (document.querySelector(".main.homepage-layout") && !document.querySelector(".hero-section")) {
			try {
				homepageRedirectTest.init();
			} catch (error) {}
		} else {
			setTimeout(reRender, 25);
		}
	})();
      
    }else {

    }
}).observe(document, {subtree: true, childList: true});