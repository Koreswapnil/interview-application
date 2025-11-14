import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import JavascriptScreen from './Screens/JavascriptScreen';
import HtmlCssScreen from './Screens/HtmlCssScreen';
import ReactScreen from './Screens/ReactScreen';
import NodeScreen from './Screens/NodeScreen';
import ExpressScreen from './Screens/ExpressScreen';
import QuizScreen from './components/QuizScreen';
import LoginScreen from './Screens/LoginScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/quiz" element={<QuizScreen />} />
      <Route path="/html&css" element={<HtmlCssScreen />} />
      <Route path="/javascript" element={<JavascriptScreen />} />
      <Route path="/react" element={<ReactScreen />} />
      <Route path="/node" element={<NodeScreen />} />
      <Route path="/express" element={<ExpressScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
