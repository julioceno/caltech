import React from 'react';
import SectionHeading from './SectionHeading';
import ContactCard from './ContactCard';
import TopLeftNotchCard from './TopLeftNotchCard';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  className = "",
}) => {
  const sectionTitle = "Vamos construir algo incrível juntos!";
  const sectionSubtitle = "Entre em contato conosco para uma consulta ou orçamento para seu próximo projeto comercial.";
  
  const contacts = [
    {
      title: "Falar com Comercial",
      subtitle: "Solicitar Orçamento Comercial",
      phone: "(16) 99325-9020",
      email: "comercial@caltech.com.br",
      whatsappLink: "https://wa.me/5516993259020",
      buttonText: "Entre em contato"
    },
    {
      title: "Falar com Engenharia", 
      subtitle: "Departamento de Engenharia",
      phone: "(16) 99325-9020",
      email: "engenharia@caltech.com.br",
      whatsappLink: "https://wa.me/5516993259020",
      buttonText: "Entre em contato"
    }
  ];

  return (
    <section className={`py-16 flex justify-center lg:justify-between ${className}`}>
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
                Sua operação exige soluções rápidas. Nós entregamos.
              </h3>
              <p className="mb-4">
                Não deixe parar depois o que garante a segurança e a produtividade 
                da sua planta hoje. Temos a equipe certificada e a agilidade que você 
                precisa para resolver seu problema agora.
              </p>
              <p className="font-bold">
                Não perca tempo. Fale com nossos engenheiros e resolva sua demanda.
              </p>
          </TopLeftNotchCard>
        </div>
  
    </section>
  );
};

export default ContactSection;