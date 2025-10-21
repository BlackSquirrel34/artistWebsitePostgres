import { RichTextBlock } from '@/blocks/richText/schema'
import { CollectionConfig } from 'payload'

export const Texts: CollectionConfig = {
  slug: 'texts',
  labels: {
    singular: 'Text',
    plural: 'Texte',
  },
  admin: {
    hidden: true,
  },
  // make visible just for dev.
  // that's how we ensure no orphaned texts are created,  e.g.
  // that are not appearing on any page or where linking is inconsistent to pages collection
  // upon rendering we'll just use the toc and query via the relationship
  //  hidden: true,
  fields: [
    {
      name: 'title',
      label: 'Überschrift',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Untertitel',
      type: 'text',
    },
    {
      name: 'author',
      label: 'Autor',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Content',
      type: 'blocks',
      blocks: [RichTextBlock],
    },
  ],
}

// wenn jemand einen text hinzufügt gibt es einen hook, der sicher stellt,
// dass die texte nur mit der seite verknüpft werdne deren slug "texte" lautet
// ALLE texte sollten mit dieser seite automatisiert verknüpft werden, keine ausnahmen.
// documentatin nachlesen zum theme pre-populating fields with default values.

// another idea:
// 1) we'll populate the tOC on the Front-end ONLY, by scraping the texts associated with the page
// form the api inside its own extract-toc function. this prevents data duplicates even better.
// this generate-toc function will of course run only on teh texte-seite and be hardcoded there by checking
// hwther the slugi s "texte" and the nadding TOC accordingly.
// so maybe at the top of the texte-seite we'll run a check to see whether texts are there and then
// generate a TOC from what#s available

// we now can allow to add texts via Pages. instead of making its own collection lets make this a field inside the
// pages itself. addings texts on any page will then be possible without going into relationship mess
// or having to fix things with hooks.

// steps: include something re-odeling the text slots under the page collection.
// make the relaitonfield hidden if it is not
// check if adding texts with titel, subtitle etc works directly on the a page
// get rid of texts collection and TOC global.
// add a texts page with all the texts we need for the project

// would be great if we could populate the navigation by querying for existing sites,
// this we also avoid redundancies and inconsistencies. but this is just a fancy add-on
// i guess that often there will not be a side added.
// we then can just hide the navigation and get rid of the problem.
// for for the long term would be great knowing hwo to do that. dynamically populating the nav.

// lets also hide media collection in the end, user can uplaod things via pages nad subpages.
// we'll have accounted for the edge-case of the pdf then already.

// ide: we'll just tell our navbar component on the frontend to ask the pages api about which pages we have, and their slugs,
// as well as sub-pages, and store this in some array or key value object.
// then render out nav-items by mapping over them.
// this eliminates the need for an extra nav-global. and rules out inconsistencies.
// new pages will automatically appear on the navbar and the admin panel is cleaned up further.
