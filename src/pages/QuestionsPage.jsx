import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import {useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';


const QuestionsPage = ({questions,currentQuestion,setCurrentQuestion, setResults, results}) => {

    const siRef = useRef();
    const noRef = useRef();

    const navigate = useNavigate();

    const [ answer, setAnswer ] = useState(null);

    const nextQuestion = () => {
        if( answer === null ){
            alert('Selecciona una opción');
            return;
        }

        if(answer === 'si'){
            setResults({
                ...results,
                [questions[currentQuestion].carrera]: results[questions[currentQuestion].carrera] + 1
            })
        }

        if(currentQuestion == 32){
            navigate('/results');
            return;
        }
        
        setCurrentQuestion(currentQuestion + 1);
        setAnswer(null);
        siRef.current.checked = false;
        noRef.current.checked = false;
    }

    const selectAnswer = e =>{
        setAnswer(e.target.value);
    }

    return (
        <>
        <Navbar />
        <div className='w-11/12 mx-auto bg-white rounded-lg shadow-md p-4 h-fit m-40'>
            <h1 className='text-center text-2xl font-bold p-2'>Pregunta</h1>

            <p className='mx-auto w-10/12 text-center text-xl'>
                {questions[currentQuestion].pregunta}
            </p>

            <div className='w-10/12 mx-auto my-5 flex flex-col justify-center items-center'>
                <p className='font-bold'>Selecciona tu respuesta</p>
                <div 
                    onChange = {selectAnswer}
                    className='flex justify-center items-center mt-2'>
                        <input
                            ref={siRef}
                        className='mx-2' type="radio" name="option" value="si" /> Si
                    
                        <input
                            ref={noRef}
                        className='mx-2' type="radio" name="option" value="no" /> No
                </div>
                
            </div>

            <div className='flex justify-around my-3'>
                {
                    currentQuestion != 32 ? (
                    <button 
                        onClick={nextQuestion}
                        className='px-4 py-2 bg-red-800 hover:bg-red-900 shadow-md rounded-md text-white'>
                        {'>'}
                    </button>
                    ) :
                    (
                        <button 
                            onClick={nextQuestion}
                        className='px-4 py-2 bg-blue-800 hover:bg-red-900 shadow-md rounded-md text-white'
                        >Finalizar</button>
                    )
                }
                
            </div>

        </div>
        <Footer />
        </>
    )
}

export default QuestionsPage