let $manageInviteFormContainer = $('#manageInviteFormContainer');
if ($manageInviteFormContainer.length != 0) {
    
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
    }else if(token != null && role_name.toLowerCase() != "user"){
        window.location.assign("http://54.237.57.179:3001/admin/manage_users.html");
    }
    
    console.log('Manage invite form detected. Binding event handling logic to form elements.');
    //If the jQuery object which represents the form element exists,
    //the following code will create a method to submit registration details
    //to server-side api when the #submitButton element fires the click event.
    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        const baseUrl = 'http://54.237.57.179:5000';
        let fullName = $('#fullNameInput').val();
        let email = $('#emailInput').val();
        let userId = localStorage.getItem('user_id');
        let webFormData = new FormData();
        webFormData.append('recipientName', fullName);
        webFormData.append('recipientEmail', email);
        axios({
                method: 'post',
                url: baseUrl + '/api/user/processInvitation',
                data: webFormData,
                headers: { 'Content-Type': 'multipart/form-data', 'user': userId }
            })
            .then(function(response) {
                //Handle success
                console.dir(response);
                new Noty({
                    type: 'success',
                    timeout: '6000',
                    layout: 'topCenter',
                    theme: 'bootstrap-v4',
                    text: 'An email invitation is sent to ' + fullName + '<br />A cc email is sent to you.'
                }).show();
            })
            .catch(function(response) {
                //Handle error
                console.dir(response);
                new Noty({
                    timeout: '6000',
                    type: 'error',
                    layout: 'topCenter',
                    theme: 'sunset',
                    text: 'Unable to send email invitation.',
                }).show();
            });
    });

} //End of checking for $manageInviteFormContainer jQuery object