<div id="contact">
	<div class="contact-sec">
		<form method="post" action="./features/contact-mailer.php">
	        <div>
	            <input type="text" name="contact-form-name" id="contact-form-name" onfocus="clearBtnAnimation()" placeholder="Name" >
	        </div>
	        <div>
	            <input type="email" name="contact-form-email" id="contact-form-email" onfocus="clearBtnAnimation()" placeholder="Email" >
	        </div>
	        <div>
	            <textarea name="contact-form-textarea" id="contact-form-textarea" onfocus="clearBtnAnimation()" placeholder="Type your Message here"></textarea>
	        </div>
	        <div>
	            <button type="submit" class="button
	                <?php
	                if (isset($_GET['contactcode'])) {
	                    if ($_GET['contactcode'] == 1) {
	                        echo " animate success";
	                    }elseif($_GET['contactcode']  == 0){
	                        echo " animate error";
	                    }
	                }
	                ?> "
	                 id="contact-btn" onclick="addAnimation()">Submit</button>                         

	        </div>
	    </form>

	    <div class="contact-social-media">
	        <ul>
	            <a href="https://www.facebook.com/chinthaDA" target="_blank">
	                <li>
	                    <i class="fab fa-3x fa-facebook"></i>
	                </li>
	            </a>

	            <a href="https://www.instagram.com/chintha.ka/" target="_blank">
	                <li>
	                    <i class="fab fa-3x fa-instagram"></i>
	                </li>
	            </a>

	            <a href="https://twitter.com/D3m0nDrag0n" target="_blank">
	                <li>
	                    <i class="fab fa-3x fa-twitter"></i>
	                </li>
	            </a>

	            <a href="https://www.youtube.com/channel/UCm4HcpRNJZl9lYTEZB4YPAg" target="_blank">
	                <li>
	                    <i class="fab fa-3x fa-youtube"></i>
	                </li>
	            </a>

	            <a href="https://www.linkedin.com/in/lasantha-chinthaka/" target="_blank">
	                <li>
	                    <i class="fab fa-3x fa-linkedin"></i>
	                </li>
	            </a>

	            <a href="https://github.com/lchinthaka" target="_blank">
	                <li>
	                    <i class="fab fa-3x fa-github"></i>
	                </li>
	            </a>
	        </ul>                        
	    </div>
	</div>
</div>