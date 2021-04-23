// Create the current date
var current_day = moment(new Date() ).format("dddd LL");
$("#currentDay").append(current_day);

// timeslot array for inputs
var timeslots = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var timeslotnum = [9,10,11,12,13,14,15,16,17];

var hour_now = 12;//new Date().getHours();

window.onload = function(){
    for(i = 0; i < timeslots.length; i++) {
        hour(i);
    }
}

// hour function; have one function that inputs the hour slot
// the function adds text and saves it to local storage

function hour(slot) {
    var text_id = "#text_" + timeslots[slot];
    var button_id = "#button_" + timeslots[slot];
    var hour_content = timeslots[slot] + "_content";
    var hournum = timeslotnum[slot];

    var input_text = document.querySelector(text_id);
    var output = document.querySelector(text_id);

    var save_button = document.querySelector(button_id);

    save_button.addEventListener("click", update_event_output);

    output.textContent = localStorage.getItem(hour_content);
    input_text.value = localStorage.getItem(hour_content);

    // function for clicking the save button
    function update_event_output(){
        localStorage.setItem(hour_content, input_text.value);

        output.textContent = input_text.value;
    }


    //Changing the color depending on hour of day.
    if (hour_now < hournum) {
        $(text_id).addClass("future");
    } else if (hour_now === hournum) {
        $(text_id).addClass("present");
    } else { // hour_now > hournum
        $(text_id).addClass("past");
    }

}

