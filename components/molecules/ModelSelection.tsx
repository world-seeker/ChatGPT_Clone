'use client';
import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch("/api/getEngine").then(res => res.json());


function ModelSelection() {

  const { data: models,isLoading} = useSWR("models",fetchModels);
  
  const { data: model, mutate: setModel} = useSWR('model',{
    fallbackData: "gpt-3.5-turbo-instruct"
  });

  return (
    <div className='mt-2'>

      <Select 
       className='mt-2'
       options={models?.modelOptions}
       placeholder={model}
       defaultValue={model}
       isSearchable
       isLoading={isLoading}
       menuPosition='fixed'
       instanceId="unique-instance-id"
       styles={{
        control: (provided, state)   => ({
          ...provided,
          backgroundColor: "bg-[#434654]",
          border: "border-[#434654]"
        }),
      }}
  
      onChange={(e)=>setModel(e.  value)}

      />

    </div>
  )
}

export default ModelSelection