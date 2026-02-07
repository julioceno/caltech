import React from 'react';
import SectionHeading from './SectionHeading';
import ContactCard from './ContactCard';
import TopLeftNotchCard from './TopLeftNotchCard';
import { contentData } from '../data/texts';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  className = "",
}) => {
  const sectionTitle = contentData.contactSection.title;
  const sectionSubtitle = contentData.contactSection.subtitle;
  const contacts = contentData.contactSection.contacts;

  return (
    <section id='contatos' className={`py-16 flex justify-center lg:justify-between ${className}`}>
      <div>
        <div className="mx-auto lg:mx-0 mb-10 md:w-xl">
            <SectionHeading 
                title={sectionTitle}
                subtitle={sectionSubtitle}
              />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8 lg:gap-12">
            {contacts.map((contact, index) => (
              <ContactCard
                key={index}
                title={contact.title}
                subtitle={contact.subtitle}
                phone={contact.phone}
                email={contact.email}
                whatsappLink={contact.whatsappLink}
                buttonText={contact.buttonText}
              />
            ))}
          </div>
      </div>
        
        <div className='hidden lg:block w-xl'>
          <TopLeftNotchCard>
              <h3 className=" font-bold text-orange-500 mb-4">
                {contentData.contactSection.topLeftCard.heading}
              </h3>
              <p className="mb-4">
                {contentData.contactSection.topLeftCard.paragraph1}
              </p>
              <p className="font-bold">
                {contentData.contactSection.topLeftCard.paragraph2}
              </p>
          </TopLeftNotchCard>
        </div>
  
    </section>
  );
};

export default ContactSection;