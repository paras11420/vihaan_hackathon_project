import { Configuration, OpenAIApi } from 'openai';

const chatGPT_Response = (userQuery) => {
    const openai = new OpenAIApi(new Configuration({
        apiKey: "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"
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
        outputWindow.innerText = response;
    });
}

export default chatGPT_Response;