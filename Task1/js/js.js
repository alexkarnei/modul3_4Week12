function myFunction(a) {
    if (a.valueOf().includes("http://", 0)) {
        a.style.textDecoration = "underline";
    }
}