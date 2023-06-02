    function validateForm() {
        var name = document.forms["membershipForm"]["name"].value;
        var email = document.forms["membershipForm"]["email"].value;
        var dob = document.forms["membershipForm"]["dob"].value;
        var about = document.forms["membershipForm"]["about"].value;
        var achievements = document.forms["membershipForm"]["achievements"].value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (dob === "") {
        alert("Please enter your date of birth.");
        return false;
    }

    if (about === "") {
        alert("Please tell us about yourself.");
        return false;
    }

    if (achievements === "") {
        alert("Please describe your achievements.");
        return false;
    }

    alert("Form submitted!\n\nName: " + name +
            "\nEmail: " + email +
            "\nDate of Birth: " + dob +
            "\nAbout Yourself: " + about +
            "\nAchievements: " + achievements);
    }

    function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
    }