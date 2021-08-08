let $submitDesignFormContainer = $('#submitDesignFormContainer');
if ($submitDesignFormContainer.length != 0) {

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
    
    console.log('Submit design form detected. Binding event handling logic to form elements.');
    //If the jQuery object which represents the form element exists,
    //the following code will create a method to submit design details
    //to server-side api when the #submitButton element fires the click event.
    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        const baseUrl = 'http://54.237.57.179:5000';
        let userId = localStorage.getItem('user_id');
        let designTitle = $('#designTitleInput').val();
        let designDescription = $('#designDescriptionInput').val();
        let webFormData = new FormData();
        webFormData.append('designTitle', designTitle);
        webFormData.append('designDescription', designDescription);
        // HTML file input, chosen by user
        webFormData.append("file", document.getElementById('fileInput').files[0]);
        axios({
                method: 'post',
                url: baseUrl + '/api/user/process-submission',
                data: webFormData,
                headers: { 'Content-Type': 'multipart/form-data', 'user': userId }
            })
            .then(function(response) {
                Noty.overrideDefaults({
                    callbacks: {
                        onTemplate: function() {
                            if (this.options.type === 'systemresponse') {
                                this.barDom.innerHTML = '<div class="my-custom-template noty_body">';
                                this.barDom.innerHTML += '<div class="noty-header">Message</div>';
                                this.barDom.innerHTML += '<p class="noty-message-body">' + this.options.text + '</p>';
                                this.barDom.innerHTML += '<img src="' + this.options.image_URL + '">';
                                this.barDom.innerHTML += '<div>';
                            }
                        }
                    }
                })

                new Noty({
                    type: 'systemresponse',
                    layout: 'topCenter',
                    timeout: '5000',
                    text: response.data.message,
                    image_URL: response.data.image_URL
                }).show();
            })
            .catch(function(response) {
                //Handle error
                console.dir(response);
                new Noty({
                    type: 'error',
                    timeout: '6000',
                    layout: 'topCenter',
                    theme: 'sunset',
                    text: 'Unable to submit design file.',
                }).show();
            });
    });

} //End of checking for $submitDesignFormContainer jQuery object