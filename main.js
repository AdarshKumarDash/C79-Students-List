var students_name = [];

function submit() {
    students_name = [];
    var name1 = document.getElementById("student_name_1").value;
    var name2 = document.getElementById("student_name_2").value;
    var name3 = document.getElementById("student_name_3").value;
    var name4 = document.getElementById("student_name_4").value;
    students_name.push(name1);
    students_name.push(name2);
    students_name.push(name3);
    students_name.push(name4);
    console.log(students_name);
    document.getElementById("names").innerHTML = students_name;
    document.getElementById("sorting").style.display = "inline";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("student_name_1").value = "";
    document.getElementById("student_name_2").value = "";
    document.getElementById("student_name_3").value = "";
    document.getElementById("student_name_4").value = "";
}

function sorting() {
    students_name.sort();
    console.log(students_name);
    document.getElementById("names").innerHTML = students_name;
    document.getElementById("sorting").style.display = "none";
    document.getElementById("btn1").style.display = "inline";
    document.getElementById("student_name_1").value = "";
    document.getElementById("student_name_2").value = "";
    document.getElementById("student_name_3").value = "";
    document.getElementById("student_name_4").value = "";
}