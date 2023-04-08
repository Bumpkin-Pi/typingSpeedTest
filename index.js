
class Text{
    text = "Hello there i would like to give you a chance to give me an opertunity to give me a fish".toLowerCase();
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
        for (let i in buffer_array){
            this.text_buffer += buffer_array[i]+" ";
        }


        let user_words = user_text.split(" ");
        if (user_words[user_words.length-1] === ""){
            user_words.pop();
        }
        for (let word in user_words){
            
        }








        let correctchar = this.text_buffer[0];

        if (this.text_buffer[0] === " "){
            this.text_buffer.replace(" ", "_")
        }

        // this.text_buffer = this.text_buffer.replace(this.text_buffer[0], "");
        // this.text_buffer[0] = this.text_buffer[0].replace(" ", "_")
        document.getElementById("text_area").innerText = this.text_buffer//.replace(" ", "_")




    }

}
let text = new Text();
document.getElementById("text_area").innerText = text.text_buffer



function onInput(event){
    let current_user_text = document.getElementById("input_area").value;
    user_word = current_user_text.split(" ")[current_user_text.split(" ").length - 1]
    text.take_char(current_user_text)
}







