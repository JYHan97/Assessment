const handleSubmit = () => {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const addressOne = document.getElementById('address1').value;
  const addressTwo = document.getElementById('address2').value;
  const city = document.getElementById('city').value;
  const ustate = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  const country = document.getElementById('country').value;

  const userInfo = {
    "fn": firstName,
    "ln": lastName,
    "add1": addressOne,
    "add2": addressTwo,
    "city": city,
    "state": ustate,
    "zip": zip,
    "country": country
  }
  sessionStorage.setItem("USER", JSON.stringify(userInfo));
};