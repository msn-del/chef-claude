
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Main from './Main.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <Header />
    <Main />
 </>
);