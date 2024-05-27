
$(document).ready(function () {
  var literal = {
    req1: {
      selector: $("#name"),
      required: { message: "Name is Required." },
    },
    req2: {
      selector: $("#email"),
      email: { message: "Must be a valid email." },
    },
    req3: {
      selector: $("#phone"),
      required: { message: "Phone is Required." },
    },
    req4: {
      selector: $("#message"),
      required: { message: "Message is Required." },
    },
  };

  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    autoPlaceholder: "polite",
    countrySearch: true,
  });


  $("#checkbox").checkboxradio(); 


  var result = $.validate.rules(literal, { mode: "bootstrap" });
  console.log(result);
});