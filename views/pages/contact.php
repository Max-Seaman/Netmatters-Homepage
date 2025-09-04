<?php

require 'views/layout/head.php';

require 'views/layout/header.php';

?>

        <div class="current-page">
            <div class="container">
                <p><a href="/">Home</a> / Our Offices</p>
            </div>
        </div>
        
        <div class="container">
            <div class="office-heading">
                <div class="container">
                    <h1>Our Offices</h1>
                </div>
            </div>
            <div class="locations">
                <div class="card">
                    <img src="img/cambridge.png">
                    <div class="info">
                        <a class="header" href="#">Cambridge Office</a>
                        <p>
                            Unit 1.31,<br>
                            St John's Innovation Centre,<br>
                            Cowley Road, Milton,<br>
                            Cambridge,<br>
                            CB4 0WS
                        </p>
                        <a class="phonenumbers" href="#">01223 37 57 72</a>
                        <a class="btn btn-5 hover-btn-5">View More</a>
                    </div>
                </div>
                <div class="card">
                    <img src="img/wymondham.png">
                    <div class="info">
                        <a class="header" href="#">Wymondham Office</a>
                        <p>
                            Unit 15,<br>
                            Penfold Drive,<br>
                            Gateway 11 Business Park,<br>
                            Wymondham, Norfolk,<br>
                            NR18 0WZ<br>
                        </p>
                        <a class="phonenumbers" href="#">01603 70 40 20</a>
                        <a class="btn btn-5 hover-btn-5">View More</a>
                    </div>
                </div>
                <div class="card">
                    <img src="img/yarmouth.png">
                    <div class="info">
                        <a class="header" href="#">Great Yarmouth Office</a>
                        <p>
                            Suite F23,<br>
                            Beacon Innovation Centre,<br>
                            Beacon Park, Gorleston,<br>
                            Great Yarmouth, Norfolk,<br>
                            NR31 7RA<br>
                        </p>
                        <a class="phonenumbers" href="#">01493 60 32 04</a>
                        <a class="btn btn-5 hover-btn-5">View More</a>
                    </div>
                </div>
            </div>
            <div class="contactinfo">
                <div>
                    <p>Email us on:</p>
                    <a href="#" class="emails">sales@netmatters.com</a>
                    <p>Speak to Sales on:</p>
                    <a href="#" class="phonenumbers">01603 515007</a>
                    <p>Business hours:</p>
                    <p>Monday - Friday 07:00 - 18:00</p>
                    <p id="droplink">Out of Hours IT Support <span class="icon-keyboard_arrow_down"></span></p>
                    <div class="dropbox">
                        <p>Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.</p>
                        <p>Monday - Friday 18:00 - 22:00 Saturday 08:00 - 16:00<br>
                        Sunday 10:00 - 18:00</p>
                        <p>To log a critical task, you will need to call our main line number and select Option 2 to leave an Out of Hours  voicemail. A technician will contact you on the number provided within 45 minutes of your call.</p>
                    </div>
                </div>
                <form method="POST" id="contactform">
                    <div>
                        <div class="input-control">
                            <label for="name" class="required">Your Name</label>
                            <input name="name" id="name">
                        </div>
                        <div class="input-control">
                            <label for="company">Company Name</label>
                            <input name="company" id="company">
                        </div>
                        <div class="input-control">
                            <label for="email" class="required">Your Email</label>
                            <input name="email" id="email">
                        </div>
                        <div class="input-control">
                            <label for="phone" class="required">Your Telephone Number</label>
                            <input name="phone" id="phone">
                        </div>
                    </div>
                    <div class="input-control">
                        <label for="message" class="required">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <div class="checkbox">
                        <div class="box">
                            <input name="marketing" type="checkbox" id="marketing-txt">
                        </div>
                        <label for="marketing-txt">Please tick this box if you wish to receive marketing information from us. Please see our <a href="#">Privacy Policy</a> for more information on how we keep your data safe.</label>              
                    </div>
                    <div class="submit">
                        <button type="submit" class="btn btn-8 hover-btn-8">Send Enquiry</button>
                        <p>* Fields Required</p>
                    </div>
                </form>
            </div>
        </div>

        <?php

        require 'views/layout/footer.php';

        require 'views/layout/sidebar.php';

        require 'views/layout/cookie.php';

        ?>

        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <script src="javascript/slick/slick.min.js"></script>
        <script src="javascript/cookies.js"></script>
        <script src="javascript/sidebar.js"></script>
        <script src="javascript/stickyheader.js"></script>
        <script src="javascript/accordion.js"></script>
        <script src="javascript/validate.js"></script>
    </body>
</html>