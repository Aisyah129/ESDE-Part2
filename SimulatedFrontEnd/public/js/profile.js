let $profileContainer = $('#profileContainer');
if ($profileContainer.length != 0) {
    
    //To Limit the session to 35 minutes
    const timer = JSON.parse(localStorage.getItem('timer'));
    if (timer && (Date.now()/1000 > timer)) {
        localStorage.clear();
        window.location.replace('/login.html');
    }

    const token = localStorage.getItem("token");
    if (token === null) {
        console.log("Token not found ... redirecting to Login")
        window.location.assign("http://54.237.57.179:3001/login.html");
    }

    console.log('Profile page is detected. Binding event handling logic to form elements.');
    $('#backButton').on("click", function(e){
        e.preventDefault();
        window.history.back();
    });

    function getOneUser() {

        const baseUrl = 'http://54.237.57.179:5000';

        let userId = localStorage.getItem('user_id');
        axios({
            headers: {
             'user': userId
            },
            method: 'get',
            url: baseUrl + '/api/user/' + userId,
            })
            .then(function(response) {
                //Using the following to inspect the response.data data structure
                //before deciding the code which dynamically populate the elements with data.
                console.dir(response.data);
                const record = response.data.user_data;
                $('#fullNameOutput').text(record.fullname);
                $('#emailOutput').text(record.email);
            })
            .catch(function(response) {
                //Handle error
                console.dir(response);
                new Noty({
                    type: 'error',
                    timeout: '6000',
                    layout: 'topCenter',
                    theme: 'sunset',
                    text: 'Unable retrieve profile data',
                }).show();
            });

    } //End of getOneUser
    //Call getOneUser function to do a GET HTTP request on an API to retrieve one user record
    getOneUser();
} //End of checking for $profileContainer jQuery object