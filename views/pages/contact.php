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
                <div class="methods">
                    <p>Email us on:</p>
                    <a href="#" class="emails">sales@netmatters.com</a>
                    <p>Speak to Sales on:</p>
                    <a href="#" class="phonenumbers">01603 515007</a>
                    <p>Business hours:</p>
                    <p>Monday - Friday 07:00 - 18:00</p>
                    <p id="droplink">Out of Hours IT Support <span class="icon-down"></span></p>
                    <div class="dropbox">
                        <p>Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.</p>
                        <p>Monday - Friday 18:00 - 22:00 Saturday 08:00 - 16:00<br>
                        Sunday 10:00 - 18:00</p>
                        <p>To log a critical task, you will need to call our main line number and select Option 2 to leave an Out of Hours  voicemail. A technician will contact you on the number provided within 45 minutes of your call.</p>
                    </div>
                </div>
                    <form method="POST" id="contactform" novalidate onsubmit="return validateFormJS()">
                        <?php
                        // Include DB connection and form functions
                        require_once __DIR__ . '/../dbconnect.php';

                        $sent = false;
                        $errors = [];
                        $input = [];

                        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                            $validation = validateForm($_POST);

                            // Additional message length check
                            if (isset($_POST['message']) && strlen(trim($_POST['message'])) < 5) {
                                $validation['valid'] = false;
                                $validation['errors']['message'] = "Message must be at least 5 characters long.";
                            }

                            if ($validation['valid']) {
                                $data = $validation['sanitized'];

                                if (storeContactForm(
                                    $data['name'],
                                    $data['company'],
                                    $data['email'],
                                    $data['phone'],
                                    $data['message'],
                                    $data['marketing']
                                )) {
                                    $sent = true;
                                    $input = []; // clear form on success
                                } else {
                                    $errors[] = "Database insert failed. Please try again later.";
                                    $input = $_POST;
                                }
                            } else {
                                $errors = $validation['errors'];
                                $input = $_POST; // preserve inputs
                            }
                        }
                        ?>

                        <!-- Display success message -->
                        <?php if ($sent): ?>
                            <div class="form-success">
                                <p>Your message has been sent!</p>
                                <div class="closemessage">&times;</div>
                            </div>
                        <?php endif; ?>

                        <!-- Display errors -->
                        <?php if (!empty($errors)): ?>
                            <div class="form-errors">
                                <?php foreach ($errors as $err): ?>
                                    <p><?= htmlspecialchars($err) ?></p>
                                    <div class="closemessage">&times;</div>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>

                        <div class="input-group">
                            <div class="input-control resize">
                                <label for="name" class="required">Your Name</label>
                                <input name="name" id="name" value="<?= htmlspecialchars($input['name'] ?? '') ?>" required>
                            </div>
                            <div class="input-control resize">
                                <label for="company">Company Name</label>
                                <input name="company" id="company" value="<?= htmlspecialchars($input['company'] ?? '') ?>">
                            </div>
                            <div class="input-control resize">
                                <label for="email" class="required">Your Email</label>
                                <input name="email" id="email" type="email" value="<?= htmlspecialchars($input['email'] ?? '') ?>" required>
                            </div>
                            <div class="input-control resize">
                                <label for="phone" class="required">Your Telephone Number</label>
                                <input name="phone" id="phone" value="<?= htmlspecialchars($input['phone'] ?? '') ?>" required>
                            </div>
                        </div>

                        <div class="input-control">
                            <label for="message" class="required">Message</label>
                            <textarea name="message" id="message" required><?= htmlspecialchars($input['message'] ?? '') ?></textarea>
                        </div>

                        <div class="checkbox">
                            <input name="marketing" type="checkbox" id="marketing-txt" <?= isset($input['marketing']) ? 'checked' : '' ?>>
                            <label for="marketing-txt">
                                Please tick this box if you wish to receive marketing information from us. Please see our 
                                <a href="#">Privacy Policy</a> for more information on how we keep your data safe.
                            </label>              
                        </div>

                        <div class="submit">
                            <button type="submit" class="btn btn-8 hover-btn-8">Send Enquiry</button>
                            <p><span>*</span> Fields Required</p>
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
        <script src="javascript/messageremove.js"></script>
    </body>
</html>