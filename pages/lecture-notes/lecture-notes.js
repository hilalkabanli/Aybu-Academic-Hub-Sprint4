$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        var serviceCoursesHtml = '';
        $.each(data.serviceCourses, function(index, course) {
            serviceCoursesHtml += '<a href="' + course.link + '">' + course.name + '</a><br>';
        });
        $('#service-courses').html(serviceCoursesHtml);

        var computerEngineeringCoursesHtml = '';
        $.each(data.computerEngineeringCourses, function(index, course) {
            computerEngineeringCoursesHtml += '<a href="' + course.link + '">' + course.name + '</a><br>';
        });
        $('#computer-engineering-courses').html(computerEngineeringCoursesHtml);
    });
});
