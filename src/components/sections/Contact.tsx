import React, { useEffect, useState, useRef } from 'react';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, InstagramIcon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message
  };

  emailjs.send('service_uyzla13', 'template_ijc11vg', templateParams, 'BcSiRtHLcveiBZ5mj')
    .then(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      setSubmitMessage('Something went wrong. Please try again later.');
      console.error('EmailJS Error:', error);
    });
};

  const socialLinks = [{
    name: 'GitHub',
    icon: <GithubIcon size={20} />,
    url: 'https://github.com/Kaveesha-2003'
  }, {
    name: 'LinkedIn',
    icon: <LinkedinIcon size={20} />,
    url: 'https://www.linkedin.com/in/kaveesha-sulakshana-6b486b310/'
  }, {
    name: 'Instagram',
    icon: <InstagramIcon size={20} />,
    url: 'https://www.instagram.com/kavee_zz_a'
  }];
  return <section id="contact" ref={sectionRef} className="min-h-screen py-20 opacity-0 transition-opacity duration-1000">
      <h2 className="text-3xl sm:text-4xl font-light mb-16 tracking-tight">
        Get in <span className="text-[#6EC6B0]">Touch</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="mb-12">
            <h3 className="text-xl font-light mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-4 flex items-center justify-center rounded-full bg-[#30382F] text-[#6EC6B0]">
                  <MailIcon size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:kaveeshasulakshana33@gmail.com" className="hover:text-[#6EC6B0] transition-colors">
                    kaveeshasulakshana33@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 mr-4 flex items-center justify-center rounded-full bg-[#30382F] text-[#6EC6B0]">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:0760630137" className="hover:text-[#6EC6B0] transition-colors">
                    0760630137
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-light mb-6">Social Media</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#30382F] text-[#6EC6B0] hover:bg-[#6EC6B0] hover:text-black transition-colors" aria-label={link.name}>
                  {link.icon}
                </a>)}
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-[#30382F]/50 border border-[#30382F] rounded-lg focus:outline-none focus:border-[#6EC6B0] transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[#30382F]/50 border border-[#30382F] rounded-lg focus:outline-none focus:border-[#6EC6B0] transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-[#30382F]/50 border border-[#30382F] rounded-lg focus:outline-none focus:border-[#6EC6B0] transition-colors" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-[#6EC6B0] text-black rounded-lg hover:bg-[#6EC6B0]/80 transition-colors flex items-center">
                {isSubmitting ? 'Sending...' : <>
                    Send Message <SendIcon size={16} className="ml-2" />
                  </>}
              </button>
              {submitMessage && <p className="mt-4 text-[#6EC6B0]">{submitMessage}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>;
};