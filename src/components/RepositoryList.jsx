import { useState, useEffect} from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../components/styles/repositories.scss'


// https://api.github.com/users/matheusmfl/repos
export function RepositoryList(){

    const [repositories, setRepositories] = useState([])
    //cuidado pra não deixar sem o segundo parâmetro o useEffect
    useEffect(()=> {
        fetch('https://api.github.com/users/matheusmfl/repos')
        .then(responde => responde.json())
        .then(data => setRepositories(data))
    }, []);

    console.log(repositories)
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            <RepositoryItem
             repository = {repositories}/>
            

            </ul>
        </section>
    )
}