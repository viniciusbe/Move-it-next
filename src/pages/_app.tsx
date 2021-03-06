import { Provider } from 'next-auth/client';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {

  return (
    <Provider session={pageProps.session}>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </Provider>
  )

}


export default MyApp;
