export default function checkInput(username,email,password,password2){
      if(username.trim() ===''){
          setErrorFor(document.querySelector('#username'),'Username cannot be blank')
      }
      else{
         
        setSuccessFor(document.querySelector('#username'))
      }
       
     if(email.trim() === '') {
		setErrorFor(document.querySelector('#email'), 'Email cannot be blank');
	} else if (!isEmail(email.trim())) {
		setErrorFor(document.querySelector('#email'), 'Not a valid email');
	} else {
		setSuccessFor(document.querySelector('#email'));
	}
	
	if(password.trim() === '') {
		setErrorFor(document.querySelector('#password'), 'Password cannot be blank');
	} else {
		setSuccessFor(document.querySelector('#password'));
	}
	
	if(password2.trim() === '') {
		setErrorFor(document.querySelector('#password2'), 'Password2 cannot be blank');
	} else if(password.trim() !== password2.trim()) {
		setErrorFor(document.querySelector('#password2'), 'Passwords does not match');
	} else{
		setSuccessFor(document.querySelector('#password2'));
	}
    }

    function isEmail(email){
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    function setErrorFor(input,message){
      const formControl = input.parentElement;
     
      const small = formControl.querySelector('small');
     
       
      small.innerText=message
      formControl.className ='form-control error'
    }

    function setSuccessFor(input){
      const formControl = input.parentElement;
      formControl.className ='form-control success'

    }
