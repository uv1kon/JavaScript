function checkForm(el){
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    console.log(name, pass, state);

    return false;
}