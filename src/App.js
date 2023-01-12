import './App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';


const searchClient = algoliasearch(
  'Q7IPUBMUDW',
  '1863d1c31343c2cbd1f35405d7f6eee2'
);

function Hit({ hit }) {
  return (
    <article>
      <h2>{hit.name}</h2>
      <p>{hit.content[0].contents}</p>
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
