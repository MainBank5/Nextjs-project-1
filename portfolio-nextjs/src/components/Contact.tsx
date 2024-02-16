"use client"

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef <HTMLFormElement | null>(null);

    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_hzbipva', 'template_nq8va9n', form.current!, {
            publicKey: 'NGxnjWjyzP-5ka8kd',
          })
          .then(
            (result) => {
              console.log('SUCCESS!');
              form.current?.reset()
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <div id="contact" className="flex flex-col justify-center items-center w-full min-h-screen py-10">
            <div className=" mx-auto w-4/5 flex flex-col h-full justify-center items-center">

                <h1 className="text-center py-6 text-4xl">Let&#39;s Connect and Build Your Next Project</h1>


                <form onSubmit={sendEmail} ref={form}  className="flex flex-col w-full justify-center"   >
                    <div className="flex justify-between items-center w-full flex-col md:flex-row my-4">
                        <input type="text" name='name' id='name' placeholder="Your name" className=" px-4 py-3 mr-10 w-full h-4/5 border-b-green-500 border-b-2 my-4 " />
                        <input type="email" required id='email' name='email' placeholder="Email" className="border-b-green-500 w-full h-4/5 border-b-2 px-4 py-3 my-4 mr-10" />
                    </div>

                    <textarea name="message" id="msg" placeholder="Message" className="focus:outline-green-500 mt-4 px-3 py-3 h-4/5 w-[96%] border-b-2 border-green-400"></textarea>
                    <button type="submit" value="Send" className=" my-4 rounded-md hover:bg-green-600 border-2 border-green-400 text-center text-2xl px-6 py-2 w-1/3">Send</button>
                </form>
                
            </div>
        </div>
  )
}
