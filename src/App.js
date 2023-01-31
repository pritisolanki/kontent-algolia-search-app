import './App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-hooks-web';


const searchClient = algoliasearch(
  'Q7IPUBMUDW',
  '1863d1c31343c2cbd1f35405d7f6eee2'
);

function Hit({ hit }) {
  return (
    <article>
      <h2>{hit.name}</h2>
      <p>{ (hit.type !== 'dummy') ? 'Written By:'+hit.content[1].name : ''}</p>
      <p>{hit.content[0].contents}</p>
      <p>
        <Highlight attribute="name" hit={hit} tagname="mark" />
        </p>
    </article>
  );
}
function App() {
  return (
    <div id="main-container">
      <h1 id="tagline">Algolia Search Box With Kontent.ai</h1>
      <InstantSearch searchClient={searchClient} indexName="news">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
}

export default App;
