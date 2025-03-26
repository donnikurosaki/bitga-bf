'use client';

import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';
import AnimatedElement from '../ui/AnimatedElement';

const FAQSection = () => {
  return (
    <Section id="faq" className="bg-white dark:bg-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="slide-up" delay={0.1}>
          <SectionTitle 
            title="Questions fréquentes" 
            subtitle="Trouvez rapidement des réponses à vos questions sur Bitga"
            centered
          />
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={0.3} className="mt-12 max-w-4xl mx-auto">
          <Accordion 
            items={[
              {
                question: "Comment fonctionne le mode hors ligne ?",
                answer: "Bitga stocke toutes vos données localement sur votre appareil. Vous pouvez continuer à enregistrer des ventes, gérer votre stock et créer des factures même sans connexion internet. Dès que vous êtes à nouveau connecté, toutes les données se synchronisent automatiquement avec le serveur."
              },
              {
                question: "Puis-je utiliser Bitga sur plusieurs appareils ?",
                answer: "Oui, vous pouvez utiliser Bitga sur autant d'appareils que vous le souhaitez. Toutes vos données sont synchronisées entre vos appareils dès qu'ils sont connectés à internet."
              },
              {
                question: "Comment gérer les permissions de mes vendeurs ?",
                answer: "Bitga vous permet de créer différents profils d'utilisateurs avec des permissions spécifiques. Vous pouvez définir qui peut voir les rapports, modifier les prix, accéder aux données sensibles, etc. Tout se configure facilement depuis le tableau de bord administrateur."
              },
              {
                question: "Est-ce que je peux importer mon inventaire existant ?",
                answer: "Absolument ! Bitga vous permet d'importer votre inventaire existant à partir de fichiers Excel ou CSV. Vous pouvez également saisir manuellement vos produits ou utiliser notre API pour une intégration personnalisée."
              },
              {
                question: "Comment sont sécurisées mes données ?",
                answer: "La sécurité est notre priorité. Toutes vos données sont chiffrées de bout en bout, aussi bien pendant la transmission que lors du stockage. Nous effectuons des sauvegardes régulières et utilisons des serveurs sécurisés conformes aux normes internationales."
              }
            ]}
          />
        </AnimatedElement>
      </div>
    </Section>
  );
};

export default FAQSection;