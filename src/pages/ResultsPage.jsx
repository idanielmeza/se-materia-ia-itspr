import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

const ResultsPage = ({results}) => {

    //Resultados de mayor a menor
    const resultados = Object.keys(results).sort((a, b) => results[b] - results[a]);
    const resultadosOrdenados = resultados.map(resultado => {
        return {
            resultado,
            valor: results[resultado]
        }
    }).sort((a, b) => b.valor - a.valor);


    return (
        <>
            <Navbar />
            <div className='w-11/12 mx-auto bg-white rounded-lg shadow-md p-4 h-fit my-20'>
                <h1 className='text-center text-2xl font-bold p-2'>Resultados</h1>
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold text-center'>
                        ¡Felicidades! tu mejor opcion es: <span className='font-bold text-xl text-red-800 uppercase'>{resultadosOrdenados[0].resultado}</span>
                        {resultadosOrdenados[0].resultado === 'industrial' && ' (mejor date de baja de la vida no sirves para nada)'}
                    </p>
                    <div className='w-full h-52 overflow-y-auto'>
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mx-auto rounded-md mt-2 ">
                        <thead class="text-xs text-black uppercase bg-gray-50 dark:bg-slate-100">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Carrera
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <div class="flex items-center">
                                        Resultados
                                    </div>
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <div class="flex items-center">
                                        Porcentaje
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {resultadosOrdenados.map(resultado => {
                                return (
                                    <tr className=" dark:bg-slate-40">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black uppercase">
                                            {resultado.resultado}
                                        </th>
                                        <td class="py-4 px-6">
                                            {resultado.valor}
                                        </td>
                                        <td class="py-4 px-6">
                                            {(resultado.valor / Object.keys(results).length * 100).toFixed(2)}%
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ResultsPage