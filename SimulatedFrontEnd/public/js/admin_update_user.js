let $updateUserFormContainer = $('#updateUserFormContainer');
if ($updateUserFormContainer.length != 0) {

    //To Limit the session to 35 minutes
    const timer = JSON.parse(localStorage.getItem('timer'));
    if (timer && (Date.now()/1000 > timer)) {
        localStorage.clear();
        window.location.replace('/login.html');
    }

    //To get type of user
    const role_name = localStorage.getItem('role_name');
    console.log("Role: " + role_name);

    //To prevent Unauthorized personal from entering admin
    const token = localStorage.getItem("token");
    if (token === null) {
        console.log("Token not found ... redirecting to Login")
        window.location.assign("http://54.237.57.179:3001/login.html");
    }else if(token != null && role_name.toLowerCase() != "admin"){
        window.location.assign("http://54.237.57.179:3001/user/manage_submission.html");
    }

    console.log('Update User form is detected. Binding event handling logic to form elements.');
    //If the jQuery object which represents the form element exists,
    //the following code will create a method to submit user role data
    //to server-side api when the #submitButton element fires the click event.
    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        const baseUrl = 'http://54.237.57.179:5000';
        //Collect role id value from the input element, roleIdInput
        let roleId = $('#roleIdInput').val();
        //Obtain user id from local storage
        let userId = localStorage.getItem('user_id');
        //There is a hidden textbox input, userRecordIdInput
        let recordId = $('#userRecordIdInput').val();
        let webFormData = new FormData();
        webFormData.append('roleId', roleId);
        webFormData.append('recordId', recordId);
        axios({
                method: 'put',
                url: baseUrl + '/api/user/',
                data: webFormData,
                headers: { 
                    'Content-Type': 'multipart/form-data', 
                    'user': userId, 
                    'authorization':'Bearer '+ token 
                }
            })
            .then(function(response) {
                new Noty({
                    type: 'success',
                    layout: 'topCenter',
                    theme: 'sunset',
                    timeout: '5000',
                    text: 'User role has changed.',
                }).show();
            })
            .catch(function(response) {
                //Handle error
                console.dir(response);
                new Noty({
                    type: 'error',
                    layout: 'topCenter',
                    theme: 'sunset',
                    timeout: '6000',
                    text: 'Unable to update.',
                }).show();

            });
    });
    $('#backButton').on("click", function(e) {
        e.preventDefault();
        window.history.back();
    });

    function getOneUser() {

        const baseUrl = 'http://54.237.57.179:5000';
        var query = window.location.search.substring(1);
        let arrayData = query.split("=");
        let recordIdToSearchUserRecord = arrayData[1];
        let userId = localStorage.getItem('user_id');
        axios({
                headers: {
                    'user': userId
                },
                method: 'get',
                url: baseUrl + '/api/user/' + recordIdToSearchUserRecord,
            })
            .then(function(response) {
                //Using the following to inspect the response.data data structure
                //before deciding the code which dynamically populate the elements with data.
                console.dir(response.data);
                const record = response.data.user_data;
                $('#fullNameOutput').text(record.fullname);
                $('#emailOutput').text(record.email);
                $('#userRecordIdInput').val(record.user_id);
                $('#roleIdInput').val(record.role_id);

            })
            .catch(function(response) {
                //Handle error
                console.dir(response);
                new Noty({
                    type: 'error',
                    timeout: '6000',
                    layout: 'topCenter',
                    theme: 'sunset',
                    text: 'Unable retrieve user data',
                }).show();
            });

    } //End of getOneUser
    //Call getOneUser function to do a GET HTTP request on an API to retrieve one user record
    getOneUser();
} //End of checking for $updateUserFormContainer jQuery object