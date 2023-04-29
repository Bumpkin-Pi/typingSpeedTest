play_sound = true

class Text{
    text = "Hello there i would like to give you a chance to give me an opertunity to give me a fish. I would also like to tell you how greatfull i am that you could join us today, it honors me greatly to have such guests, truly very fun frankly. I cant say how mildly happy I am, really, its very exiting. But that winded wounded, not even dead, tonight in jungle land".toLowerCase();
    text_buffer = this.text;
    current_pos = 0;
    current_word = 0;
    user_text = ""
    user_word = ""

    take_char(user_text){
        let buffer = "";
        user_text.trim();

        let input_array = user_text.split(" ");

        this.current_word = (input_array.length)-1;
        let buffer_array = this.text.split(" ").slice(this.current_word)
        buffer_array[0] = buffer_array[0].replace(input_array[input_array.length-1], "")

        this.text_buffer = ""
        for (let i in buffer_array) {
            this.text_buffer += buffer_array[i] + " ";
        }

        if (input_array[input_array.length-1] === ""){
            input_array.pop();
        }
        let accurat = 0;
        for (let word in (input_array)){
            if (input_array[word] === this.text.split(" ")[word]){
                accurat++;
            }
        }
        document.getElementById("accuracy").innerText = "Accuracy: "+(Math.floor(((accurat-1)/(this.current_word-1))*100))+"%"

        let correctchar = this.text_buffer[0];

        if (this.text_buffer[0] === " "){
            this.text_buffer.replace(" ", "_")
        }

        // this.text_buffer = this.text_buffer.replace(this.text_buffer[0], "");
        // this.text_buffer[0] = this.text_buffer[0].replace(" ", "_")
        document.getElementById("text_area").innerText = this.text_buffer//.replace(" ", "_")

    }

}
const timer_max = 60;
let text = new Text();
document.getElementById("text_area").innerText = text.text_buffer
let countdown = new Date().getTime()+60;

let playing = false;




function onInput(event){
    if (!playing && time !== 0){
        countdown = new Date().getTime()+60;
        playing = true;
    }
    if (time !== 0){
        if (play_sound){

        }
        let current_user_text = document.getElementById("input_area").value;
        user_word = current_user_text.split(" ")[current_user_text.split(" ").length - 1]
        text.take_char(current_user_text)
        document.getElementById("word_count").innerText = "Words: "+text.current_word
    }
}


let time = timer_max;
let x = setInterval(function() {
    if (playing){
        time = (Math.floor((countdown - new Date().getTime())/1000)+timer_max)
        if (time === 0){
            playing = false;
            document.getElementById("input_area").readOnly = true;
        }
    }
    document.getElementById("time").innerText = "Time: "+time+"s"
    calc_wpm()
}, 1000);


function calc_wpm(){
    document.getElementById("wpm").innerText = "WMP: "+(
        Math.floor((text.current_word/(timer_max-time))*60)
    )
}


