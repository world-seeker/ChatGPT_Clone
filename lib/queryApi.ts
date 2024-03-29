import openai from './chatgpt'

const query = async (prompt:string,chatId:string,model:string)=>{
  const res = await openai.completions.create({
    model,
    prompt,
    temperature:0.1,
  
    max_tokens:500,
    frequency_penalty:0,
    presence_penalty:0,
    stop:[" Human:", " AI:"]
   
  }).then(res => res.choices[0].text).catch(
    (err)=> `ChatGPT was unable to find an answer for that! {Error:${err.message}}`);

     return res;
};

export default query;