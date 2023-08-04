import { Configuration, OpenAIApi } from 'openai';

const chatGPT_Response = (userQuery) => {
    const openai = new OpenAIApi(new Configuration({
        apiKey: "sk-"
    }))

    const userinput = {
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user", content: userQuery
        }]
    };

    openai.createChatCompletion(userinput).then((chatGPT_Response_) => {
        const outputWindow = document.querySelector(".planned-trip");
        const response = chatGPT_Response_.data.choices[0].message.content;

        outputWindow.style.height = '500px';
        outputWindow.style.opacity = '1';

        const animation = document.querySelector(".loading-trip");
        const text = document.querySelector(".creating-trip");
        animation.classList.remove("display-flex");
        text.classList.remove("display-flex");

        outputWindow.innerText = response;
    });
}

export default chatGPT_Response;