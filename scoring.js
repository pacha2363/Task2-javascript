$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
  };
  function get_achievement(){

    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];

    let number = subject_points.length;
    let averagePoint = sum / number;

    let averageIndicate = $("#average_indicate").text(averagePoint);
    console.log(averageIndicate)
    if ( averagePoint >= 80){
      return "A";
    } else if ( averagePoint >= 60 && averagePoint < 80 ) {
      return "B";
    } else if ( averagePoint >= 40 && averagePoint < 60 ) {
      return "C";
    } else if ( averagePoint < 40 ){
      return "D";
    }
  };
  function get_pass_or_failure(){
  let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];

    let number = subject_points.length;
    let averagePoint = sum / number;

    if ( averagePoint >= 40){
      return "Pass";
    } else {
      return "Fail";
    }
    return judge;
  };
  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`);
  };
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  $('#btn-declaration').click(function() {
    $("#declaration").text(`Your evaluation is ${get_achievement()}. You are ${get_pass_or_failure()}`);
  });
});
