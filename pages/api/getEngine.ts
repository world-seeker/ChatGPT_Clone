import { NextApiRequest, NextApiResponse } from 'next';
import openai from "../../lib/chatgpt";


type Options = {
    value: string;
    label: string;
}

type Data = {
    modelOptions: Options[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    
        const model = await openai.models.list().then((response) => response.data);

        const modelOptions = model.map((model) =>({
           value:model.id,
           label: model.id,
        }));
        
        res.status(200).json({
            modelOptions
        })
        
}
