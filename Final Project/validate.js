

function Validate(appForm)
{

	if (document.forms.appForm.firstName.value=="")
	{
	alert ("Please enter your first name.");
	document.forms.appForm.firstName.focus();
	return false;
	}

	var fName = document.forms.appForm.firstName.value;

	if (!fName.match(/^[a-zA-Z]+$/))
	{
		alert('Only letters are allowed');
		document.forms.appForm.firstName.focus();
		return false;
	}

	if(document.forms.appForm.lastName.value=="")
	{
	alert("Please enter your last name.");
	document.forms.appForm.lastName.focus();
	return false;
	}

	var lName = document.forms.appForm.lastName.value;

	if (!lName.match(/^[a-zA-Z]+$/))
	{
		alert('Only letters are allowed');
		document.forms.appForm.lastName.focus();
		return false;
	}

  if (document.forms.appForm.address1.value =="")
  {
  alert ("Please enter your address.");
  document.forms.appForm.address1.focus();
  return false;
  }

  if (document.forms.appForm.city.value =="")
  {
  alert ("Please enter your city.");
  document.forms.appForm.city.focus();
  return false;
  }

	var city = document.forms.appForm.city.value;

	if (!city.match(/^[a-zA-Z]+$/))
	{
		alert('Only letters are allowed');
		document.forms.appForm.city.focus();
		return false;
	}

  if (document.forms.appForm.state.value =="")
  {
  alert ("Please enter your state.");
  document.forms.appForm.state.focus();
  return false;
  }

	var state = document.forms.appForm.state.value;

	if (!state.match(/^[a-zA-Z]+$/))
	{
		alert('Only letters are allowed');
		document.forms.appForm.state.focus();
		return false;
	}

  if (document.forms.appForm.zip.value =="")
  {
  alert ("Please enter your zip code.");
  document.forms.appForm.zip.focus();
  return false;
  }

  var numCheck = document.forms.appForm.zip.value;
  if ((isNaN(numCheck))  || (numCheck.length < 5))
  {
    alert("Enter the correct zip code");
    return false;
  }

  if((document.forms.appForm.gender[0].checked == false) &&
  	  (document.forms.appForm.gender[1].checked == false))
  	{
  	alert("Please enter your gender, Male or Female");
  	return false;
  	}

    if (document.forms.appForm.month.value == "select")
    {
    alert ("Please choose a month of birth.");
    document.forms.appForm.month.focus();
    return false;
    }

  if (document.forms.appForm.day.value =="")
  {
  alert ("Please enter your day of birth.");
  document.forms.appForm.day.focus();
  return false;
  }

  var phCheck = document.forms.appForm.day.value;
  if ((isNaN(phCheck))  || (phCheck.length < 2))
  {
    alert("Enter the correct day of birth 00 form");
    return false;
  }

  if (document.forms.appForm.year.value =="")
  {
  alert ("Please enter your year of birth.");
  document.forms.appForm.year.focus();
  return false;
  }

  var yrCheck = document.forms.appForm.year.value;
  if ((isNaN(yrCheck))  || (yrCheck.length < 4))
  {
    alert("Enter a valid year");
    return false;
  }

  if (document.forms.appForm.email.value =="")
  {
  alert ("Please enter your email.");
  document.forms.appForm.email.focus();
  return false;
  }

  var x = document.forms.appForm.email.value;
   var at = x.indexOf("@");
   var period = x.lastIndexOf(".");
   if (at<1 || period<at+2 || period+2>=x.length)
   {
       alert("Not a valid e-mail address");
       return false;
   }

  if (document.forms.appForm.phone.value =="")
  {
  alert ("Please enter your phone number.");
  document.forms.appForm.phone.focus();
  return false;
  }


/*
i couldnt get the phone to work, but i didnt want to force people to enter
the phone number a specific way

 var phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (document.forms.appForm.phone.value.match(phoneCheck))
  {
    alert("Enter a correct phone number ");
    return false;
  }
*/

var phCheck = document.forms.appForm.phone.value;
if (isNaN(phCheck))
{
  alert("Enter the correct phone");
  return false;
}

  if (document.forms.appForm.emailEC.value =="")
  {
  alert ("Please enter your contact email.");
  document.forms.appForm.emailEC.focus();
  return false;
  }

  var x = document.forms.appForm.emailEC.value;
   var at = x.indexOf("@");
   var period = x.lastIndexOf(".");
   if (at<1 || period<at+2 || period+2>=x.length)
   {
       alert("Not a valid e-mail address");
       return false;
   }

  if (document.forms.appForm.phoneEC.value =="")
  {
  alert ("Please enter your emergency contact phone number.");
  document.forms.appForm.phoneEC.focus();
  return false;
  }

  var phECCheck = document.forms.appForm.phoneEC.value;
  if (isNaN(phECCheck))
  {
    alert("Enter the correct emergency contact phone");
    return false;
  }

    if ((document.forms.appForm.membership[0].checked == false) &&
  	  (document.forms.appForm.membership[1].checked == false) &&
  	  (document.forms.appForm.membership[2].checked == false))
  			{
  	alert ("Please choose a membership option");
  	return false;
  	}


  if (document.forms.appForm.username.value =="")
  {
  alert ("Please enter a username.");
  document.forms.appForm.username.focus();
  return false;
  }

  if (document.forms.appForm.password.value =="")
  {
  alert ("Please enter a password.");
  document.forms.appForm.password.focus();
  return false;
  }

/*?=.*\d) - this is to make sure there is a digit
(?=.*[a-z]) - this is to make sure there are alphbets
.{7,15} - this is the min and max values that will allowed to be entered*/
  var pCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,15}$/;
if(document.forms.appForm.password.value.match(pCheck))
{
alert("Please enter a password 7-15 characters in length, with at least one number.")
return false;
}

  if (document.forms.appForm.cardAddress1.value =="")
  {
  alert ("Please enter your billing address.");
  document.forms.appForm.cardAddress1.focus();
  return false;
  }

  if (document.forms.appForm.cardCity.value =="")
  {
  alert ("Please enter your billing city.");
  document.forms.appForm.cardCity.focus();
  return false;
  }

	var cardCityCheck = document.forms.appForm.cardCity.value;

	if (!cardCityCheck.match(/^[a-zA-Z]+$/))
	{
		alert('Only letters are allowed');
		document.forms.appForm.cardCityCheck.focus();
		return false;
	}

  if (document.forms.appForm.cardState.value =="")
  {
  alert ("Please enter your billing state.");
  document.forms.appForm.cardState.focus();
  return false;
  }

	if (!cardStateCheck.match(/^[a-zA-Z]+$/))
	{
		alert('Only letters are allowed');
		document.forms.appForm.cardStateCheck.focus();
		return false;
	}

  if (document.forms.appForm.cardZip.value =="")
  {
  alert ("Please enter your billing zip code.");
  document.forms.appForm.cardZip.focus();
  return false;
  }

  var cNumCheck = document.forms.appForm.cardZip.value;
  if ((isNaN(cNumCheck))  || (cNumCheck.length < 5))
  {
    alert("Enter the correct billing zip code");
    return false;
  }

    if((document.forms.appForm.cardType[0].checked == false) &&
    (document.forms.appForm.cardType[1].checked == false) &&
    (document.forms.appForm.cardType[2].checked == false) &&
    (document.forms.appForm.cardType[3].checked == false) &&
    	  (document.forms.appForm.cardType[4].checked == false))
    	{
    	alert("Please select a card type");
    	return false;
    	}

  if (document.forms.appForm.cardName.value =="")
  {
  alert ("Please enter the name on your card.");
  document.forms.appForm.cardName.focus();
  return false;
  }

	if (!cardNameCh.match(/^[a-zA-Z]+$/))
	{
		alert('Only letters are allowed');
		document.forms.appForm.cardNameCh.focus();
		return false;
	}

  if (document.forms.appForm.cardNumber.value =="")
  {
  alert ("Please enter your card number.");
  document.forms.appForm.cardNumber.focus();
  return false;
  }

  var cNumCheck = document.forms.appForm.cardNumber.value;
  if (isNaN(cNumCheck))
  {
    alert("Enter the correct card number");
    return false;
  }

  if (document.forms.appForm.cardCSS.value =="")
  {
  alert ("Please enter your CSS code.");
  document.forms.appForm.cardCSS.focus();
  return false;
  }

  var CSSCheck = document.forms.appForm.cardCSS.value;
  if ((isNaN(CSSCheck))  || (CSSCheck.length < 3))
  {
    alert("Enter the correct CSS code");
    return false;
  }

  if (document.forms.appForm.cardMonth.value == "select")
  {
  alert ("Please choose a month of expiration.");
  document.forms.appForm.cardMonth.focus();
  return false;
  }

  if (document.forms.appForm.cardYear.value =="")
  {
  alert ("Please enter your card year expiration date.");
  document.forms.appForm.cardYear.focus();
  return false;
  }

  var cdyrCheck = document.forms.appForm.cardYear.value;
  if ((isNaN(cdyrCheck))  || (cdyrCheck.length < 4))
  {
    alert("Enter a valid year");
    return false;
  }

  if (document.forms.appForm.cardSign[0].checked == false)
  {
  alert ("Please check the card agreement.");
  document.forms.appForm.cardSign.focus();
  return false;
  }

  if (document.forms.appForm.terms[0].checked == false)
  {
  alert ("Please check the terms and conditions agreement.");
  document.forms.appForm.terms.focus();
  return false;
  }

return true;
}

/*function submit()
{
  if (function Validate(appForm) == true)
  alert ("Form Submitted");
  return;

}*/


function Clear()
{

  /*text*/
document.forms.appForm.firstName.value = "";
document.forms.appForm.lastName.value = "";
document.forms.appForm.address1.value = "";
document.forms.appForm.address2.value = "";
document.forms.appForm.city.value = "";
document.forms.appForm.state.value = "";
document.forms.appForm.zip.value = "";

document.forms.appForm.day.value = "";
document.forms.appForm.year.value = "";

document.forms.appForm.email.value = "";
document.forms.appForm.phone.value = "";
document.forms.appForm.emailEC.value = "";
document.forms.appForm.phoneEC.value = "";

document.forms.appForm.username.value = "";
document.forms.appForm.password.value = "";


/*select*/

    document.appForm.cardMonth.checked== "select";
    document.appForm.month.checked== "select";



/*checkboxes*/


document.appForm.membership[0].checked== false;
document.appForm.membership[1].checked== false;
document.appForm.membership[2].checked== false;

document.appForm.addressCheck[0].checked== false;

document.appForm.cardSign[0].checked== false;

document.appForm.terms[0].checked== false;

/*radio*/

document.appForm.cardType[0].checked== false;
document.appForm.cardType[1].checked== false;
document.appForm.cardType[2].checked== false;
document.appForm.cardType[3].checked== false;
document.appForm.cardType[4].checked== false;

document.appForm.gender[0].checked == false;
document.appForm.gender[1].checked == false;

return;
}
