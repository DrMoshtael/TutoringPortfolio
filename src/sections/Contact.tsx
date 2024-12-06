'use client';

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string,
  email: string,
  message: string
}

export const ContactSection = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => console.log('submitted',data)

  console.log(watch("name"))

  return (
  <div className="container mx-auto py-32 text-center xl:text-left flex">
    <form className="flex-1 flex flex-col gap-6 w-full mx-auto items-center" 
      onSubmit={handleSubmit(onSubmit)}>
        <h2 className="h2 text-center mb-12">
          Let&apos;s <span className="text-color-red-400">Connect</span>
        </h2>
      <div className="flex gap-x-6 w-full">
        <input type="text" className="input" placeholder="Name" {...register("name", { required: true })} />
        <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
      </div>
        <textarea className="textarea" placeholder="Message" {...register("message", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <button className="btn rounded-full border border-white/50 max-w-4xl px-8
      transition-all duration-300 hover:border-red-400" type="submit">Send</button>
    </form>
  </div>
)
};
