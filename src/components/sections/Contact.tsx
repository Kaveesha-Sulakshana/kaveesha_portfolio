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

const socialLinks = [
  {
    name: 'GitHub',
    icon: <GithubIcon size={20} />,
    url: 'https://github.com/Kaveesha-Sulakshana',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinIcon size={20} />,
    url: 'https://www.linkedin.com/in/kaveesha-sulakshana-6b486b310/',
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon size={20} />,
    url: 'https://www.instagram.com/kavee_zz_a',
  },
  {
    name: 'Facebook',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.8-3.9c1.1 0 2.2.2 2.2.2v2.5H15c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 3h-2.4v7A10 10 0 0 0 22 12Z"/></svg>,
    url: 'https://www.facebook.com/share/19DpE6n6jW/?mibextid=wwXIfr',
  },
  {
    name: 'X',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M20 4h-3l-5 6.5L7 4H4l7.5 9.8L4 20h3l5-6.5L17 20h3l-7.5-9.8L20 4z" /></svg>,
    url: 'https://x.com/kaveeshasulaks1?s=21',
  },

  {
    name: 'WhatsApp',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.62-6.01C.122 5.29 5.397 0 12.061 0 18.729 0 24 5.29 24 11.826c0 6.535-5.271 11.827-11.939 11.827a11.948 11.948 0 0 1-6.084-1.615L.057 24zm6.597-3.807c1.735.995 3.164 1.591 5.367 1.591 5.448 0 9.89-4.412 9.89-9.857C21.911 6.59 17.47 2.18 12.022 2.18c-5.444 0-9.864 4.41-9.864 9.847 0 2.208.671 3.604 1.78 5.37l-.937 3.42 3.653-.82zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.668-1.612-.916-2.206-.242-.579-.487-.501-.668-.51-.173-.007-.372-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.29.173-1.413z"/></svg>,
    url: 'https://wa.me/94760630137',
  },
];
;
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
  {socialLinks.map((link, index) => (
    <a
      key={index}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-[#30382F] text-[#6EC6B0] hover:bg-[#6EC6B0] hover:text-black transition-colors"
      aria-label={link.name}
    >
      {link.icon}
    </a>
  ))}
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