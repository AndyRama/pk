import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Identité de PK Agencement, siège social, atelier, informations de publication et points juridiques restant à valider.",
};

export default function Page() {
  return (
    <LegalPage title="Mentions légales" eyebrow="Informations légales" intro="Les informations légales relatives à l’édition et à l’hébergement de ce site.">
      <LegalSection title="Éditeur du site">
        <p>Le site présente l’activité de PK AGENCEMENT, société à responsabilité limitée (SARL). SIREN : 990752131. SIRET du siège : 99075213100013. TVA intracommunautaire : FR59990752131.</p>
        <p>Siège social enregistré : Bâtiment G, 190 rue Achard, 33300 Bordeaux.</p>
        <p>Atelier indiqué sur le site : 44 Rue du Faubourg des Arts, 33300 Bordeaux. Cette adresse de présentation de l’atelier est distincte du siège social enregistré.</p>
        <p>Téléphone : <a href="tel:+33766468345">07 66 46 83 45</a>. Pour un courrier relatif au site, écrire à PK AGENCEMENT au siège social indiqué ci-dessus. Le canal électronique reste à valider dans l’encadré.</p>
        <p>L’identité et les identifiants proviennent de <a href="https://recherche-entreprises.api.gouv.fr/search?q=990752131&per_page=1">l’API publique de recherche d’entreprises</a>. Les mentions restant à confirmer sont regroupées dans l’encadré, sans valeur supposée.</p>
      </LegalSection>
      <LegalSection title="Responsable de la publication">
        <p>La société doit confirmer la personne nommément responsable de la publication. Le nom n’est pas déduit ici de la seule présence d’un dirigeant au registre. Cette validation figure dans l’encadré.</p>
      </LegalSection>
      <LegalSection title="Hébergement">
        <p>Les coordonnées de l’hébergeur du site effectivement mis en ligne ne sont pas encore vérifiées. Le domaine de la maquette d’origine ne permet pas d’identifier l’hébergeur de cette version. Les informations à fournir sont précisées dans l’encadré.</p>
      </LegalSection>
      <LegalSection title="Propriété intellectuelle">
        <p>Les textes, photographies, dessins, plans, visuels 3D et éléments graphiques peuvent être protégés par le droit d’auteur. Leur présence sur le site ne constitue pas une autorisation de réutilisation. Sous réserve des exceptions légales, une reproduction ou une représentation nécessite l’autorisation du titulaire des droits concerné.</p>
        <p>Les visuels portant la mention « Visuel d’ambiance » sont illustratifs et ne doivent pas être interprétés comme des photographies de réalisations livrées. Les crédits, licences et autorisations de diffusion des photographies et des éléments identifiants doivent être vérifiés ; aucun accord des clients ou des auteurs n’est présumé par cette page.</p>
      </LegalSection>
      <LegalSection title="Données personnelles">
        <p>La <a href="/politique-de-confidentialite">politique de confidentialité</a> décrit le fonctionnement actuel du formulaire, les services externes et les moyens d’exercer vos droits. Dans cette version, le formulaire n’envoie pas les demandes ni les fichiers sélectionnés.</p>
      </LegalSection>
      <LegalSection title="Médiation de la consommation">
        <p>En cas de litige de consommation, une démarche amiable peut être engagée auprès de PK Agencement par téléphone ou par courrier au siège. Le recours à un médiateur de la consommation est gratuit pour le consommateur, dans les conditions de recevabilité applicables, notamment après une réclamation préalable au professionnel.</p>
        <p>Aucun médiateur n’est désigné ici faute de justificatif vérifié. Son identité et ses coordonnées de saisine restent à valider dans l’encadré ; cette page ne remplace pas cette information obligatoire. Voir les <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F37351">informations officielles sur les mentions obligatoires d’un site d’entreprise</a>.</p>
      </LegalSection>
      <LegalSection title="Avis clients">
        <p>La présentation d’origine indique que les avis sont issus de la fiche Google de PK Agencement et reformulés en français. Les textes affichés ne constituent pas des citations littérales ni un flux Google actualisé en temps réel. Leur fidélité, leur provenance et les autorisations éventuelles de reprise restent à vérifier ; aucun accord des personnes concernées n’est affirmé ici.</p>
        <p>Les notes et nombres d’avis présentés ne sont pas une garantie de résultat pour un projet. Consultez <a href="https://www.google.com/maps/search/?api=1&query=PK%20Agencement%20Bordeaux">la fiche Google</a> pour les avis disponibles sur ce service.</p>
      </LegalSection>
    </LegalPage>
  );
}
