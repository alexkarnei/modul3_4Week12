function check(a) {
    if (a.valueOf().toString().indexOf("http://") === 0) {
       a.style.textDecoration = "underline"
    }
    else {
     a.style.backgroundColor = "black";
    }
}

