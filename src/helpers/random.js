import Questions from '../assets/questions.json';

const {sistemas,
geociencias,
contabilidad,
electromecanica,
mecatronica,
nanotecnologia,
electronica,
industrial,
gestionempresarial,
renovables,
petrolera} = Questions;

const random = (carrera, nombre)=>{
    const preguntas = [];
    for(let i = 0; i < 3; i++){
        const randomNumber = Math.floor(Math.random() * carrera.length);
        const pregunta = {
            pregunta: carrera[randomNumber],
            carrera: nombre
        };
        preguntas.push(pregunta);
    }
    return preguntas;
}

const randomQuestions = ()=>{
    const sistemasQuestions = random(sistemas, 'sistemas');
    const geocienciasQuestions = random(geociencias, 'geociencias');
    const contabilidadQuestions = random(contabilidad, 'contabilidad');
    const electromecanicaQuestions = random(electromecanica, 'electromecanica');
    const mecatronicaQuestions = random(mecatronica, 'mecatronica');
    const nanotecnologiaQuestions = random(nanotecnologia, 'nanotecnologia');
    const electronicaQuestions = random(electronica, 'electronica');
    const industrialQuestions = random(industrial, 'industrial');
    const gestionempresarialQuestions = random(gestionempresarial, 'gestionempresarial');
    const renovablesQuestions = random(renovables, 'renovables');
    const petroleraQuestions = random(petrolera, 'petrolera');

    const preguntas = [...sistemasQuestions, ...geocienciasQuestions, ...contabilidadQuestions, ...electromecanicaQuestions, ...mecatronicaQuestions, ...nanotecnologiaQuestions, ...electronicaQuestions, ...industrialQuestions, ...gestionempresarialQuestions, ...renovablesQuestions, ...petroleraQuestions];

    const preguntasRevueltas = preguntas.sort(()=>Math.random() - 0.5);

    return preguntasRevueltas;
}

export default randomQuestions;

