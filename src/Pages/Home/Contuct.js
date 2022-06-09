import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contuct = () => {
  const { register, formState: { errors }, handleSubmit ,reset } = useForm();

  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gu2xg1r', 'template_yw6ejpj', e.target, 'VjdqwJv2RVXPZNrYM')
    .then((result) => {
      toast.success('Email Send Succesfully')
      reset()
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    // console.log(data);

  }
  return (
    <div id='contuctme' class="hero min-h-screen bg-base-200 ">
    <div class="card lg:w-2/5 xs:w-3/4 shadow-2xl bg-base-100">
   <h1 className='text-4xl text-accent text-center mt-4'> Contuct Me </h1>
      <div class="card-body">
        <form onSubmit={sendEmail}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" {...register("name")} class="input input-bordered" required />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input name='email' type="email" {...register("email")} placeholder="email" class="input input-bordered" required />
        </div>
        
        <div class="form-control mt-3">
        <label class="label">
            <span class="label-text">Message</span>
          </label>
  <textarea {...register("message")} name='message' class="textarea textarea-bordered h-24" placeholder="Message" required></textarea>
</div>
        <div class="form-control mt-6 mb-3 items-center">
        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Submit" />
        </div>
      </form>
      </div>
    </div>
</div>
  );
};


export default Contuct;