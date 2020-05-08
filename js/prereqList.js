
// types out list element - not collapsable
function listElementNoChild(node) {
    document.writeln(
    "<li>"
        + "<a href=" + node.courseURL + ">" + node.courseCode + "</a>"
        + " - "
        + node.courseName
    +"</li>");
}
// types out list element - collapsable
function listElementWithChild(node) {
    document.writeln(
    '<li><span class="caret">'
        + "<a href=" + node.courseURL + ">" + node.courseCode + "</a>"
        + " - "
        + node.courseName
        + "</span>");
}

// Writes a nested list of the root parent and it's children
function traverseGraph(node) {
    // Write outs the parent
    // Displayed as: Hyperlink(CourseCode) - courseName
    if (node.equivalent.length > 0 || node.prerequisites.length > 0) {
        document.writeln(
            '<li><span class="caret">'
                + "<a href=" + node.courseURL + ">" + node.courseCode + "</a>"
                + " - "
                + node.courseName
                + "</span>"
        );
        document.write('<ul class="nested">'); // creates nested list of children
                node.prerequisites.forEach(element => { //adding children to list
                    traverseGraph(element);
                });

                if (node.equivalent.length > 0) {
                    document.write('<li><span class="caret"> Equivalent Courses</span>'); //Creates nested list of equivalent courses
                    document.write('<ul class="nested">');
                            node.equivalent.forEach(element => { //Adding equivalent courses to list
                                document.write(
                                "<li>"
                                    + "<a href=" + element.courseURL + ">" + element.courseCode + "</a>"
                                    + " - "
                                    + element.courseName
                                +"</li>"
                                );
                            })
                        document.write("</li>");
                    document.write('</ul>');
                }
            document.write("</ul>");
        document.write("</li>");
    } else {
        listElementNoChild(node);
    }
}



var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
