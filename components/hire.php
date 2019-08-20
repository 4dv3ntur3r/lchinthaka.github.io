<div id="hire">
	<div class="hire-sec">
        <form action="./features/hire-mailer.php">
            <ul class="hireme-checkbox">
                <div class="hire-div-one" id="hire-div-one">
                <li>
                    <input type="checkbox" name="hire-items[]" id="web-design" value="Web Design">
                    <label for="web-design">Web Design</label>
            </li>
            <li>
                <input type="checkbox" name="hire-items[]" id="app-design" value="Application Design">
                <label for="app-design">Application Design</label>
            </li>
            <li>
                <input type="checkbox" name="hire-items[]" id="graphic-design" value="Graphic Design">
                <label for="graphic-design">Graphic Design</label>
            </li>
            </div>
            <div class="hire-div-two" id="hire-div-two">
            <li>
                <input type="checkbox" name="hire-items[]" id="web-dev" value="Web Development">
                <label for="web-dev">Web Development</label>
            </li>
            <li>
                <input type="checkbox" name="hire-items[]" id="app-dev" value="app Development">
                <label for="app-dev">Application Development</label>
            </li>
            <li>
                <input type="checkbox" name="hire-items[]" id="system-dev" value="System Development">
                <label for="system-dev">System Development</label>
            </li>
            </div>
            <div class="hire-div-three" id="hire-div-three">
            <li>
                <input type="checkbox" name="hire-items[]" id="other-work" value="Other" onclick="isHireOtherChecked()">
                <label for="other-work" style="text-align:center">Other</label>
            </li>
            </div>
            <div id="other-comp">
                <input type="text" name="hire-specify" id="hire-specify" onfocus="clearHirePopUp()" placeholder="Specify Your Requirement">
            </div>
            <div id="hire-div-five">
                <input type="text" name="hire-name" id="hire-name" onfocus="clearHirePopUp()" placeholder="Name">
                <input type="email" name="hire-email" id="hire-email" onfocus="clearHirePopUp()" placeholder="E mail">
            </div>
            <div id="hire-form-btn">
                <button id="alertPersistent" type="submit" class="button" onclick="alertFunction()">Hire Me</button>
            </div>
        	</ul>
    	</form>
	</div>

    <div class="alert hide
        <?php
            if (isset($_GET['hirecode'])) {
                if ($_GET['hirecode'] == 1) {
                    echo "success show";
                }elseif ($_GET['hirecode'] == 0) {
                    echo "error show";
                }
            }
        ?>">
        <?php
            if (isset($_GET['hirecode'])) {
                if ($_GET['hirecode'] == 1) {
                    echo "Message has been sent";
                }elseif ($_GET['hirecode'] == 0) {
                    echo "Error";
                }
            }
        ?>
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    </div>

</div>