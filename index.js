play_sound = true

class Text{
    text = "I am by birth a Genevese, and my family is one of the most distinguished of that republic. My ancestors had been for many years counsellors and syndics, and my father had filled several public situations with honour and reputation. He was respected by all who knew him for his integrity and indefatigable attention to public business. He passed his younger days perpetually occupied by the affairs of his country; a variety of circumstances had prevented his marrying early, nor was it until the decline of life that he became a husband and the father of a family." +
        "As the circumstances of his marriage illustrate his character, I cannot refrain from relating them. One of his most intimate friends was a merchant who, from a flourishing state, fell, through numerous mischances, into poverty. This man, whose name was Beaufort, was of a proud and unbending disposition and could not bear to live in poverty and oblivion in the same country where he had formerly been distinguished for his rank and magnificence. Having paid his debts, therefore, in the most honourable manner, he retreated with his daughter to the town of Lucerne, where he lived unknown and in wretchedness. My father loved Beaufort with the truest friendship and was deeply grieved by his retreat in these unfortunate circumstances. He bitterly deplored the false pride which led his friend to a conduct so little worthy of the affection that united them. He lost no time in endeavouring to seek him out, with the hope of persuading him to begin the world again through his credit and assistance.";
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
    if( document.getElementById("sound_on").checked ){
        new Audio("./typesound1.wav").play();
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


