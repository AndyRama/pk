import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Données personnelles sur le site PK Agencement : formulaire actuellement sans envoi, carte Google Maps, droits et contacts disponibles.",
};

export default function Page() {
  return (
    <LegalPage title="Politique de confidentialité" eyebrow="Vos données" intro="Ce que fait cette version du site avec vos données, les limites du formulaire et les moyens d’exercer vos droits.">
      <LegalSection title="Qui traite vos données">
        <p>PK AGENCEMENT, SARL, SIREN 990752131, est l’interlocuteur pour les données liées à ses échanges avec vous. Adresse du siège social enregistré : Bâtiment G, 190 rue Achard, 33300 Bordeaux. L’atelier présenté au 44 Rue du Faubourg des Arts, 33300 Bordeaux, est une adresse distincte.</p>
        <p>Cette politique décrit le code de la version actuelle, et non une chaîne de traitement de demandes déjà opérationnelle. L’e-mail de contact et les informations techniques non vérifiées sont signalés dans l’encadré. L’identité de l’éditeur est détaillée dans les <a href="/mentions-legales">mentions légales</a>.</p>
      </LegalSection>
      <LegalSection title="Données collectées">
        <p>Le formulaire présente des champs pour vos nom et prénom, téléphone, e-mail, type de projet, pièce concernée, budget indicatif, délai souhaité, description du projet, ainsi qu’un sélecteur de photos et plans. Les astérisques et la case affichés dans l’interface ne signifient pas qu’une demande est effectivement reçue.</p>
        <p>Dans cette version, le bouton d’envoi ne transmet aucune demande : l’action du formulaire est interrompue dans le navigateur, sans appel à un service d’envoi ni stockage applicatif. La sélection de fichiers reste locale : aucun téléversement n’est réalisé par ce formulaire. PK Agencement ne reçoit donc pas les informations ou pièces saisies par ce moyen. Pour une demande effective, utilisez le téléphone.</p>
        <p>Lors de la navigation, les serveurs qui fournissent le site ou la carte externe reçoivent des informations nécessaires aux requêtes, dont l’adresse IP et des caractéristiques du navigateur. Les éventuels journaux techniques de l’hébergement ne sont pas documentés à ce stade.</p>
      </LegalSection>
      <LegalSection title="Pourquoi et sur quelle base">
        <p>Les champs du formulaire sont destinés à décrire un projet et préparer une réponse ou un devis, mais aucun traitement de demande par envoi du formulaire n’est actif. La case affichée n’active pas ce service et ne constitue pas une autorisation générale de suivi de navigation.</p>
        <p>Pour une demande que vous adressez effectivement par téléphone ou courrier en vue d’un devis, les informations utiles peuvent relever de mesures précontractuelles prises à votre demande. Les traitements liés à une commande et aux obligations légales doivent être distingués. Leurs modalités réelles, destinataires et durées doivent être confirmés par la société avant d’être présentés comme une politique opérationnelle complète.</p>
        <p>La fourniture technique du site et l’affichage de la carte sont distincts de l’étude de votre projet. Les finalités et bases juridiques des éventuels journaux d’hébergement ainsi que les conditions de recours aux services externes restent à documenter ; leur présence n’est pas justifiée ici par un consentement supposé.</p>
      </LegalSection>
      <LegalSection title="Durée de conservation">
        <p>Aucune durée de conservation de dossiers transmis par ce formulaire ne peut être annoncée puisqu’il n’en transmet pas. La page ne crée aucun engagement de stockage privé des pièces. Les données encore présentes dans les champs dépendent de votre session et des fonctions de votre navigateur ; elles ne constituent pas un dossier reçu par PK Agencement.</p>
        <p>Les durées concernant les échanges reçus autrement, les devis, commandes et obligations comptables doivent être définies selon les traitements réellement mis en œuvre. La durée des éventuels journaux techniques et les règles des prestataires restent à vérifier ; aucune durée uniforme n’est affirmée.</p>
      </LegalSection>
      <LegalSection title="Destinataires et services externes">
        <p>Le formulaire ne transmet actuellement ni coordonnées ni fichiers à PK Agencement ou à un prestataire d’envoi. Cela ne signifie pas que toute navigation reste sans communication à un tiers.</p>
        <p>La rubrique contact intègre Google Maps dans une iframe chargée par le navigateur, éventuellement au défilement en raison du chargement différé. À son chargement, des requêtes sont adressées à Google, qui reçoit notamment l’adresse IP et des informations techniques du navigateur. Les liens vers l’itinéraire et les avis ouvrent également un service Google lorsque vous les suivez. Les modalités de ce fournisseur, dont les éventuels cookies, traitements et transferts hors de l’Union européenne, sont décrites dans la <a href="https://policies.google.com/privacy?hl=fr">politique de confidentialité de Google</a>.</p>
        <p>Le code applicatif consulté ne contient pas de dispositif de mesure d’audience ou de publicité identifié. Cette observation ne permet pas de garantir une absence de cookies ou de traceurs de bout en bout : la carte et l’environnement d’hébergement doivent être audités. Une politique descriptive ne remplace pas les mesures de consentement préalables éventuellement nécessaires. Voir les <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs">informations de la CNIL sur les cookies et traceurs</a>.</p>
      </LegalSection>
      <LegalSection title="Vos droits">
        <p>Selon le traitement et sa base juridique, vous pouvez demander l’accès, la rectification, l’effacement ou la limitation de vos données, exercer votre droit d’opposition à certains traitements et bénéficier de la portabilité lorsque ses conditions sont réunies. Si un traitement repose sur votre consentement, vous pouvez le retirer sans remettre en cause sa licéité antérieure.</p>
        <p>Pour toute question ou demande concernant les données détenues par PK Agencement, appelez le <a href="tel:+33766468345">07 66 46 83 45</a> ou écrivez à PK AGENCEMENT — Demande relative aux données personnelles, Bâtiment G, 190 rue Achard, 33300 Bordeaux. Précisez votre demande et un moyen de vous répondre ; ne transmettez pas de pièce d’identité spontanément. Le formulaire de ce site n’est pas un canal opérationnel d’exercice des droits.</p>
        <p>Le délai de réponse est en principe d’un mois à compter de la réception de la demande, avec prolongation possible dans les conditions prévues par le RGPD. La CNIL explique les <a href="https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles">droits pour maîtriser vos données personnelles</a>. Si vous estimez que vos droits ne sont pas respectés, vous pouvez <a href="https://www.cnil.fr/fr/plaintes">adresser une réclamation à la CNIL</a>.</p>
      </LegalSection>
      <LegalSection title="Hébergement des données et évolution du site">
        <p>L’identité de l’hébergeur, la localisation des serveurs, les accès, les éventuels sous-traitants, les garanties de sécurité et les transferts de données ne sont pas encore vérifiés. La liste des validations attendues est regroupée dans l’encadré ; cette page ne prétend pas qu’ils ont été audités.</p>
        <p>Avant tout raccordement du formulaire à une messagerie, un stockage de fichiers ou un autre service, cette politique devra être revue pour décrire les traitements effectifs : données nécessaires, finalités, bases juridiques, destinataires, durées, sécurité et éventuels transferts. Aucun de ces services n’est activé par la publication de ce texte.</p>
      </LegalSection>
    </LegalPage>
  );
}
