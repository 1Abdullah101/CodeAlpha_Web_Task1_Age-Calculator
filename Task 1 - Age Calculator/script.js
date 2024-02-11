document.getElementById('InsertAge').addEventListener('submit', function(event)) {
    event.preventDefault();

    let dob = new Date(document.getElementById ('dateofbirth').value);
    let currentdate = new Date ();
    let agenow = now.getFullYear() - dob.getFullYear();

    if(now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('resultAge').innerHTML = "<h3> Your Age is: " + age + "years </h3>";

};


