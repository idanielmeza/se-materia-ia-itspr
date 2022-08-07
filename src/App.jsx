import { useState } from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import randomQuestions from './helpers/random';

import WelcomePage from './pages/WelcomePage';
import QuestionsPage from './pages/QuestionsPage';
import ResultsPage from './pages/ResultsPage';

const App = () => {

    const [questions, setQuestions] = useState(randomQuestions());
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [results, setResults] = useState({
        sistemas: 0,
        geociencias: 0,
        contabilidad: 0,
        electromecanica: 0,
        mecatronica: 0,
        nanotecnologia: 0,
        electronica: 0,
        industrial: 0,
        gestionempresarial: 0,
        renovables: 0,
        petrolera: 0
    });

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/questions" element={<QuestionsPage 
            setQuestions={setQuestions}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            currentQuestion={currentQuestion}
            setResults={setResults}
            results={results}
          />} />
          <Route path="/results" element={<ResultsPage
            results={results}
          />} />

        </Routes>

      </BrowserRouter>
    )
}

export default App;